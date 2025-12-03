# 作者 : www.keyes-robot.com

from machine import Pin, ADC, PWM, I2C
from time import sleep_ms, ticks_ms  
from i2c_lcd import I2cLcd   
import network
import socket 
import time
import json
from neopixel import NeoPixel
import dht

# WiFi配置, 目的是连接Wi-Fi
SSID = "ChinaNet-2.4G-0DF0"   # 替换为你的Wi-Fi名称
PASSWORD = "ChinaNet@233"   # 替换为你的Wi-Fi密码  

# 定义传感器模块引脚
LED_PIN = 26
LED_COUNT = 4
WATER_PIN = 34
FAN_PIN1 = 19
FAN_PIN2 = 18
LED_Y_PIN = 12
GAS_PIN = 23
PYROELECTRIC_PIN = 14
DHT11_PIN = 17
SERVO_PIN1 = 5
SERVO_PIN2 = 13 

# 初始化设备
led_y = Pin(LED_Y_PIN, Pin.OUT)
fan_pin1 = Pin(FAN_PIN1, Pin.OUT)
fan_pin2 = Pin(FAN_PIN2, Pin.OUT)
water_sensor = ADC(Pin(WATER_PIN))
water_sensor.atten(ADC.ATTN_11DB)
gas_sensor = Pin(GAS_PIN, Pin.IN)
pir_sensor = Pin(PYROELECTRIC_PIN, Pin.IN)
dht_sensor = dht.DHT11(Pin(DHT11_PIN))

# 调试版舵机控制类
class DebugServo:
    def __init__(self, pin, name="Servo", open_duty=115, close_duty=25):
        self.name = name
        self.pin = pin
        self.servo = PWM(Pin(pin))
        self.servo.freq(50)  # 必须为50Hz
        self.open_duty = open_duty
        self.close_duty = close_duty
        self.current_duty = close_duty
        self.is_open = False
        
        # 测试PWM输出
        print(f"=== {self.name} Initialization ===")
        print(f"Pin: {pin}, Open: {open_duty}, Close: {close_duty}")
        
        # 初始化为关闭位置
        self.servo.duty(close_duty)
        print(f"{self.name} initialized to CLOSE position (duty: {close_duty})")
        sleep_ms(1000)
    
    def open(self):
        """打开舵机"""
        print(f"🎯 {self.name} OPENING to duty: {self.open_duty}")
        try:
            self.servo.duty(self.open_duty)
            self.current_duty = self.open_duty
            self.is_open = True
            sleep_ms(800)  # 给舵机足够时间移动
            print(f"✅ {self.name} OPENED successfully")
            return True
        except Exception as e:
            print(f"❌ {self.name} OPEN failed: {e}")
            return False
    
    def close(self):
        """关闭舵机"""
        print(f"🎯 {self.name} CLOSING to duty: {self.close_duty}")
        try:
            self.servo.duty(self.close_duty)
            self.current_duty = self.close_duty
            self.is_open = False
            sleep_ms(800)  # 给舵机足够时间移动
            print(f"✅ {self.name} CLOSED successfully")
            return True
        except Exception as e:
            print(f"❌ {self.name} CLOSE failed: {e}")
            return False
    
    def get_status(self):
        """获取状态"""
        return f"{self.name}: {'OPEN' if self.is_open else 'CLOSED'} (duty: {self.current_duty})"

# 初始化舵机 - 尝试不同的占空比值
print("=== INITIALIZING SERVOS ===")
servo1 = DebugServo(SERVO_PIN1, "Window Servo", open_duty=80, close_duty=25)
servo2 = DebugServo(SERVO_PIN2, "Door Servo", open_duty=115, close_duty=25)

# 测试舵机
print("=== TESTING SERVOS ===")
servo1.close()
servo2.close()
sleep_ms(1000)

# 初始化NeoPixel
strip = NeoPixel(Pin(LED_PIN), LED_COUNT)

# 初始化LCD
DEFAULT_I2C_ADDR = 0x27
i2c = I2C(scl=Pin(22), sda=Pin(21), freq=400000) 
lcd = I2cLcd(i2c, DEFAULT_I2C_ADDR, 2, 16)

