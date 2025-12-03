/*  
 * 项目: auto_window
 * 描述: 水滴传感器控制窗户
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#include <ESP32Servo.h>

#define servoPin 5
#define waterPin 34
Servo myservo;


void setup() {
  Serial.begin(9600);
  pinMode(waterPin, INPUT);
  myservo.attach(servoPin);   // 将引脚5上的舵机连接到舵机对象上
  myservo.write(100);
  delay(1000);
}

void loop() {
  int water_val = analogRead(waterPin);
  Serial.println(water_val);
  if(water_val > 1500) {
    myservo.write(0);
    delay(1000);
  }
  else {
    myservo.write(100);
    delay(1000);
  }
}
