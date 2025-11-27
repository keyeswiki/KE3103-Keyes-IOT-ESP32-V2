/*  
 * 项目: pyroelectric_led
 * 描述: 人体红外传感器控制黄色LED
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#define pyroelectric 14
#define led_y 12  // 黄色LED引脚定义

void setup() 
{
  Serial.begin(9600);
  pinMode(pyroelectric, INPUT);
  pinMode(led_y, OUTPUT);  // 设置引脚为输出模式
}

void loop() 
{
  boolean pyroelectric_val = digitalRead(pyroelectric);
  
  Serial.print("pyroelectric value = ");
  Serial.println(pyroelectric_val);
  
  delay(200);
  
  if(pyroelectric_val == 1)
  {
    digitalWrite(led_y, HIGH);  // 当检测到运动时，打开LED
  }
  else
  {
    digitalWrite(led_y, LOW);   // 无运动时关闭LED
  }
}