# 传感器数据变量
rainwater = 0
gas = 0
pir = 0
temperature = 0
humidity = 0

# 连接WiFi，获取IP地址
def connect_wifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(SSID, PASSWORD)
    
    print("Connecting to WiFi...", end="")
    while not wlan.isconnected():
        print(".", end="")
        time.sleep(1)
    
    print("\nConnected to WiFi")
    print("WiFi NAME:", SSID)
    print("IP:", wlan.ifconfig()[0])
    return wlan.ifconfig()[0]

# 读取传感器的数据
def get_sensors_data():
    global rainwater, gas, pir, temperature, humidity
    
    try:
        dht_sensor.measure()
        temperature = dht_sensor.temperature()
        humidity = dht_sensor.humidity()
    except:
        temperature = 0
        humidity = 0
    
    rainwater = water_sensor.read()
    gas = gas_sensor.value()
    pir = pir_sensor.value()
    
# SK6812RGB灯相关函数
def color_wipe(color, wait):
    for i in range(LED_COUNT):
        strip[i] = color
        strip.write()
        time.sleep_ms(wait)

def rainbow(wait):
    for j in range(256):
        for i in range(LED_COUNT):
            strip[i] = wheel((i + j) & 255)
        strip.write()
        time.sleep_ms(wait)
        
def wheel(pos):
    if pos < 85:
        return (pos * 3, 255 - pos * 3, 0)
    elif pos < 170:
        pos -= 85
        return (255 - pos * 3, 0, pos * 3)
    else:
        pos -= 170 
        return (0, pos * 3, 255 - pos * 3)
    
def theater_chase_rainbow(wait):
    first_pixel_hue = 0
    for a in range(30):
        for b in range(3):
            strip.fill((0, 0, 0))
            for c in range(b, len(strip), 3):
                hue = first_pixel_hue + c * 65536 // len(strip)
                rgb = hsv_to_rgb(hue / 65536.0, 1.0, 1.0)
                strip[c] = (int(rgb[0]), int(rgb[1]), int(rgb[2]))
            strip.write()
            time.sleep_ms(wait)
            first_pixel_hue += 65536 // 90

def hsv_to_rgb(h, s, v):
    if s == 0.0:
        return (v * 255, v * 255, v * 255)
    i = int(h * 6.0)
    f = (h * 6.0) - i
    p = v * (1.0 - s)
    q = v * (1.0 - s * f)
    t = v * (1.0 - s * (1.0 - f))
    i = i % 6
    if i == 0:
        return (v * 255, t * 255, p * 255)
    if i == 1:
        return (q * 255, v * 255, p * 255)
    if i == 2:
        return (p * 255, v * 255, t * 255)
    if i == 3:
        return (p * 255, q * 255, v * 255)
    if i == 4:
        return (t * 255, p * 255, v * 255)
    if i == 5:
        return (v * 255, p * 255, q * 255)

