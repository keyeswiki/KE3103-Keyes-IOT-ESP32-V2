/*  
 * 项目: btn_fan
 * 描述: 按键控制风扇,模拟换档风扇
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#define fanPin1 19    // 风扇控制引脚1
#define fanPin2 18    // 风扇控制引脚2
#define btn1 4       // 按钮引脚1
#define btn2 32       // 按钮引脚2

int btn_count = 0;    // 计数器按钮1按下
int btn_count2 = 0;   // 计数器按钮2按下
int speed_val = 130;  // 风扇初始转速（PWM值）

void setup() {
  Serial.begin(9600);
  pinMode(btn1, INPUT);
  pinMode(btn2, INPUT);
  pinMode(fanPin1, OUTPUT);
  pinMode(fanPin2, OUTPUT);
}

void loop() {
  boolean btn1_val = digitalRead(btn1);
  
  // 按钮1（功率/速度控制）处理
  if(btn1_val == 0) // 如果按下按钮
  {
    delay(10);  // 防反跳延迟
    if(btn1_val == 0) // 确认按下按钮
    {
      boolean btn_state = 1;
      while(btn_state == 1) // 等待松开按键
      {
        boolean btn_val = digitalRead(btn1);
        if(btn_val == 1)  // 如果松开按键
        {
          btn_count++;    // 增量压计数器
          Serial.println(btn_count);
          btn_state = 0;  // 退出循环
        }
      }
    }
    
    boolean power_state = btn_count % 2; // 切换电源状态（0或1）
    
    while(power_state == 1) // 当风扇打开时
    {
      digitalWrite(fanPin1, LOW);  // 设置方向
      analogWrite(fanPin2, speed_val); // 设置速度
      
      // 按钮2（速度调节）处理
      boolean btn2_val = digitalRead(btn2);
      if(btn2_val == 0) // 如果按下速度键
      {
        delay(10); // 防反跳延迟
        if(btn2_val == 0) // 确认按下
        {
          boolean btn_state2 = 1;
          while(btn_state2 == 1) // 等待释放
          {
            boolean btn2_val = digitalRead(btn2);
            if(btn2_val == 1) // 如果松开
            {
              btn_count2++; // 递增速度等级
              if(btn_count2 > 3) // 循环1-3
              {
                btn_count2 = 1;
              }
              
              // 根据计数设置速度
              switch(btn_count2)
              {
                case 1: 
                  speed_val = 130; // 低速
                  Serial.println(speed_val);
                  break;
                case 2: 
                  speed_val = 180; // 中速
                  Serial.println(speed_val);
                  break;
                case 3: 
                  speed_val = 230; // 高速
                  Serial.println(speed_val);
                  break;
              }
              btn_state2 = 0;
            }
          }
        }
      }
      
      // 检查是否断电
      btn1_val = digitalRead(btn1);
      if(btn1_val == 0) // 如果按下电源按钮
      {
        delay(10); // 防反跳延迟
        if(btn1_val == 0) // 确认按下
        {
          digitalWrite(fanPin1, LOW); // 关闭风扇
          analogWrite(fanPin2, 0);
          power_state = 0;  // 退出控制风扇循环
        }
      }
    }
  }
}