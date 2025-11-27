/*  
 * 项目: button
 * 描述: 读取按键的高低电平
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#define btn1 4

void setup() {
  Serial.begin(9600);
  pinMode(btn1, INPUT);
}

void loop() {
  boolean btn1_val = digitalRead(btn1);
  Serial.print("button1 = ");
  Serial.println(btn1_val);
  delay(100);
}
