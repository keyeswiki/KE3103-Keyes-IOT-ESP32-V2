# 作者 : www.keyes-robot.com

import time
from machine import Pin,PWM

#ESP32 PWM引脚的输出方式与传统控制器不同.它可以通过初始化阶段的PWM参数来改变频率和占空比.
#定义GPIO 12的输出频率为10000Hz，占空比为0，分配给PWM.
pwm =PWM(Pin(12,Pin.OUT),10000,0)

try:
    while True: 
#占空比范围为0-1023，因此我们使用第一个for环路来控制PWM来改变占空比值，
#使PWM输出0% -100%;使用第二个for循环使PWM输出100%-0%。
 
        for i in range(0,1023):
            pwm.duty(i)
            time.sleep_ms(1)
            
        for i in range(0,1023):
            pwm.duty(1023-i)
            time.sleep_ms(1)  
except:
#每次使用PWM时，将打开硬件定时器配合它。因此，每次使用PWM后,
#需要调用deinit()来关闭计时器。否则，下次PWM可能无法工作.
    pwm.deinit()