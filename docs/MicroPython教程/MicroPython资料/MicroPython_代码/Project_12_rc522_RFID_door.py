# 作者 : www.keyes-robot.com

from machine import Pin, PWM,I2C, Pin
import time
from mfrc522_i2c import mfrc522

pwm = PWM(Pin(13))  
pwm.freq(50)
button1 = Pin(4, Pin.IN, Pin.PULL_UP)
#i2c config
addr = 0x28
scl = 22
sda = 21
    
rc522 = mfrc522(scl, sda, addr)
rc522.PCD_Init()
rc522.ShowReaderDetails()  # 显示PCD - MFRC522读卡器详细信息

data = 0
#关门
pwm.duty(25)  
time.sleep(1)

while True:
    if rc522.PICC_IsNewCardPresent():
        #print("Is new card present!")
        if rc522.PICC_ReadCardSerial() == True:
            print("Card UID:")
            #print(rc522.uid.uidByte[0 : rc522.uid.size])
            for i in rc522.uid.uidByte[0 : rc522.uid.size]:
                data = data + i
        print(data)
        if(data == 656): 
            pwm.duty(120) 
            time.sleep(1)
            print("open") 
        else:
            print("error")
        data = 0
    btnVal1 = button1.value()
    if(btnVal1 == 0):
        pwm.duty(25)
        time.sleep(1)
        print("close")
    time.sleep(1)