# 发送HTML页面, 发送传感器数据, 处理控制请求
def handle_request(client, request):
    get_sensors_data()
    
    if "GET / " in request:
        # 发送HTML页面
        html = create_html_page()
        client.send(html)
    
    elif "GET /data" in request:
        # 发送传感器数据
        data = f"{rainwater},{gas},{pir},{temperature},{humidity}"
        client.send(f"HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\n{data}")
    
    elif "GET /control" in request:       
        response = "OK"
        
        # 处理控制请求 - 添加详细调试
        if "?cmd=e" in request:
            print("\n" + "="*50)
            print("🚪 DOOR OPEN COMMAND RECEIVED")
            servo2.open()  # 开门 
            print(f"Door status: {servo2.get_status()}")
            
        elif "?cmd=E" in request:
            print("\n" + "="*50)
            print("🚪 DOOR CLOSE COMMAND RECEIVED")
            servo2.close()  # 关门 
            print(f"Door status: {servo2.get_status()}")
            
        elif "?cmd=a" in request:
            led_y.on()   # 点亮黄色LED 
            print("Yellow LED ON")
            
        elif "?cmd=A" in request:
            led_y.off()  # 关闭黄色LED
            print("Yellow LED OFF")
            
        elif "?cmd=b" in request:
            print("\n" + "="*50)
            print("🪟 WINDOW OPEN COMMAND RECEIVED")
            servo1.open()  # 开窗
            print(f"Window status: {servo1.get_status()}")
            
        elif "?cmd=B" in request:
            print("\n" + "="*50)
            print("🪟 WINDOW CLOSE COMMAND RECEIVED")
            servo1.close()  # 关窗
            print(f"Window status: {servo1.get_status()}")
            
        elif "?cmd=f" in request:
            fan_pin2.off() 
            fan_pin1.on()  # 开启风扇
            print("Fan ON")
            
        elif "?cmd=F" in request:
            fan_pin2.off()
            fan_pin1.off()  # 关闭风扇
            print("Fan OFF")
        
        # RGB LED控制
        elif "?cmd=g" in request:
            color_wipe((255, 0, 0), 50)  # RGB亮红灯
            print("Red on")
        elif "?cmd=G" in request:
            color_wipe((0, 0, 0), 50)   # RGB熄灭
            print("RGB off")
        elif "?cmd=h" in request:
            color_wipe((200, 100, 0), 50)  # RGB亮橙灯
            print("Orange on")
        elif "?cmd=H" in request:
            color_wipe((0, 0, 0), 50)
            print("RGB off")
        elif "?cmd=i" in request:
            color_wipe((200, 200, 0), 50)  # RGB亮黄灯
            print("Yellow on")
        elif "?cmd=I" in request:
            color_wipe((0, 0, 0), 50)
            print("RGB off")
        elif "?cmd=j" in request:
            color_wipe((0, 255, 0), 50)  # RGB亮绿灯
            print("Green on")
        elif "?cmd=J" in request:
            color_wipe((0, 0, 0), 50)
            print("RGB off")
        elif "?cmd=k" in request:
            color_wipe((0, 100, 255), 50)  # RGB亮蓝绿灯
            print("Green-blue on")
        elif "?cmd=K" in request:
            color_wipe((0, 0, 0), 50)
            print("RGB off")
        elif "?cmd=l" in request:
            color_wipe((0, 0, 255), 50)  # RGB亮蓝灯
            print("Blue on")
        elif "?cmd=L" in request:
            color_wipe((0, 0, 0), 50)
            print("RGB off")
        elif "?cmd=m" in request:
            color_wipe((100, 0, 255), 50)  # RGB亮紫灯
            print("Purple on")
        elif "?cmd=M" in request:
            color_wipe((0, 0, 0), 50)
            print("RGB off")
        elif "?cmd=n" in request:
            color_wipe((255, 255, 255), 50)  # RGB亮白灯
            print("White on")
        elif "?cmd=N" in request:
            color_wipe((0, 0, 0), 50)
            print("RGB off")
        elif "?cmd=o" in request:
            rainbow(10)   # RGB亮彩虹灯
            print("Rainbow on")
        elif "?cmd=O" in request:
            color_wipe((0, 0, 0), 50)
            print("RGB off")
        elif "?cmd=p" in request:
            theater_chase_rainbow(50)  # RGB实现跑灯效果
            print("Chase on")
        elif "?cmd=P" in request:
            color_wipe((0, 0, 0), 50)
            print("RGB off")
        
        client.send("HTTP/1.1 200 OK\r\n\r\nOK")

