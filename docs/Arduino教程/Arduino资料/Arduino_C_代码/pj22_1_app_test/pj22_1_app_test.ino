/*  
 * 项目: app_test
 * 描述: 测试APP,APP控制LED与风扇
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#include <Arduino.h>
#ifdef ESP32
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif

#include <LiquidCrystal_I2C.h>

#define fanPin1 19 //IN+ 引脚
#define fanPin2 18 //IN- 引脚
#define led_y 12  //定义黄色引脚为12

const char* ssid = "ChinaNet-2.4G-0DF0";  // 输入你自己的WiFi名称
const char* pwd = "ChinaNet@233";  // 输入你自己的WiFi密码

#include <Wire.h>
//初始化LCD地址、列和行
LiquidCrystal_I2C lcd(0x27, 16, 2);

WiFiServer server(80);  //初始化WiFi服务

//将变量定义为检测到的值
String request;

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

  //初始化 LCD
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

  //设置引脚模式
  pinMode(led_y, OUTPUT);
  pinMode(fanPin1, OUTPUT);
  pinMode(fanPin2, OUTPUT);
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

      //LED
      if (request == "a") {
        digitalWrite(led_y, HIGH);
      } else if (request == "A") {
        digitalWrite(led_y, LOW);
      }

      //fan
      if (request == "f") {
        digitalWrite(fanPin1, LOW); //pwm = 0
        analogWrite(fanPin2, 100); //LEDC通道5绑定到指定的左电机输出PWM值为100.
      } else if (request == "F") {
        digitalWrite(fanPin1, LOW); //pwm = 0
        analogWrite(fanPin2, 0); //LEDC通道5绑定到指定的左电机输出PWM值为0.
      }

      request = "";
    }
    Serial.println("Client disconnected");
  }
}

