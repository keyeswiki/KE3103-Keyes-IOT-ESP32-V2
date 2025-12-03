# 作者 : www.keyes-robot.com

#导入Pin, neopiexl和time模块.
from machine import Pin
import neopixel
import time

button1 = Pin(4, Pin.IN, Pin.PULL_UP)
button2 = Pin(32, Pin.IN, Pin.PULL_UP)
count = 0

#定义连接到新像素的引脚和led的数量.
pin = Pin(26, Pin.OUT)
np = neopixel.NeoPixel(pin, 4) 

#亮度:0 - 255 
brightness=100                                
colors=[[0,0,0],                             #关闭
        [brightness,0,0],                    #红
        [0,brightness,0],                    #绿
        [0,0,brightness],                    #蓝
        [brightness,brightness,0],           #黄
        [brightness,0,brightness],           #品红
        [brightness,brightness,brightness]   #白
        ]                              

def func_color(val):
    for j in range(0,4):
        np[j]=colors[val]
        np.write()
        time.sleep_ms(50)
        
#嵌套两个for循环，使模块重复显示红、绿、蓝、白和OFF五种状态.    
while True:
    btnVal1 = button1.value()  # 读取按钮1的值
    #print("button1 =",btnVal1)  #用shell窗口中打印出来
    if(btnVal1 == 0):
        time.sleep(0.01)
        while(btnVal1 == 0):
            btnVal1 = button1.value()
            if(btnVal1 == 1):
                count = count - 1
                print(count)
                if(count <= 0):
                    count = 0
                
    btnVal2 = button2.value()        
    if(btnVal2 == 0):
        time.sleep(0.01)
        while(btnVal2 == 0):
            btnVal2 = button2.value()
            if(btnVal2 == 1):
                count = count + 1
                print(count)
                if(count >= 6):
                    count = 6
    
    if(count == 0):
        func_color(0)
    elif(count == 1):
        func_color(1)
    elif(count == 2):
        func_color(2)
    elif(count == 3):
        func_color(3)
    elif(count == 4):
        func_color(4)
    elif(count == 5):
        func_color(5)
    elif(count == 6):
        func_color(6)