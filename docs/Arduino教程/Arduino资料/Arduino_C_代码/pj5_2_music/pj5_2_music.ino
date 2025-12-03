/*  
 * 项目: music
 * 描述: 按键切换歌曲
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#include <musicESP32_home.h>   
music Music(25);  // 在GPIO25上初始化音乐播放器
#define btn1 4    // 按钮引脚
int btn_count = 0; // 按键计数器
boolean music_flag = 0; // 触发音乐播放的标志

void setup() 
{
  Serial.begin(9600);
  pinMode(btn1, INPUT);
  // 可供选择的音乐：
  // Music.tetris();
  // Music.birthday();
  // Music.Ode_to_Joy();
  // Music.christmas();
  // Music.star_war_tone();
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
      
      while(btn_state == 1) // 等待按钮被释放
      {
        boolean btn_val = digitalRead(btn1);
        
        if(btn_val == 1)  // 松开按钮
        {
          music_flag = 1;
          btn_count++;    // 增量按下按键计数器
          Serial.println(btn_count);
          
          // Cycle through 1-3 count
          if(btn_count == 4)
          {
            btn_count = 1;
          }
          
          // 根据播放次数播放不同的歌曲
          switch(btn_count)
          {
            case 1: 
              if(music_flag == 1)
              {
                Music.Ode_to_Joy();
                music_flag=0;
              } 
              break;
              
            case 2: 
              if(music_flag == 1)
              {
                Music.christmas();
                music_flag=0;
              } 
              break;
              
            case 3: 
              if(music_flag == 1)
              {
                Music.tetris();
                music_flag=0;
              } 
              break;
          }
          
          btn_state = 0;  // 退出等待循环
        }
      }
    }
  }
}