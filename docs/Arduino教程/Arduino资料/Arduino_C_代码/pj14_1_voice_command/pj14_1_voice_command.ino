/*
 * 项目 : voice-command
 * 描述 : 通过语音控制模块读取对应命令
 * 编译IDE：ARDUINO IDE
 * 作者 : http//www.keyes-robot.com
*/

//导入相关库文件
#include <SoftwareSerial.h>

// 定义引脚常量
const int RX_PIN = 27; // 引脚 GPIO27 为 RX
const int TX_PIN = 16; // 引脚 GPIO16 为 TX

SoftwareSerial mySerial(RX_PIN, TX_PIN); // 定义软件串口引脚（RX, TX）

void setup() {
  Serial.begin(9600); // 硬件串口（与电脑通信）
  mySerial.begin(9600); // 软件串口（与外设通信）
  Serial.println("System initialized");
}

void loop() {
  if (mySerial.available()) { // 接收语音控制模块的外设数据(命令参数)
    int yuyin = mySerial.read(); // 将接收到的外设数据(命令参数)进行赋值      
    mySerial.println(yuyin); // 软串口打印收到的外设数据(命令参数)
    Serial.println(yuyin); // 硬串口打印收到的外设数据(命令参数)
  }
}