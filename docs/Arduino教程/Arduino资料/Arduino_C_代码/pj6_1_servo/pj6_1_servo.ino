/*  
 * 项目: Servo
 * 描述: 门转动
 * 编译IDE：ARDUINO IDE
 * 作者: http//www.keyes-robot.com
*/
#include <ESP32Servo.h>
Servo myservo;  // 创建舵机对象来控制舵机
                // 在ESP32上可以创建16个舵机对象
                
int pos = 0;    // 变量存储舵机位置
// ESP32上推荐的PWM GPIO引脚包括 2,4,12-19,21-23,25-27,32-33 
int servoPin = 13;
                
void setup() {
	myservo.attach(servoPin); // 将引脚5上的舵机连接到舵机对象上
  myservo.write(0);
	delay(1000);
}

void loop() {
	for (pos = 0; pos <= 180; pos += 1) { // 从0°到180°
		// 以1度为步
		myservo.write(pos);    // 告诉舵机到变量“pos”的位置
		delay(15);             // 等待15ms让舵机到达位置
	}
	for (pos = 180; pos >= 0; pos -= 1) { // 从180°到0°
		myservo.write(pos);    // 告诉舵机到变量“pos”的位置
		delay(15);             // 等待15ms让舵机到达位置
	}
}
