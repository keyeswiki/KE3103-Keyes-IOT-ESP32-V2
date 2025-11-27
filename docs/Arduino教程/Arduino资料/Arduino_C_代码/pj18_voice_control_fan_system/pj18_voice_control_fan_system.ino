/*
 * 项目: voice-control-fan-system
 * 描述: 结合智能语音模块和电机模拟农场语音调控风扇系统
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/

//导入相关库文件
#include <SoftwareSerial.h>

// 定义引脚常量
const int RX_PIN = 27;  // 引脚 GPIO27 为 RX
const int TX_PIN = 16;  // 引脚 GPIO16 为 TX
const int MotorPin1 = 19; // (IN+)
const int MotorPin2 = 18; // (IN-)

SoftwareSerial mySerial(RX_PIN, TX_PIN); // 定义软件串口引脚（RX, TX）

// 定义变量
volatile int yuyin;

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

void setup(){
  Serial.begin(9600); // 硬件串口（与电脑通信）
  mySerial.begin(9600); // 软件串口（与外设通信）
  yuyin = 0; // 定义变量yuyin初始值为0
  pinMode(MotorPin1,OUTPUT); // 设置MotorPin1(IN+)引脚为输出模式
  pinMode(MotorPin2,OUTPUT); // 设置MotorPin2(IN-)引脚为输出模式
}

void loop(){
  if (mySerial.available() > 0) { // 接收语音控制模块的外设数据(命令参数)
    yuyin = mySerial.read();  // 将接收到的外设数据(命令参数)进行赋值
    Serial.println(yuyin);  // 串口打印接收到的外设数据(命令参数)
    if (yuyin == 5) { // 接收到的外设数据(命令参数)为5, 打开风扇, 风速为100
      yuyin = 0;  // 清除识别结果
      delay(2000);
      analogWrite(MotorPin1, 100);
      analogWrite(MotorPin2, 0);
    }
    if (yuyin == 7) { // 接收到的外设数据(命令参数)为7, 风大一点, 风速为200
      yuyin = 0;
      delay(2000);
      analogWrite(MotorPin1, 200);
      analogWrite(MotorPin2, 0);
    }
    if (yuyin == 8) { // 接收到的外设数据(命令参数)为8, 风小一点, 风速为100
      yuyin = 0;
      delay(2000);
      analogWrite(MotorPin1, 100);
      analogWrite(MotorPin2, 0);
    }
    if (yuyin == 6) { // 接收到的外设数据(命令参数)为6, 关闭风扇
      yuyin = 0;
      delay(2000);
      analogWrite(MotorPin1, 0);
      analogWrite(MotorPin2, 0);
    }
  }
}