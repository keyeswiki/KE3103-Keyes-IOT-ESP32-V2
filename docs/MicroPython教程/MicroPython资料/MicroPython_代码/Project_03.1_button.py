# 作者 : www.keyes-robot.com

from machine import Pin
import time

button1 = Pin(4, Pin.IN, Pin.PULL_UP)

while True:
    btnVal1 = button1.value()  # 读取按钮1的值
    print("button1 =",btnVal1)  #在shell窗口打印出来
    time.sleep(0.1) #延时 0.1秒

