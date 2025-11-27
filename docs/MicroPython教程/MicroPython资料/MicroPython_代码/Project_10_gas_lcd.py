# 作者 : www.keyes-robot.com

from time import sleep_ms, ticks_ms 
from machine import I2C, Pin, PWM 
from i2c_lcd import I2cLcd
import time

DEFAULT_I2C_ADDR = 0x27

i2c = I2C(scl=Pin(22), sda=Pin(21), freq=400000) 
lcd = I2cLcd(i2c, DEFAULT_I2C_ADDR, 2, 16)

gas = Pin(23, Pin.IN, Pin.PULL_UP)

buzzer = PWM(Pin(25))
buzzer.duty(0)

while True:
    gasVal = gas.value()  # 读取MQ-2的值
    print("gas =",gasVal) # 在shell窗口中打印出来
    #lcd.move_to(1, 1)
    #lcd.putstr('val: {}'.format(gasVal))
    if(gasVal == 1):
        lcd.clear()
        lcd.move_to(1, 0)
        lcd.putstr('Safety')
        buzzer.duty(0)
    else:
        lcd.clear()
        lcd.move_to(1, 0)
        lcd.putstr('dangerous')
        buzzer.duty(440) 
        time.sleep(0.1)
        buzzer.duty(0)
        time.sleep(0.1)
    time.sleep(0.1) #延时 0.1秒