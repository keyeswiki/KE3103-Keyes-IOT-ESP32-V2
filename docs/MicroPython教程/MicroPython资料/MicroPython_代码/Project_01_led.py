# 作者 : www.keyes-robot.com

from machine import Pin
import time

led = Pin(12, Pin.OUT)# 构建一个LED对象，将外部LED灯连接到引脚12，并将引脚12设置为输出模式
while True:
    led.value(1)# 点亮LED
    time.sleep(1)# 延时1秒
    led.value(0)# 熄灭LED
    time.sleep(1)# 延时1秒