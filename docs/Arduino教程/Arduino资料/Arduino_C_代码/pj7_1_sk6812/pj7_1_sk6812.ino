/*  
 * 项目: SK6812
 * 描述: SK6812发出多种灯光颜色
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // 需要16兆赫Adafruit饰品
#endif
// Arduino的哪个引脚连接到NeoPixels？
//如果是Trinket或Gemma，我们建议将其更改为1：
#define LED_PIN    26
// 有多少NeoPixels连接到Arduino？
#define LED_COUNT 4
// 声明我们的NeoPixel条带对象：
Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  // 这些线路专门支持Adafruit Trinket 5V 16 MHz.
  // 任何其他板，可以移除该部分（无影响）：
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif
  // 结束特定于Trinket的代码

  strip.begin();           // 初始化NeoPixel条带对象（REQUIRED）
  strip.show();            // 尽快关闭所有像素
  strip.setBrightness(50); // 将亮度设置为1/5 （max = 255）
}


// Loop（）函数——只要单板打开就会重复运行 ---------------

void loop() {
  // 沿着条的长度用不同的颜色填充...
  colorWipe(strip.Color(255,   0,   0), 50); // 红
  colorWipe(strip.Color(  0, 255,   0), 50); // 绿
  colorWipe(strip.Color(  0,   0, 255), 50); // 蓝

  // 做一个剧院的帐篷效果在不同的颜色...
  theaterChase(strip.Color(127, 127, 127), 50); // 白，半亮度
  theaterChase(strip.Color(127,   0,   0), 50); // 红，半亮度
  theaterChase(strip.Color( 0,   0, 127), 50); // 蓝，半亮度

  rainbow(10);             // 流动的彩虹循环沿着整个地带
  theaterChaseRainbow(50); // 彩虹增强型剧场追逐型
}


// 我们自己创建的一些动画效果 -----------------

//用颜色逐个填充条形像素。带材未首先清除；任何东西都将被逐像素覆盖。
//传入color(作为一个‘打包’的32位值，你可以通过调用strip来获得。颜色（红，绿，蓝）如上面loop（）函数所示，
//像素之间的延迟时间（毫秒）。
void colorWipe(uint32_t color, int wait) {
  for(int i=0; i<strip.numPixels(); i++) { // 对于条带中的每个像素...
    strip.setPixelColor(i, color);         //  设置像素的颜色（RAM）
    strip.show();                          //  更新条带以匹配
    delay(wait);                           //  暂停一会儿
  }
}

//剧院式的追逐灯。传入一个颜色（32位值，如上面提到的strip.Color(r,g,b)），
//帧与帧之间的延迟时间（毫秒）。
void theaterChase(uint32_t color, int wait) {
  for(int a=0; a<10; a++) {  // 重复10次...
    for(int b=0; b<3; b++) { //  ‘b’从0到2...
      strip.clear();         //  将RAM中的所有像素设置为0（关闭）
      // ‘c’从‘b’开始计数，以3为步...
      for(int c=b; c<strip.numPixels(); c += 3) {
        strip.setPixelColor(c, color); // 设置像素c的值为color
      }
      strip.show(); // 用新内容更新条带
      delay(wait);  // 暂停一会儿
    }
  }
}

// 彩虹沿着整个条带循环。在帧之间传递延迟时间（毫秒）。
void rainbow(int wait) {
//第一个像素的色相通过色轮运行5个完整的循环。
//色轮的范围是65536，但是如果我们翻转它是可以的，所以只从0到5*65536计数。
//每次给firstPixelHue添加256意味着我们将让5*65536/256 = 1280次通过这个外部循环：
  for(long firstPixelHue = 0; firstPixelHue < 5*65536; firstPixelHue += 256) {
    for(int i=0; i<strip.numPixels(); i++) { // 对于条带中的每个像素...
      // 偏移像素色相的数量，使一个完整的旋转色轮（范围65536）沿着条的长度（strip. numpixels（）步骤）：
      int pixelHue = firstPixelHue + (i * 65536L / strip.numPixels());
      // strip.ColorHSV（）可以接受1或3个参数：色调（0到65535）或可选地添加饱和度和值（亮度）（每个0到255）。
      // 这里我们只使用单参数的hue变量。
      // 结果通过strip.gamma32（）传递，以便在分配每个像素之前提供“更真实”的颜色：
      strip.setPixelColor(i, strip.gamma32(strip.ColorHSV(pixelHue)));
    }
    strip.show(); // 用新内容更新条带
    delay(wait);  // 暂停一会儿
  }
}

// 彩虹增强剧院帐篷。在帧之间传递延迟时间（毫秒）。
void theaterChaseRainbow(int wait) {
  int firstPixelHue = 0;     // 第一个像素以红色开始（色调0）
  for(int a=0; a<30; a++) {  // 重复30次...
    for(int b=0; b<3; b++) { //  ‘b’从0到2...
      strip.clear();         //  将RAM中的所有像素设置为0（关闭）
      // “c”从“b”开始计数，以3为增量到条带的末尾…
      for(int c=b; c<strip.numPixels(); c += 3) {
        // 像素‘c’的色调被偏移一定的量，
        // 使色轮沿着条带的长度（strip. numpixels（）步骤）完整旋转一次（范围65536）：
        int hue   = firstPixelHue + c * 65536L / strip.numPixels();
        uint32_t color = strip.gamma32(strip.ColorHSV(hue)); // hue -> RGB
        strip.setPixelColor(c, color); // 设置像素c的值为color
      }
      strip.show();                // 用新内容更新条带
      delay(wait);                 // 暂停一会儿
      firstPixelHue += 65536 / 90; // 一个周期的色轮超过90帧
    }
  }
}
