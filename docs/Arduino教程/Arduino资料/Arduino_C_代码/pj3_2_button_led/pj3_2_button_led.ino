/*  
 * 项目: button_led
 * 描述: 按键控制LED
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#define btn1 4
#define led_y 12
int btn_count = 0; // 按键计数器

void setup() 
{
  Serial.begin(9600);
  pinMode(btn1, INPUT);
  pinMode(led_y, OUTPUT);
}

void loop() 
{
  boolean btn1_val = digitalRead(btn1);
  if(btn1_val == 0) // 按下按钮
  {
    delay(10);  // 脱扣延迟10ms
    if(btn1_val == 0) // 确认按钮仍按下
    {
      boolean btn_state = 1;
      while(btn_state == 1) // 循环直到松开按钮
      {
        boolean btn_val = digitalRead(btn1);
        if(btn_val == 1)  // 松开按钮
        {
          btn_count++;    // 增量压计数器
          Serial.println(btn_count);
          btn_state = 0;  // 退出循环
        }
      }
    }
    boolean value = btn_count % 2; // 模运算（0或1）
    if(value == 1)
    {
      digitalWrite(led_y, HIGH); // 打开LED
    }
    else
    {
      digitalWrite(led_y, LOW); // 关闭LED
    }
  }
}