/*  
 * 项目: mosDoor
 * 描述: 两个按键控制门模拟密码锁
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C mylcd(0x27,16,2);
#include "OneButton.h"
// 设置一个新的OneButton引脚 4.  
OneButton button1(4, true);
// 设置一个新的OneButton引脚 32.  
OneButton button2(32, true);
#include <ESP32Servo.h>
Servo myservo;
int servoPin = 13;
String password = "";
String correct_p = "-.-";  //密码

void setup() {
  Serial.begin(115200);
  mylcd.init();
  mylcd.backlight();
  // 链接按钮1功能。
  button1.attachClick(click1);
  button1.attachLongPressStop(longPressStop1);
  // 链接按钮2功能。
  button2.attachClick(click2);
  button2.attachLongPressStop(longPressStop2);

	myservo.attach(servoPin); // 将引脚13上的伺服连接到伺服对象上
  myservo.write(0);  //初始状态是关门
  delay(1000);
  mylcd.setCursor(0, 0);
  mylcd.print("Enter password");
}

void loop() {
  // 继续看按钮：
  button1.tick();
  button2.tick();
  delay(10);
}

// ----- 按键1回调函数
// 这个函数将在button1被按下1次（而不是2次）时被调用。按下按钮)。
void click1() {
  Serial.print(".");
  password = password + '.';
  mylcd.setCursor(0, 1);
  mylcd.print(password);
} // click1

// 当长时间按下button1释放时，该函数将被调用一次。
void longPressStop1() {
  Serial.print("-");
  password = password + '-';
  mylcd.setCursor(0, 1);
  mylcd.print(password);
} // longPressStop1

// ... 按钮2同理：
void click2() {
  Serial.println(password);
  if(password == correct_p)
  {
    myservo.write(180);  //如果密码正确，开门
    delay(1000);
    mylcd.clear();
    mylcd.setCursor(0, 0);
    mylcd.print("open");
  }
  else
  {
    mylcd.clear();
    mylcd.setCursor(0, 0);
    mylcd.print("error");
    delay(2000);
    mylcd.clear();
    mylcd.setCursor(0, 0);
    mylcd.print("enter again");
  }
  password = "";
} // click2

void longPressStop2() {
  //Serial.println("Button 2 longPress stop");
   myservo.write(0);  //关门
   delay(1000);
   mylcd.clear();
   mylcd.setCursor(0, 0);
   mylcd.print("close");
} // longPressStop2
