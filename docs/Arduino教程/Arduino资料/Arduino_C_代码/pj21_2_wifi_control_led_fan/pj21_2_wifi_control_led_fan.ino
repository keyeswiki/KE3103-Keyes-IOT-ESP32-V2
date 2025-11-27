/*  
 * 项目: wifi_control_led_fan
 * 描述: WiFi网页控制LED和风扇
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#include <WiFi.h>       // 引入WiFi库，控制ESP32的WiFi连接功能
#include <WebServer.h>  // 引入WebServer库，创建HTTP服务器
#include <LiquidCrystal_I2C.h> // 引入LiquidCrystal_I2C库

//初始化LCD模块
LiquidCrystal_I2C lcd(0x27, 16, 2);

/*替换为您的网络凭据（输入您自己的WiFi名称和密码）*/
const char* ssid = "ChinaNet-2.4G-0DF0";  // 输入你自己的WiFi名称
const char* password = "ChinaNet@233"; // 输入你自己的WiFi密码

WebServer server(80);  // 创建一个Web服务器对象，监听80端口

uint8_t led_Pin = 12;    // 蜂鸣器连接到GPIO12
bool LED_State = false;  // 蜂鸣器的状态，初始为关闭

uint8_t motor_Pin1 = 19;    // 电机IN+引脚连接到GPIO19
uint8_t motor_Pin2 = 18;    // 电机IN-引脚连接到GPIO18
bool Motor_State = false;  // 电机的状态，初始为关闭

void setup() {
  Serial.begin(9600);           // 初始化串口通信，波特率9600
  delay(100);                   // 延时100毫秒
  pinMode(led_Pin, OUTPUT);  // 设置GPIO12为输出模式
  pinMode(motor_Pin1, OUTPUT);  // 设置GPIO18为输出模式
  pinMode(motor_Pin2, OUTPUT);  // 设置GPIO19为输出模式

  Serial.println("Connecting to ");
  Serial.println(ssid);  // 打印正在连接的Wi-Fi名称

  // 连接到Wi-Fi网络
  WiFi.begin(ssid, password);

  // 检查Wi-Fi是否连接成功
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");  // 每隔1秒打印一个点，表示正在连接
  }
  Serial.println("");
  delay(500);
  Serial.println("WiFi connected..!");  // Wi-Fi连接成功
  Serial.print("Got IP: ");
  Serial.println(WiFi.localIP());  // 打印分配到的IP地址

  // 初始化LCD
  lcd.init();
  lcd.backlight();
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("IP:");
  lcd.setCursor(0, 1);
  lcd.print(WiFi.localIP());

  // 设置不同URL路径的处理函数
  server.on("/", handle_OnConnect);            // 根路径，初始化页面
  server.on("/LED_ON", handle_LED_ON);         // 黄色LED打开
  server.on("/LED_OFF", handle_LED_OFF);      // 黄色LED关闭
  server.on("/Motor_ON", handle_Motor_ON);    // 风扇打开
  server.on("/Motor_OFF", handle_Motor_OFF);  // 风扇关闭
  server.onNotFound(handle_NotFound);         // 处理未找到的路径

  server.begin();                         // 启动Web服务器
  Serial.println("HTTP server started");  // 打印服务器启动信息
}

void loop() {
  server.handleClient();  // 处理客户端请求
  if (LED_State) {
    digitalWrite(led_Pin, HIGH);  // 如果黄色LED状态为开，则输出高电平，LED点亮
    delay(1);
    digitalWrite(led_Pin, LOW);  // 否则输出低电平关闭黄色LED
    delay(1);
  } else {
    digitalWrite(led_Pin, LOW);  // 否则输出低电平关闭黄色LED
  }
  if (Motor_State) {
    // 如果风扇状态为开，则打开风扇
    analogWrite(motor_Pin1, 70);  
    analogWrite(motor_Pin2, 0);
  } else {
    // 否则关闭风扇
    analogWrite(motor_Pin1, 0);
    analogWrite(motor_Pin2, 0); 
  }
}

