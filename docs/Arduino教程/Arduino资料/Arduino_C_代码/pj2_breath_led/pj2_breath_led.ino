/*  
 * 项目: breath_led
 * 描述: LED渐亮渐暗,实现呼吸灯的效果
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#include <Arduino.h>
#define led_y 12    // 定义LED引脚

void setup()
{
  pinMode(led_y, OUTPUT);  // 设置引脚为输出模式
}

void loop()
{
  for(int i = 0; i < 255; i++)  // For循环：增加变量i到255
  {
    analogWrite(led_y, i);  // PWM输出控制LED亮度
    delay(3);
  }
  
  for(int i = 255; i > 0; i--)  // For循环：递减变量i到0
  {
    analogWrite(led_y, i);
    delay(3);
  }
}