/*  
 * 项目: xht11 lcd
 * 描述: LCD显示XHT11的温湿度
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C mylcd(0x27,16,2);
#include <dht11.h>

// 定义引脚常数
const int DHT11PIN = 17; // 温湿度传感器引脚
dht11 DHT11; // 初始化dht11

void setup() {
  Serial.begin(9600);//启动串口监视器，设置波特率为9600
  mylcd.init();
  mylcd.backlight();
  mylcd.clear();
}

void loop() {
   //定义两个温度和湿度值
   int Temperature;
   int Humidity;
   //获得数据
   int chk = DHT11.read(DHT11PIN); 
   Temperature = DHT11.temperature;
   Humidity = DHT11.humidity;
   // 在LCD上相应位置显示温度信息
   mylcd.setCursor(0, 0);
   mylcd.print("Temp:");
   mylcd.setCursor(5, 0);
   mylcd.print(Temperature); 
   mylcd.setCursor(8, 0);
   mylcd.print("C");
   // 在LCD上相应位置显示湿度信息
   mylcd.setCursor(0, 1);
   mylcd.print("Hum:");
   mylcd.setCursor(5, 1);
   mylcd.print(Humidity);
   mylcd.setCursor(8, 1);
   mylcd.print("%RH");
   delay(500);
}
