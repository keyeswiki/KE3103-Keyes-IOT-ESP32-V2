/*  
 * 项目: gas_lcd
 * 描述: LCD显示MQ2气体值,气体泄露警报
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// 初始化LCD与I2C地址0x27, 16列和2行
LiquidCrystal_I2C mylcd(0x27, 16, 2);

#define gasPin 23    // 气体传感器输入引脚
#define buzPin 25    // 蜂鸣器输出引脚

// LCD显示更新的状态标志
boolean dangerDisplayed = 1;
boolean safetyDisplayed = 1;

void setup() {
  Serial.begin(9600);
  
  // 初始化LCD
  mylcd.init();
  mylcd.backlight();
  mylcd.clear();
  
  // 设置引脚模式
  pinMode(buzPin, OUTPUT);
  pinMode(gasPin, INPUT);
  
  // 显示初始消息
  mylcd.setCursor(0, 0);
  mylcd.print("safety");
}

void loop() {
  boolean gasVal = digitalRead(gasPin);  // 读取气体传感器值
  Serial.println(gasVal);
  
  if(gasVal == 0)  // 如果检测到危险气体
  {
    while(dangerDisplayed == 1)  // 如果需要，更新显示
    {
      mylcd.clear();
      mylcd.setCursor(0, 0);
      mylcd.print("dangerous");
      dangerDisplayed = 0;
      safetyDisplayed = 1;
    }
    
    // 声音报警蜂鸣器（短脉冲）
    digitalWrite(buzPin, HIGH);
    delay(1);
    digitalWrite(buzPin, LOW);
    delay(1);
  }
  else  // 未检测到危险气体
  {
    digitalWrite(buzPin, LOW);  // 确保蜂鸣器处于关闭状态
    
    while(safetyDisplayed == 1)  // 如果需要，更新显示
    {
      mylcd.clear();
      mylcd.setCursor(0, 0);
      mylcd.print("safety");
      dangerDisplayed = 1;
      safetyDisplayed = 0;
    }
  }
}