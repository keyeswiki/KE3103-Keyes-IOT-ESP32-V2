# 作者 : www.keyes-robot.com

from machine import UART, Pin, PWM
import time

# 定义引脚常量
RX_PIN = 27   # 引脚 GPT027 为 RX
TX_PIN = 16   # 引脚 GPT016 为 TX

# 使用UART2作为替代（如果硬件连接允许）
uart = UART(2, baudrate=9600, rx=RX_PIN, tx=TX_PIN)
 
def loop():
    if uart.any():  # 检查是否有数据可读
        command = uart.read(1)  # 读取一个字节
        if command:
            command = command[0]  # 获取字节值
             
            # 回传接收到的命令（可选）
            uart.write(str(command).encode())
            print(f"执行命令: {command}")

# 主程序
if __name__ == "__main__":
    while True:
        loop()
        time.sleep(0.1)  # 短暂延迟以减少CPU占用