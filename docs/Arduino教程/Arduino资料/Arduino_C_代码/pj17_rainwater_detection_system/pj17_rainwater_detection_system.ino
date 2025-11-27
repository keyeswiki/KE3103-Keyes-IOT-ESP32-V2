/*
 * 项目: rainwater-detection-system
 * 描述: 结合水滴传感器、智能语音控制模块、LCD1602模块和无源蜂鸣器模拟雨水检测系统
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/

// 导入相关库文件
#include <SoftwareSerial.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// 定义引脚常量
const int RX_PIN = 27; // 引脚 GPIO27 为 RX
const int TX_PIN = 16; // 引脚 GPIO16 为 TX
const int SteamPin = 34;   // 定义水滴传感器引脚
const int BuzzerPin = 25; // 定义无源蜂鸣器引脚

SoftwareSerial mySerial(RX_PIN, TX_PIN); // 定义软件串口引脚（RX, TX）

LiquidCrystal_I2C lcd(0x27, 16, 2); // 定义LCD地址和行列

// 定义变量
volatile int yuyin;
volatile double AnalogValue;
volatile int Value;

// 串口发送消息最大长度
#define UART_SEND_MAX      32
#define UART_MSG_HEAD_LEN  2
#define UART_MSG_FOOT_LEN  2

// 串口发送消息号
#define U_MSG_bozhensgshu      1
#define U_MSG_boxiaoshu      2
#define U_MSG_bobao1      3
#define U_MSG_bobao2      4
#define U_MSG_bobao3      5
#define U_MSG_bobao4      6
#define U_MSG_bobao5      7
#define U_MSG_bobao6      8
#define U_MSG_bobao7      9
#define U_MSG_bobao8      10
#define U_MSG_bobao9      11
#define U_MSG_bobao10      12
#define U_MSG_bobao11      13
#define U_MSG_bobao12      14
#define U_MSG_bobao13      15
#define U_MSG_bobao14      16
#define U_MSG_bobao15      17
#define U_MSG_bobao16      18
#define U_MSG_bobao17      19
#define U_MSG_bobao18      20

// 串口消息参数类型
typedef union {
  double d_double;
  int d_int;
  unsigned char d_ucs[8];
  char d_char;
  unsigned char d_uchar;
  unsigned long d_long;
  short d_short;
  float d_float;}uart_param_t;

// 串口发送函数实现
void _uart_send_impl(unsigned char* buff, int len) {
  // TODO: 调用项目实际的串口发送函数
  for(int i=0;i<len;i++){
    mySerial.write (*buff++);
  }
}

// 串口通信消息尾
const unsigned char g_uart_send_foot[] = {
  0x55, 0xaa
};

// 十六位整数转32位整数
void _int16_to_int32(uart_param_t* param) {
  if (sizeof(int) >= 4)
    return;
  unsigned long value = param->d_long;
  unsigned long sign = (value >> 15) & 1;
  unsigned long v = value;
  if (sign)
    v = 0xFFFF0000 | value;
  uart_param_t p;  p.d_long = v;
  param->d_ucs[0] = p.d_ucs[0];
  param->d_ucs[1] = p.d_ucs[1];
  param->d_ucs[2] = p.d_ucs[2];
  param->d_ucs[3] = p.d_ucs[3];
}

// 浮点数转双精度
void _float_to_double(uart_param_t* param) {
  if (sizeof(int) >= 4)
    return;
  unsigned long value = param->d_long;
  unsigned long sign = value >> 31;
  unsigned long M = value & 0x007FFFFF;
  unsigned long e =  ((value >> 23 ) & 0xFF) - 127 + 1023;
  uart_param_t p0, p1;
  p1.d_long = ((sign & 1) << 31) | ((e & 0x7FF) << 20) | (M >> 3);
  param->d_ucs[0] = p0.d_ucs[0];
  param->d_ucs[1] = p0.d_ucs[1];
  param->d_ucs[2] = p0.d_ucs[2];
  param->d_ucs[3] = p0.d_ucs[3];
  param->d_ucs[4] = p1.d_ucs[0];
  param->d_ucs[5] = p1.d_ucs[1];
  param->d_ucs[6] = p1.d_ucs[2];
  param->d_ucs[7] = p1.d_ucs[3];
}

// 串口通信消息头
const unsigned char g_uart_send_head[] = {
  0xaa, 0x55
};

// 播报函数3
void _uart_bobao3() {
  uart_param_t param;
    int i = 0;
    unsigned char buff[UART_SEND_MAX] = {0};
    for (i = 0; i < UART_MSG_HEAD_LEN; i++) {
        buff[i + 0] = g_uart_send_head[i];
    }
    buff[2] = U_MSG_bobao3;
    for (i = 0; i < UART_MSG_FOOT_LEN; i++) {
        buff[i + 3] = g_uart_send_foot[i];
    }
    _uart_send_impl(buff, 5);
}

// 播报整数
void _uart_bozhensgshu(int zhengshu) {
  uart_param_t param;
    int i = 0;
    unsigned char buff[UART_SEND_MAX] = {0};
    for (i = 0; i < UART_MSG_HEAD_LEN; i++) {
        buff[i + 0] = g_uart_send_head[i];
    }
    buff[2] = U_MSG_bozhensgshu;
    param.d_int = zhengshu;
    _int16_to_int32(&param);
    buff[3] = param.d_ucs[0];
    buff[4] = param.d_ucs[1];
    buff[5] = 0;
    buff[6] = 0;
    for (i = 0; i < UART_MSG_FOOT_LEN; i++) {
        buff[i + 7] = g_uart_send_foot[i];
    }
    _uart_send_impl(buff, 9);
}

void setup(){
   mySerial.begin(9600); // 软件串口（与外设通信）
   Serial.begin(9600); // 硬件串口（与电脑通信）
   yuyin = 0; // 定义变量yuyin初始值为0
   AnalogValue = 0; // 定义变量AnalogValue初始值为0
   Value = 0; // 定义变量Value初始值为0
   Wire.begin(21,22); // 定义LCD通信引脚
   lcd.init(); // 初始化LCD
   lcd.backlight(); // 打开LCD背光
   lcd.display(); // 打开LCD显示
   lcd.clear(); // LCD清屏
   pinMode(SteamPin, INPUT); // 设置水滴传感器引脚为输入模式
   pinMode(BuzzerPin, OUTPUT); // 设置蜂鸣器引脚为输出模式
}

void loop(){
   AnalogValue = analogRead(SteamPin); // 获取水滴传感器的模拟值
   Value = round((AnalogValue / 4096.0) * 100); //将传感器模拟值通过计算转化成百分数赋于变量Value
   // 在LCD对应位置显示当前雨水量的百分数相关信息   
   lcd.setCursor(0, 0);
   lcd.print(String("RainWater(%):") + String(Value));
   lcd.setCursor(0, 1);
   lcd.print("");
   if (mySerial.available() > 0) { // 接收语音控制模块的外设数据(命令参数)
     yuyin = mySerial.read(); // 将接收到的外设数据(命令参数)进行赋值 
     Serial.println(yuyin); // 串口打印收到的外设数据(命令参数) 
     if (yuyin == 49) { // 进行判断，接收到的数据(命令参数) 为49，检测雨水量的百分数值并且进行语音播报
       yuyin = 0;
       delay(3000);
       _uart_bobao3();
       delay(3000);
       _uart_bozhensgshu(Value);
       delay(2000);
     }
   }
   if (Value >= 10 && Value < 40) { // 进行判断，雨水量的百分数值大于等于10且小于40，蜂鸣器发出警报声1
     // 循环执行3次
     for (int i = 0; i < 3; i++) {
       tone(BuzzerPin,200); // 蜂鸣器发出频率为200的音调
       delay(100);
       noTone(BuzzerPin); // 蜂鸣器不发声
       delay(100);
     } 
   } else if (Value >= 40 && Value <= 90) { // 进行判断，雨水量的百分数值大于等于40且小于90，蜂鸣器发出警报声2
     for (int i = 0; i < 3; i++) {
       tone(BuzzerPin,400); 
       delay(100);
       noTone(BuzzerPin);
       delay(100);
     }
   } else if (Value > 90) { // 进行判断，雨水量的百分数值大于90，蜂鸣器发出警报声3
     for (int i = 0; i < 3; i++) {
       tone(BuzzerPin,600);
       delay(100);
       noTone(BuzzerPin);
       delay(100);
     }
   }
   noTone(BuzzerPin);
   delay(500);
   lcd.clear(); // 清除LCD显示
}