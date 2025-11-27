# 作者 : www.keyes-robot.com

from machine import UART, Pin, PWM
import time

# 定义引脚常量
RX_PIN = 27      # 引脚 GPT027 为 RX
TX_PIN = 16      # 引脚 GPT016 为 TX

#电机的两个引脚
INA =PWM(Pin(19,Pin.OUT),10000,0) #INA对应于IN+
INB =PWM(Pin(18,Pin.OUT),10000,2) #INB对应于IN-

# 使用UART2作为替代（如果硬件连接允许）
uart = UART(2, baudrate=9600, rx=RX_PIN, tx=TX_PIN)

def setup():
    print("系统启动...")
    INA.duty(0) # 初始关闭风扇
    INB.duty(0) 
    
def loop():
    if uart.any():  # 检查是否有数据可读
        command = uart.read(1)  # 读取一个字节
        if command:
            command = command[0]  # 获取字节值
            
            if command == 5:
                INA.duty(700) #占空比范围为0-1023
                INB.duty(0)
                print("打开风扇")
            elif command == 7:
                INA.duty(1000) 
                INB.duty(0)
                print("转速加快")
            elif command == 8:
                INA.duty(700) 
                INB.duty(0)
                print("转速减慢")
            elif command == 6:
                INA.duty(0) 
                INB.duty(0)
                print("关闭风扇")
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