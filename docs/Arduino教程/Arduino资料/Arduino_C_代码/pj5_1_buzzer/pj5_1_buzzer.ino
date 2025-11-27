/*  
 * 项目: buzzer
 * 描述: 蜂鸣器播放音乐
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#include <BuzzerESP32.h>

BuzzerESP32 buzzer(25); // 初始化GPIO25的蜂鸣器

void setup() 
{
  buzzer.setTimbre(30); // 设置音色（音质）
  birthday();          // 演奏生日旋律
}

void loop() 
{
  // 空循环，旋律在启动时只播放一次
}

void birthday() 
{
  // 演奏生日旋律 - 参数为（频率，持续时间）
  buzzer.playTone(294, 250);  // D4
  buzzer.playTone(440, 250);  // A4
  buzzer.playTone(392, 250);  // G4
  buzzer.playTone(532, 250);  // C5  
  buzzer.playTone(494, 250);  // B4
  buzzer.playTone(392, 250);  // G4
  buzzer.playTone(440, 250);  // A4
  buzzer.playTone(392, 250);  // G4
  buzzer.playTone(587, 250);  // D5
  buzzer.playTone(532, 250);  // C5  
  buzzer.playTone(392, 250);  // G4
  buzzer.playTone(784, 250);  // G5
  buzzer.playTone(659, 250);  // E5
  buzzer.playTone(532, 250);  // C5  
  buzzer.playTone(494, 250);  // B4
  buzzer.playTone(440, 250);  // A4
  buzzer.playTone(698, 250);  // F5
  buzzer.playTone(659, 250);  // E5
  buzzer.playTone(532, 250);  // C5  
  buzzer.playTone(587, 250);  // D5
  buzzer.playTone(532, 500);  // C5   - 长时
  buzzer.playTone(0, 0);      // 关闭蜂鸣器
}