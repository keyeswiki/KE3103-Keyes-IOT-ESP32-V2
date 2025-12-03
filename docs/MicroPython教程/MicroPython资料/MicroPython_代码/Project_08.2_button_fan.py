# 作者 : www.keyes-robot.com

from machine import Pin,PWM
import time
#电机的两个引脚
INA =PWM(Pin(19,Pin.OUT),10000,0)##INA对应于IN+
INB =PWM(Pin(18,Pin.OUT),10000,2)#INB对应于IN-
button1 = Pin(4, Pin.IN, Pin.PULL_UP)
count = 0

try:
    while True:
        btnVal1 = button1.value()  # 读取按钮1的值
        if(btnVal1 == 0):
            time.sleep(0.01)
            while(btnVal1 == 0):
                btnVal1 = button1.value()
                if(btnVal1 == 1):
                    count = count + 1
                    print(count)
        val = count % 2
        if(val == 1):
            INA.duty(0) #占空比范围为0-1023
            INB.duty(700)
        else:
            INA.duty(0)
            INB.duty(0)
except:
    INA.duty(0)
    INB.duty(0)
    INA.deinit()
    INB.deinit()