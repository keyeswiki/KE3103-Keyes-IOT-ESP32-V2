# 作者 : www.keyes-robot.com

# 导入machine, time和dht模块
import machine
import time
import dht
from time import sleep_ms, ticks_ms 
from machine import I2C, Pin 
from i2c_lcd import I2cLcd 

#关联DHT11与引脚(17).
DHT = dht.DHT11(machine.Pin(17))

DEFAULT_I2C_ADDR = 0x27

i2c = I2C(scl=Pin(22), sda=Pin(21), freq=400000) 
lcd = I2cLcd(i2c, DEFAULT_I2C_ADDR, 2, 16)

while True:
    DHT.measure() # 启动DHT11测量一次数据。
   # 调用DHT的内置函数获取温度和湿度数据，并打印在 “Shell”.
    print('temperature:',DHT.temperature(),'℃','humidity:',DHT.humidity(),'%')
    lcd.move_to(1, 0) 
    lcd.putstr('Temp:{}C'.format(DHT.temperature()))
    lcd.move_to(1, 1)
    lcd.putstr('Hum:{}%RH'.format(DHT.humidity()))
    time.sleep_ms(500)