// 处理根路径请求，显示初始页面
void handle_OnConnect() {
  LED_State = false;  // 初始时关闭蜂鸣器
  Motor_State = false;   // 初始时关闭风扇
  Serial.println("GPIO12 Status: OFF | GPIO18 Status: OFF | GPIO19 Status: OFF");  // 打印LED和风扇状态
  server.send(200, "text/html", SendHTML(LED_State, Motor_State));  // 返回初始HTML页面
}

// 处理黄色LED打开请求
void handle_LED_ON() {
  LED_State = true;    // 设置LED状态为开
  Serial.println("GPIO12 Status: ON");   // 打印LED状态
  server.send(200, "text/html", SendHTML(LED_State, Motor_State));  // 返回更新后的HTML页面
}

// 处理黄色LED关闭请求
void handle_LED_OFF() {
  LED_State = LOW;     // 设置蜂鸣器状态为关
  Serial.println("GPIO12 Status: OFF");  // 打印蜂鸣器状态
  server.send(200, "text/html", SendHTML(LED_State, Motor_State));  // 返回更新后的HTML页面
}

// 处理风扇打开请求
void handle_Motor_ON() {
  Motor_State = true;   // 设置风扇状态为开
  Serial.println("GPIO18 Status: ON | GPIO19 Status: ON");  // 打印风扇状态
  server.send(200, "text/html", SendHTML(LED_State, Motor_State));  // 返回更新后的HTML页面
}

// 处理风扇关闭请求
void handle_Motor_OFF() {
  Motor_State = false;  // 设置风扇状态为关
  Serial.println("GPIO18 Status: OFF | GPIO19 Status: OFF"); // 打印风扇状态
  server.send(200, "text/html", SendHTML(LED_State, Motor_State));  // 返回更新后的HTML页面
}

// 处理未找到的路径
void handle_NotFound() {
  server.send(404, "text/plain", "Not found");  // 返回404错误
}

// 生成HTML页面，用来显示蜂鸣器与风扇状态和控制按钮
String SendHTML(uint8_t BuzzerState, uint8_t MotorState) {
  String ptr = "<!DOCTYPE html> <html>\n";
  ptr += "<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n";
  ptr += "<title>Buzzer-Motor Control</title>\n";
  ptr += "<style>html { font-family: Helvetica; display: inline-block; margin: 0px auto; text-align: center;}\n";
  ptr += "body{margin-top: 50px;} h1 {color: #444444;margin: 50px auto 30px;} h3 {color: #444444;margin-bottom: 50px;}\n";
  ptr += ".button {display: block;width: 80px;background-color: #3498db;border: none;color: white;padding: 13px 30px;text-decoration: none;font-size: 25px;margin: 0px auto 35px;cursor: pointer;border-radius: 4px;}\n";
  ptr += ".button-on {background-color: #3498db;}\n";
  ptr += ".button-on:active {background-color: #2980b9;}\n";
  ptr += ".button-off {background-color: #34495e;}\n";
  ptr += ".button-off:active {background-color: #2c3e50;}\n";
  ptr += "p {font-size: 14px;color: #888;margin-bottom: 10px;}\n";
  ptr += "</style>\n";
  ptr += "</head>\n";
  ptr += "<body>\n";
  ptr += "<h1>ESP32 Web Server</h1>\n";
  ptr += "<h3>Using Station(STA) Mode</h3>\n";

  // 根据黄色LED状态生成HTML按钮
  if (BuzzerState) {
    ptr += "<p>LED State: ON</p><a class=\"button button-off\" href=\"/LED_OFF\">OFF</a>\n";
  } else {
    ptr += "<p>LED State: OFF</p><a class=\"button button-on\" href=\"/LED_ON\">ON</a>\n";
  }

  // 根据风扇状态生成HTML按钮
  if (MotorState) {
    ptr += "<p>Motor State: ON</p><a class=\"button button-off\" href=\"/Motor_OFF\">OFF</a>\n";
  } else {
    ptr += "<p>Motor State: OFF</p><a class=\"button button-on\" href=\"/Motor_ON\">ON</a>\n";
  }

  ptr += "</body>\n";
  ptr += "</html>\n";
  return ptr;  // 返回生成的HTML页面
}