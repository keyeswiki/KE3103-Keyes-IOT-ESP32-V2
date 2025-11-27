# 作者 : www.keyes-robot.com

from machine import Pin
import time

button1 = Pin(4, Pin.IN, Pin.PULL_UP)
led = Pin(12, Pin.OUT)
count = 0

while True:
    btnVal1 = button1.value()  # 读取按钮1的值
    #print("button1 =",btnVal1)  #在shell窗口打印出来
    if(btnVal1 == 0):
        time.sleep(0.01)
        while(btnVal1 == 0):
            btnVal1 = button1.value()
            if(btnVal1 == 1):
                count = count + 1
                print(count)
    val = count % 2
    if(val == 1):
        led.value(1)
    else:
        led.value(0)
    time.sleep(0.1) #延时 0.1秒
    


