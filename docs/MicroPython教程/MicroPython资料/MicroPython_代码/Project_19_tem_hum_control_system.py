# 作者 : www.keyes-robot.com

from machine import Pin, PWM, I2C, UART
import time
import dht

# 引脚定义
RX_PIN = 27
TX_PIN = 16
DHT11_PIN = 17
MOTOR_PIN1 = 19
MOTOR_PIN2 = 18

# 变量定义
yuyin = 0
temperature = 0
humidity = 0

# LCD初始化
i2c = I2C(scl=Pin(22), sda=Pin(21), freq=400000)
lcd = None

try:
    from i2c_lcd import I2cLcd
    lcd = I2cLcd(i2c, 0x27, 2, 16)
except:
    print("LCD初始化失败")

# SU-03T语音模块串口初始化
uart = UART(2, baudrate=9600, rx=RX_PIN, tx=TX_PIN)

# DHT11初始化
dht_sensor = dht.DHT11(Pin(DHT11_PIN))

# 电机初始化
motor_pin1 = Pin(MOTOR_PIN1, Pin.OUT)
motor_pin2 = Pin(MOTOR_PIN2, Pin.OUT)

# 串口通信协议定义
UART_SEND_MAX = 32
UART_MSG_HEAD_LEN = 2
UART_MSG_FOOT_LEN = 2

# 消息号定义
U_MSG_bozhensgshu = 1
U_MSG_boxiaoshu = 2
U_MSG_bobao1 = 3
U_MSG_bobao2 = 4
U_MSG_bobao3 = 5
U_MSG_bobao4 = 6
U_MSG_bobao5 = 7
U_MSG_bobao6 = 8
U_MSG_bobao7 = 9
U_MSG_bobao8 = 10
U_MSG_bobao9 = 11
U_MSG_bobao10 = 12
U_MSG_bobao11 = 13
U_MSG_bobao12 = 14
U_MSG_bobao13 = 15
U_MSG_bobao14 = 16
U_MSG_bobao15 = 17
U_MSG_bobao16 = 18
U_MSG_bobao17 = 19
U_MSG_bobao18 = 20

# 消息头和尾
g_uart_send_head = bytearray([0xaa, 0x55])
g_uart_send_foot = bytearray([0x55, 0xaa])

def uart_send_impl(buff):
    """串口发送实现"""
    uart.write(buff)

def int16_to_int32(value):
    """16位整数转32位整数"""
    if value & 0x8000:  # 负数
        return value | 0xFFFF0000
    else:  # 正数
        return value

def uart_bobao1():
    """播报函数1"""
    buff = bytearray(UART_SEND_MAX)
    # 消息头
    buff[0:2] = g_uart_send_head
    # 消息号
    buff[2] = U_MSG_bobao1
    # 消息尾
    buff[3:5] = g_uart_send_foot
    uart_send_impl(buff[:5])

def uart_bobao2():
    """播报函数2"""
    buff = bytearray(UART_SEND_MAX)
    # 消息头
    buff[0:2] = g_uart_send_head
    # 消息号
    buff[2] = U_MSG_bobao2
    # 消息尾
    buff[3:5] = g_uart_send_foot
    uart_send_impl(buff[:5])

def uart_bobao4():
    """播报函数4"""
    buff = bytearray(UART_SEND_MAX)
    # 消息头
    buff[0:2] = g_uart_send_head
    # 消息号
    buff[2] = U_MSG_bobao4
    # 消息尾
    buff[3:5] = g_uart_send_foot
    uart_send_impl(buff[:5])
    
def uart_bozhensgshu(zhengshu):
    """播报整数"""
    buff = bytearray(UART_SEND_MAX)
    # 消息头
    buff[0:2] = g_uart_send_head
    # 消息号
    buff[2] = U_MSG_bozhensgshu
    # 整数数据（32位，小端序）
    value = int16_to_int32(zhengshu)
    buff[3] = value & 0xFF
    buff[4] = (value >> 8) & 0xFF
    buff[5] = (value >> 16) & 0xFF
    buff[6] = (value >> 24) & 0xFF
    # 消息尾
    buff[7:9] = g_uart_send_foot
    uart_send_impl(buff[:9])
    
def motor_control(enable):
    """电机控制"""
    if enable:
        # 电机正转
        motor_pin1.value(1)
        motor_pin2.value(0)
        print("Motor ON")
    else:
        # 电机制动
        motor_pin1.value(0)
        motor_pin2.value(0)
        print("Motor OFF")

def read_dht11():
    """读取DHT11温湿度"""
    global temperature, humidity
    try:
        dht_sensor.measure()
        temperature = dht_sensor.temperature()
        humidity = dht_sensor.humidity()
        return True
    except Exception as e:
        print("DHT11读取失败:", e)
        return False

def update_lcd():
    """更新LCD显示"""
    if lcd:
        lcd.clear()
        lcd.move_to(0, 0)
        lcd.putstr("Temp(C):{}".format(temperature))
        lcd.move_to(0, 1)
        lcd.putstr("Hum(%RH):{}".format(humidity))

def handle_voice_command():
    """处理语音命令"""
    global yuyin
    if uart.any():
        yuyin = uart.read(1)
        if yuyin:
            yuyin = yuyin[0]  # 获取字节值
            print("收到语音命令:", yuyin)
            
            if yuyin == 47:  # 检测温度并播报
                if read_dht11():
                    print("温度:", temperature, "C")
                    time.sleep(3)
                    uart_bobao1()
                    time.sleep(2)
                    uart_bozhensgshu(temperature)
                    time.sleep(2)
                    uart_bobao2()
                    time.sleep(2)
                yuyin = 0 
                return True
                
            elif yuyin == 48:  # 检测湿度并播报
                if read_dht11():
                    print("湿度:", humidity, "%")
                    time.sleep(3)
                    uart_bobao4()
                    time.sleep(3)
                    uart_bozhensgshu(humidity)
                    time.sleep(2)
                yuyin = 0
                return True
    return False

# 主循环
last_update_time = 0
update_interval = 2000  # 2秒更新一次

while True:
    current_time = time.ticks_ms()
    
    # 处理语音命令
    handle_voice_command()
    
    # 定期更新温湿度和显示
    if time.ticks_diff(current_time, last_update_time) >= update_interval:
        if read_dht11():
            print("温度: {}C, 湿度: {}%".format(temperature, humidity))
            update_lcd()
            
            # 检查阈值并控制电机
            if temperature >= 28 or humidity > 70:
                motor_control(True)
            else:
                motor_control(False)
        
        last_update_time = current_time
    
    time.sleep_ms(100)  # 短暂延迟