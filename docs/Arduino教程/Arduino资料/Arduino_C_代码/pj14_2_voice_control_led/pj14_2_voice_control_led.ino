/*
 * 项目: voice-control-led
 * 描述: 智能语音模块控制LED来模拟智能照明系统
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/

//导入相关库文件
#include <SoftwareSerial.h>

// 定义引脚常量
const int RX_PIN = 27; // 引脚 GPIO27 为 RX
const int TX_PIN = 16; // 引脚 GPIO16 为 TX
const int LED_PIN = 12; // 定义LED的GPIO引脚

SoftwareSerial mySerial(RX_PIN, TX_PIN); // 定义软件串口引脚（RX, TX）

// LED亮度等级
const int LED_OFF = 0;
const int LED_DIM = 50;
const int LED_MEDIUM = 150;
const int LED_BRIGHT = 255;

void setup() {
  Serial.begin(9600); // 硬件串口（与电脑通信）
  mySerial.begin(9600); // 软件串口（与外设通信）
  pinMode(LED_PIN, OUTPUT); // 设置LED引脚为输出模式
}

void loop() { 
  if (mySerial.available()) { // 接收语音控制模块的外设数据
    int yuyin = mySerial.read(); // 将接收到的外设数据进行赋值   
    switch(yuyin) { //进行判断
      case 1: analogWrite(LED_PIN, LED_MEDIUM); break; // 接收到的数据为1,打开灯,灯的亮度为150
      case 2: analogWrite(LED_PIN, LED_OFF); break; // 接收到的数据为2,关闭灯
      case 3: analogWrite(LED_PIN, LED_BRIGHT); break; // 接收到的数据为3,灯的亮度为最亮
      case 4: analogWrite(LED_PIN, LED_DIM); break; // 接收到的数据为4,灯的亮度为暗
      default: break;
    }
    mySerial.println(yuyin);
    Serial.println(yuyin);
  }
}