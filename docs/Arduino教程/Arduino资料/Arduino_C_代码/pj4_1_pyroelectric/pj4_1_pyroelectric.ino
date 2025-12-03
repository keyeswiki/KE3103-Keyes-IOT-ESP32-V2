/*  
 * 项目: pyroelectric
 * 描述: 读取人体红外传感器的高低电平
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#define pyroelectric 14

void setup() {
  Serial.begin(9600);
  pinMode(pyroelectric, INPUT);
}

void loop() {
  boolean pyroelectric_val = digitalRead(pyroelectric);
  Serial.print("pyroelectric value = ");
  Serial.println(pyroelectric_val);
  delay(200);
}