# 网页页面
def create_html_page():
    html = """HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n
    <!DOCTYPE html>
    <html>
    <head>
        <title>ESP32 Smart Home</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body { font-family: Arial; margin: 20px; background: #f0f0f0; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; }
            .sensor-data { background: #e8f4fd; padding: 15px; border-radius: 5px; margin: 10px 0; }
            .control-panel { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin: 20px 0; }
            .btn { padding: 10px; border: none; border-radius: 5px; cursor: pointer; font-size: 14px; }
            .btn-on { background: #4CAF50; color: white; }
            .btn-off { background: #f44336; color: white; }
            .btn-special { background: #2196F3; color: white; }
            .data-value { font-weight: bold; color: #2196F3; }
        </style>
        <script>
            function updateData() {
                fetch('/data')
                    .then(response => response.text())
                    .then(data => {
                        const values = data.split(',');
                        document.getElementById('rainwater').textContent = values[0];
                        document.getElementById('gas').textContent = values[1];
                        document.getElementById('pir').textContent = values[2];
                        document.getElementById('temp').textContent = values[3];
                        document.getElementById('humi').textContent = values[4];
                    });
            }
            
            function sendCommand(cmd) {
                console.log('Sending command:', cmd);
                fetch('/control?cmd=' + cmd)
                    .then(response => {
                        console.log('Command', cmd, 'sent successfully');
                    })
                    .catch(err => {
                        console.error('Command error:', err);
                    }); 
            }
            
            setInterval(updateData, 2000);
            window.onload = updateData;
        </script>
    </head>
    <body>
        <div class="container">
            <h1>ESP32 智能家居控制 - DEBUG MODE</h1>
            
            <div class="sensor-data"> 
                <h2>传感器数据</h2>
                <p>温度: <span id="temp" class="data-value">0</span> °C</p>
                <p>湿度: <span id="humi" class="data-value">0</span> %</p>
                <p>雨水量: <span id="rainwater" class="data-value">0</span></p>
                <p>人体移动检测: <span id="pir" class="data-value">0</span></p>
                <p>可燃性气体检测: <span id="gas" class="data-value">0</span></p>
            </div>
            
            <div class="control-panel">
                <h3>舵机控制</h3>
                <button class="btn btn-on" onclick="sendCommand('e')">开门</button>
                <button class="btn btn-off" onclick="sendCommand('E')">关门</button>
                <button class="btn btn-on" onclick="sendCommand('b')">开窗</button>
                <button class="btn btn-off" onclick="sendCommand('B')">关窗</button>
                
                <h3>其他控制</h3>
                <button class="btn btn-on" onclick="sendCommand('a')">打开黄灯</button>
                <button class="btn btn-off" onclick="sendCommand('A')">关闭黄灯</button>
                <button class="btn btn-on" onclick="sendCommand('f')">开启风扇</button>
                <button class="btn btn-off" onclick="sendCommand('F')">关闭风扇</button>
            </div>
            
            <div class="control-panel">
                <h4>RGB灯色</h4>
                <button class="btn" style="background:red;color:white" onclick="sendCommand('g')">红色</button>
                <button class="btn" style="background:orange;color:white" onclick="sendCommand('h')">橙色</button>
                <button class="btn" style="background:yellow;color:black" onclick="sendCommand('i')">黄色</button>
                <button class="btn" style="background:green;color:white" onclick="sendCommand('j')">绿色</button>
                <button class="btn" style="background:cyan;color:white" onclick="sendCommand('k')">蓝绿色</button>
                <button class="btn" style="background:blue;color:white" onclick="sendCommand('l')">蓝色</button>
                <button class="btn" style="background:purple;color:white" onclick="sendCommand('m')">紫色</button>
                <button class="btn" style="background:white;color:black" onclick="sendCommand('n')">白色</button>
                <button class="btn btn-special" onclick="sendCommand('o')">彩虹</button>
                <button class="btn btn-special" onclick="sendCommand('p')">跑灯</button>
                <button class="btn btn-off" onclick="sendCommand('G')">关闭RGB</button>
            </div>
        </div>
    </body>
    </html>
    """
    return html

def main():
    ip = connect_wifi()
    
    # 在LCD显示IP
    lcd.move_to(0, 0)
    lcd.putstr('IP:')
    lcd.move_to(0, 1)
    lcd.putstr(ip) 
    
    # 创建socket服务器
    addr = socket.getaddrinfo('0.0.0.0', 80)[0][-1]
    server = socket.socket()
    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server.bind(addr)
    server.listen(5)
    
    print("Server listening on", ip)
    print("Ready for commands...")
    
    while True:
        try:
            client, addr = server.accept()
            print(f"\n📱 Client connected from {addr}")
             
            request = client.recv(1024).decode()
            print(f"📨 Request: {request.split()[0]} {request.split()[1]}")
            
            handle_request(client, request)
            
            client.close()
            
        except Exception as e:
            print(f"❌ Server error: {e}")
            try:
                client.close()
            except:
                pass
            time.sleep(1)

if __name__ == "__main__":
    main()