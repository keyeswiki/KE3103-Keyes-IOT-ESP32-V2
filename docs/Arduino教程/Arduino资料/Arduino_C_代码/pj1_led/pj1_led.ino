/*  
 * 项目: led
 * 描述: LED闪烁
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#define led_y 12  // 定义黄色LED引脚为12

void setup()  
{    // setup函数中的代码只运行一次  
  pinMode(led_y, OUTPUT);  // 设置引脚为输出模式 
}

void loop()  
{     // 循环函数内的代码反复运行
  digitalWrite(led_y, HIGH);  // 设置led_y引脚为HIGH（打开LED）
  delay(200);     // 以毫秒为单位的延迟 
  digitalWrite(led_y, LOW);   // 设置led_y引脚为LOW（关闭LED）
  delay(200);  
}