# 作者 : www.keyes-robot.com

from machine import Pin,PWM
import time
#电机的两个引脚
INA =PWM(Pin(19,Pin.OUT),10000,0)#INA对应于IN+
INB =PWM(Pin(18,Pin.OUT),10000,2)#INB对应于IN- 

try:
    while True:
        #逆时针方向2秒
        INA.duty(0) #占空比范围为0-1023
        INB.duty(700)
        time.sleep(2)
        #停止1秒
        INA.duty(0)
        INB.duty(0)
        time.sleep(1)
        #顺时针旋转2秒
        INA.duty(700)
        INB.duty(0)
        time.sleep(2)
        #停止1秒
        INA.duty(0)
        INB.duty(0)
        time.sleep(1)
except:
    INA.duty(0)
    INB.duty(0)
    INA.deinit()
    INB.deinit()