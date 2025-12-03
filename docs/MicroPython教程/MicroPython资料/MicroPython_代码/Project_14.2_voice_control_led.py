# 作者 : www.keyes-robot.com

from machine import UART, Pin, PWM
import time

# 定义引脚常量
RX_PIN = 27   # 引脚 GPT027 为 RX
TX_PIN = 16   # 引脚 GPT016 为 TX
LED_PIN = 12  # 定义LED引脚

# LED亮度等级
LED_OFF = 0
LED_DIM = 100
LED_MEDIUM = 150
LED_BRIGHT = 255

# 初始化LED PWM
led = PWM(Pin(LED_PIN))
led.freq(1000)  # 设置PWM频率为1kHz

# 使用UART2作为替代（如果硬件连接允许）
uart = UART(2, baudrate=9600, rx=RX_PIN, tx=TX_PIN)
 
def setup():
    print("系统启动...")
    analog_write(LED_OFF)  # 初始关闭LED

def analog_write(value):
    """设置LED亮度，将0-255映射到0-1023"""
    pwm_value = int(value * 1023 / 255)
    led.duty(pwm_value)

def loop():
    if uart.any():  # 检查是否有数据可读
        command = uart.read(1)  # 读取一个字节
        if command:
            command = command[0]  # 获取字节值
            
            if command == 1:
                analog_write(LED_MEDIUM)
                print("设置为中等亮度")
            elif command == 2:
                analog_write(LED_OFF)
                print("关闭LED")
            elif command == 3:
                analog_write(LED_BRIGHT)
                print("设置为最亮")
            elif command == 4:
                analog_write(LED_DIM)
                print("设置为暗光")
            else:
                print(f"未知命令: {command}")
                return
            
            # 回传接收到的命令（可选）
            uart.write(str(command).encode())
            print(f"执行命令: {command}")

# 主程序
if __name__ == "__main__":
    setup()
    while True:
        loop()
        time.sleep(0.1)  # 短暂延迟以减少CPU占用