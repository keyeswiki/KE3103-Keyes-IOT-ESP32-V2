/*  
 * 项目: btn_6812
 * 描述: 按键控制SK6812,按键切换灯光颜色
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#define btn1 4    // 按钮1引脚
#define btn2 32    // 按钮2引脚

#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // 需要 16 MHz Adafruit Trinket
#endif

#define LED_PIN    26    // NeoPixel数据引脚
#define LED_COUNT 4      // 新像素数
Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

int btn_count = 0; // 按键计数器

void setup() 
{
  Serial.begin(9600);
  pinMode(btn1, INPUT);
  pinMode(btn2, INPUT);
  
  #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
    clock_prescale_set(clock_div_1);
  #endif

  strip.begin();           // 初始化新像素条
  strip.show();            // 关闭所有像素
  strip.setBrightness(50); // 设置亮度（最大255）
}

void loop() 
{
  boolean btn1_val = digitalRead(btn1);
  boolean btn2_val = digitalRead(btn2);
  
  // 按钮1（减量）处理
  if(btn1_val == 0) // 按下按钮
  {
    delay(10);  // 防反跳延迟
    if(btn1_val == 0) // 按下确认按钮
    {
      boolean btn_state = 1;
      while(btn_state == 1) // 等待松开按钮
      {
        boolean btn_val = digitalRead(btn1);
        if(btn_val == 1)  // 松开按钮
        {
          btn_count--;    // 减量计数器
          if(btn_count <= 0) // 极限最小值
          {
            btn_count = 0;
          }
          Serial.println(btn_count);
          btn_state = 0;  // 退出循环
        }
      }
    }
  }
    
  // 按钮2（增量）处理
  if(btn2_val == 0) // 按下按钮
  {
    delay(10);  // 防反跳延迟
    if(btn2_val == 0) // 按下确认按钮
    {
      boolean btn_state2 = 1;
      while(btn_state2 == 1) // 等待松开按钮
      {
        boolean btn2_val = digitalRead(btn2);
        if(btn2_val == 1)  // 松开按钮
        {
          btn_count++;    // 增量计数器
          if(btn_count >= 6) // 极限最大值
          {
            btn_count = 6;
          }
          Serial.println(btn_count);
          btn_state2 = 0;  // 退出循环
        }
      }
    }
  }

  // 根据按钮计数改变LED颜色
  switch(btn_count)
  {
    case 0: colorWipe(strip.Color(0,   0,   0), 50); break;    // 关
    case 1: colorWipe(strip.Color(255,  0,   0), 50); break;   // 红
    case 2: colorWipe(strip.Color(0,   255,   0), 50); break;  // 绿
    case 3: colorWipe(strip.Color(0,   0,   255), 50); break;  // 蓝
    case 4: colorWipe(strip.Color(255, 255,   0), 50); break;  // 黄
    case 5: colorWipe(strip.Color(255, 0,   255), 50); break;  // 品红
    case 6: colorWipe(strip.Color(255, 255, 255), 50); break;  // 白
  }
}

// 用一种颜色填充灯带
void colorWipe(uint32_t color, int wait) 
{
  for(int i=0; i<strip.numPixels(); i++) 
  { 
    strip.setPixelColor(i, color); // 设置像素颜色
    strip.show();                  // 更新灯带
    delay(wait);                   // 暂停
  }
}