# 作者 : www.keyes-robot.com

# 导入引脚、ADC和DAC模块.
from machine import ADC,Pin,DAC,PWM
import time
pwm = PWM(Pin(5))  
pwm.freq(50)

# 打开ADC并配置0-3.3V的范围 
adc=ADC(Pin(34))
adc.atten(ADC.ATTN_11DB)
adc.width(ADC.WIDTH_12BIT)
pwm.duty(80) 
time.sleep(1)

# 每0.1秒读取一次ADC值，将ADC值转换为DAC值并输出，将这些数据打印到“Shell”窗口中。 
try:
    while True:
        adcVal=adc.read()
        dacVal=adcVal//16 
        voltage = adcVal / 4095.0 * 3.3
        print("ADC Val:",adcVal,"DACVal:",dacVal,"Voltage:",voltage,"V")
        if(voltage > 0.6):
            pwm.duty(25)
            time.sleep(1)
        else:
            pwm.duty(80)
            time.sleep(1)
        time.sleep(0.1)
except:
    pass