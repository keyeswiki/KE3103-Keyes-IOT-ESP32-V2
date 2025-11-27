/*
 * 项目: voice_control_door_window
 * 描述: 智能语音模块控制2个舵机来模拟语音控制门窗系统
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/

//导入相关库文件
#include <SoftwareSerial.h>
#include <ESP32Servo.h>

// 定义引脚常量
const int RX_PIN = 27;    // 引脚 GPIO27 为 RX
const int TX_PIN = 16;    // 引脚 GPIO16 为 TX
const int servoPin1 = 5;  // 定义窗户上舵机引脚 GPIO5
const int servoPin2 = 13; // 定义门上舵机引脚 GPIO13
Servo windowServo;  // 窗户舵机
Servo doorServo;    // 门舵机

SoftwareSerial mySerial(RX_PIN, TX_PIN); // 定义软件串口引脚（RX, TX）

// 舵机角度参数
int windowOpenAngle = 100;   // 窗户打开角度
int windowCloseAngle = 0;   // 窗户关闭角度
int doorOpenAngle = 175;     // 门打开角度
int doorCloseAngle = 0;     // 门关闭角度

// 状态变量
bool windowState = false;   // 窗户状态：false-关闭, true-打开
bool doorState = false;     // 门状态：false-关闭, true-打开

void setup() {
  // 初始化硬件串口（用于调试）
  Serial.begin(9600);  
  // 初始化软件串口（连接语音模块）
  mySerial.begin(9600);
  
  // 初始化舵机
  windowServo.attach(servoPin1);
  doorServo.attach(servoPin2);
  
  // 初始位置：关闭状态
  windowServo.write(windowCloseAngle);
  doorServo.write(doorCloseAngle);
  
  Serial.println("智能语音门窗控制系统已启动");
  Serial.println("等待语音指令...");
  Serial.println("可用指令：开窗户、关窗户、开门、关门");
}

void loop() {
  // 检查语音模块是否有数据
  if (mySerial.available() > 0) {
    int yuyin = mySerial.read();
    
    Serial.print("收到语音指令: ");
    Serial.println(yuyin);
    
    // 处理语音指令
    processVoiceCommand(yuyin);
  }
  
  delay(100); // 短暂延迟，减少CPU占用
}

// 处理语音指令函数
void processVoiceCommand(int yuyin) {
  if (yuyin == 57) {
    openWindow();
  } 
  else if (yuyin == 58) {
    closeWindow();
  } 
  else if (yuyin == 59) {
    openDoor();
  } 
  else if (yuyin == 60) {
    closeDoor();
  }
  else {
    Serial.println("未知指令，请重试");
  }
}

// 打开窗户
void openWindow() {
  if (!windowState) {
    windowServo.write(windowOpenAngle);
    delay(1000);
    windowState = true;
    Serial.println("窗户已打开");
  } else {
    Serial.println("窗户已经是打开状态");
  }
}

// 关闭窗户
void closeWindow() {
  if (windowState) {
    windowServo.write(windowCloseAngle);
    delay(1000);
    windowState = false;
    Serial.println("窗户已关闭");
  } else {
    Serial.println("窗户已经是关闭状态");
  }
}

// 打开门
void openDoor() {
  if (!doorState) {
    doorServo.write(doorOpenAngle);
    delay(1000);
    doorState = true;
    Serial.println("门已打开");
  } else {
    Serial.println("门已经是打开状态");
  }
}

// 关闭门
void closeDoor() {
  if (doorState) {
    doorServo.write(doorCloseAngle);
    delay(1000);
    doorState = false;
    Serial.println("门已关闭");
  } else {
    Serial.println("门已经是关闭状态");
  }
}
