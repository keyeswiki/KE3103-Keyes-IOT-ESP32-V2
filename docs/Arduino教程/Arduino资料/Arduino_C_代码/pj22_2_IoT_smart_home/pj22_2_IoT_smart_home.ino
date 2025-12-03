/*  
 * 项目: IoT_smart_home
 * 描述: 手机APP控制智能家居
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#include <Arduino.h>
#ifdef ESP32
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif

#include <Wire.h>
#include <Adafruit_NeoPixel.h>
#define LED_PIN   26
#define LED_COUNT 4     // 附加的新像素数
Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

//将变量定义为检测到的值
String request;
const char* ssid = "ChinaNet-2.4G-0DF0";  // 输入你自己的WiFi名称
const char* pwd = "ChinaNet@233";  // 输入你自己的WiFi密码
WiFiServer server(80);  //初始化WiFi服务

#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27,16,2);

#include <dht11.h>
#define DHT11PIN 17
dht11 DHT11; // 初始化dht11

#include <BuzzerESP32.h>
#define buzzer_pin 25
BuzzerESP32 buzzer(buzzer_pin);   // GPIO25

#define waterPin 34
#define fanPin1 19
#define fanPin2 18
#define led_y 12           // 黄色LED引脚定义
#define gasPin 23
#define pyroelectric 14

// 舵机通道
int channel_PWM1 = 13;
int channel_PWM2 = 10;
int freq_PWM = 50; 
int resolution_PWM = 10;
const int PWM_Pin1 = 5;
const int PWM_Pin2 = 13;

String dataBuffer = "4095,0,0,32,65";

int Rainwater, gas, pir, t, h;  //定义变量
unsigned long prevTask = 0;

void setup() {
  Serial.begin(9600);
  //连接wifi
  WiFi.begin(ssid, pwd);
  //判断是否连接
  Serial.println("Connecting to WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  delay(1000);
  //串行监视器将显示无线网络的名称和IP地址
  Serial.println("Connected to WiFi");
  Serial.print("WiFi NAME:");
  Serial.println(ssid);
  Serial.print("IP:");
  Serial.println(WiFi.localIP());

  //初始化LCD
  lcd.init();
  //打开LCD背光
  lcd.backlight();
  //lcd.noBacklight();
  lcd.clear();
  //设置光标的位置
  lcd.setCursor(0, 0);
  //LCD打印
  lcd.print("IP:");
  //设置光标的位置
  lcd.setCursor(0, 1);
  //LCD打印
  lcd.print(WiFi.localIP());

  pinMode(led_y, OUTPUT);
  pinMode(fanPin1, OUTPUT);
  pinMode(fanPin2, OUTPUT);
  pinMode(waterPin, INPUT);

  buzzer.setTimbre(30);    // 设置timbre
  buzzer.playTone(0,0);   // 关闭蜂鸣器

  pinMode(gasPin, INPUT);
  pinMode(pyroelectric, INPUT);

  ledcAttach(PWM_Pin1, freq_PWM, resolution_PWM);
  ledcAttachChannel(PWM_Pin1, freq_PWM, resolution_PWM, channel_PWM1);
  ledcAttach(PWM_Pin2, freq_PWM, resolution_PWM);
  ledcAttachChannel(PWM_Pin2, freq_PWM, resolution_PWM, channel_PWM2);
  ledcWrite(PWM_Pin1, 25);
  delay(1000);
  ledcWrite(PWM_Pin2, 25);
  delay(1000);
  //启动服务
  server.begin();
}

void loop() {
  //检查客户端与网络服务器是否已连接
  //当客户端与服务器建立连接时，“server.available（）”函数返回一个用于客户端通信的WiFiClient对象。
  WiFiClient client = server.available();
  if (client) {
    Serial.println("New client connected");
    while (client.connected()) {
      //确定服务器是否发送数据
      if (client.available()) {
        request = client.readStringUntil('s');
        Serial.print("Received message: ");
        Serial.println(request);
      }
      //获取所有传感器数据
      getSensorsData();
      //将所有数据放入“数据缓冲区”
      dataBuffer = "";
      dataBuffer += String(Rainwater);
      dataBuffer += ",";
      dataBuffer += String(gas);
      dataBuffer += ",";
      dataBuffer += String(pir);
      dataBuffer += ",";
      dataBuffer += String(t);
      dataBuffer += ",";
      dataBuffer += String(h);
      //将数据发送到服务器，然后将其传输到应用程序。
      if (millis() - prevTask >= 1000) {  // 每秒钟执行一次
        prevTask = millis();
        client.print(dataBuffer);
      }

      delay(500);

      //LED
      if (request == "a") {
        digitalWrite(led_y, HIGH);
      } else if (request == "A") {
        digitalWrite(led_y, LOW);
      }

      //窗户舵机
      if (request == "b") {
        ledcWrite(PWM_Pin1, 80); //20ms的高电平约为2.5ms，即2.5/20*1024，伺服按规定角度旋转。
        delay(1000);
      } else if (request == "B") {
        ledcWrite(PWM_Pin1, 25);  //20ms的高电平约为0.5ms，即0.5/20*1024，伺服按规定角度旋转。
        delay(1000);
      }

      //蜂鸣器播放音乐
      if (request == "c") {
        birthday();
        buzzer.playTone(0,0);
      } else if (request == "C") {
        buzzer.playTone(0,0);
      }

      //蜂鸣器响
      if (request == "d") {
        buzzer.playTone(392,250);
      } else if (request == "D") {
        buzzer.playTone(0,0);
      }

      //门舵机
      if (request == "e") {
        ledcWrite(PWM_Pin2, 120);
        delay(1000);
      } else if (request == "E") {
        ledcWrite(PWM_Pin2, 25);
        delay(1000);
      }
 
      //风扇
      if (request == "f") {
        digitalWrite(fanPin2, LOW); //pwm = 0
        analogWrite(fanPin1, 100); //LEDC通道5绑定到指定的左电机输出PWM值为100.
      } else if (request == "F") {
        digitalWrite(fanPin2, LOW); //pwm = 0
        analogWrite(fanPin1, 0); //LEDC通道5绑定到指定的左电机输出PWM值为0.
      }

      //SK6812RGB打开和关闭它的红灯
      if (request == "g") {
        colorWipe(strip.Color(255,   0,   0), 50);
      } else if (request == "G") {
        colorWipe(strip.Color(0,   0,   0), 50);
      }
 
      //SK6812RGB打开和关闭它的橙灯
      if (request == "h") {
        colorWipe(strip.Color(200,   100,   0), 50);
      } else if (request == "H") {
        colorWipe(strip.Color(0,   0,   0), 50);
      }
 
      //SK6812RGB打开和关闭它的黄灯
      if (request == "i") {
        colorWipe(strip.Color(200,   200,   0), 50);
      } else if (request == "I") {
        colorWipe(strip.Color(0,   0,   0), 50);
      }

      //SK6812RGB打开和关闭它的绿灯
      if (request == "j") {
        colorWipe(strip.Color(0,   255,   0), 50);
      } else if (request == "J") {
        colorWipe(strip.Color(0,   0,   0), 50);
      }
 
      //SK6812RGB打开和关闭它的蓝绿灯
      if (request == "k") {
        colorWipe(strip.Color(0,   100,   255), 50);
      } else if (request == "K") {
        colorWipe(strip.Color(0,   0,   0), 50);
      }

      //SK6812RGB打开和关闭它的蓝灯
      if (request == "l") {
        colorWipe(strip.Color(0,   0,   255), 50);
      } else if (request == "L") {
        colorWipe(strip.Color(0,   0,   0), 50);
      }
 
      //SK6812RGB打开和关闭它的紫灯
      if (request == "m") {
        colorWipe(strip.Color(100,   0,   255), 50);
      } else if (request == "M") {
        colorWipe(strip.Color(0,   0,   0), 50);
      }

      //SK6812RGB打开和关闭它的白灯
      if (request == "n") {
        colorWipe(strip.Color(255,   255,   255), 50);
      } else if (request == "N") {
        colorWipe(strip.Color(0,   0,   0), 50);
      }

      //SK6812RGB-sfx1
      if (request == "o") {
        rainbow(10);
      } else if (request == "O") {
        colorWipe(strip.Color(0,   0,   0), 50);
      }

      //SK6812RGB-sfx2
      if (request == "p") {
        theaterChaseRainbow(50);
      } else if (request == "P") {
        colorWipe(strip.Color(0,   0,   0), 50);
      }
      request = "";
    }
    Serial.println("Client disconnected");
  }
}

void getSensorsData() { 
   //获得数据
   int chk = DHT11.read(DHT11PIN); 
   t = DHT11.temperature;
   h = DHT11.humidity;
      
   //水滴传感器
   Rainwater = analogRead(waterPin); //读取水滴传感器模拟值并将其分配给变量雨水

   //气体传感器
   gas = digitalRead(gasPin); //读取气体传感器模拟值并将其分配给可变气体

   //红外热释传感器
   pir = digitalRead(pyroelectric); //读取红外热释传感器模拟值并将其分配给可变气体
}

//将数据转换成百分比
String dataHandle(int data) {
  // 将模拟值转换为百分比
  int percentage = (data / 4095.0) * 100;
  // 如果转换后的百分比大于100，则输出10。
  percentage = percentage > 100 ? 100 : percentage;
  // 六个字符用于存储十六进制字符串，其中一个作为结束符
  char hexString[3];
  // 将十六进制值转换为6位十六进制字符串，并在前面加上前导零：0表示00,1表示01…
  sprintf(hexString, "%02X", percentage);

  return hexString;
}

void birthday()
{
  buzzer.playTone(294,250);  //参数：频率，延时，等
  buzzer.playTone(440,250);
  buzzer.playTone(392,250);
  buzzer.playTone(532,250);
  buzzer.playTone(494,250);
  buzzer.playTone(392,250);
  buzzer.playTone(440,250);
  buzzer.playTone(392,250);
  buzzer.playTone(587,250);
  buzzer.playTone(532,250);
  buzzer.playTone(392,250);
  buzzer.playTone(784,250);
  buzzer.playTone(659,250);
  buzzer.playTone(532,250);
  buzzer.playTone(494,250);
  buzzer.playTone(440,250);
  buzzer.playTone(698,250);
  buzzer.playTone(659,250);
  buzzer.playTone(532,250);
  buzzer.playTone(587,250);
  buzzer.playTone(532,500);
  buzzer.playTone(0,0);  //关
}

void colorWipe(uint32_t color, int wait) {
  for(int i=0; i<strip.numPixels(); i++) { // 对于条带中的每个像素...
    strip.setPixelColor(i, color);         // 设置像素的颜色（RAM）
    strip.show();                          // 更新条带以匹配
    delay(wait);                           // 延时
  }
}

// 彩虹在整个波段上循环。传输帧之间的延迟时间（以毫秒为单位）。
void rainbow(int wait) {
  for(long firstPixelHue = 0; firstPixelHue < 5*65536; firstPixelHue += 256) {
    for(int i=0; i<strip.numPixels(); i++) { // 对于条带中的每个像素...
      int pixelHue = firstPixelHue + (i * 65536L / strip.numPixels());
      strip.setPixelColor(i, strip.gamma32(strip.ColorHSV(pixelHue)));
    }
    strip.show(); // 更新条带内容
    delay(wait);  // 延时
  }
}

// Rainbow-enhanced Marquise-style. 帧间传输延迟时间（毫秒）
void theaterChaseRainbow(int wait) {
  int firstPixelHue = 0;     // 第一个像素从红色开始（色调0）。
  for(int a=0; a<30; a++) {  // 重复30次...
    for(int b=0; b<3; b++) { // ‘b’从0到2…
      strip.clear();         // 将RAM中的所有像素设置为0（关闭）
      // “c”从“b”开始计数，以3为单位递增……
      for(int c=b; c<strip.numPixels(); c += 3) {
        int      hue   = firstPixelHue + c * 65536L / strip.numPixels();
        uint32_t color = strip.gamma32(strip.ColorHSV(hue)); // color -> RGB
        strip.setPixelColor(c, color); // 设置像素c的值为color
      }
      strip.show();                // 更新条带内容
      delay(wait);                 // 延时
      firstPixelHue += 65536 / 90; // 一个周期的色轮超过90帧
    }
  }
}
