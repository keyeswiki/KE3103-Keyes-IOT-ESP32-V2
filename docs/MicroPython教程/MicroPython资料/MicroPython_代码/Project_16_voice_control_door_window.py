from machine import Pin, PWM, UART
import time

# 引脚定义
RX_PIN = 27  # 语音模块RX引脚GPIO27
TX_PIN = 16  # 语音模块TX引脚GPIO16
SERVO_PIN_WINDOW = 5   # 窗户舵机引脚GPIO5
SERVO_PIN_DOOR = 13    # 门舵机引脚GPIO13

# 舵机角度参数（MicroPython中PWM占空比范围通常为0-1023）
WINDOW_OPEN_ANGLE = 80 
WINDOW_CLOSE_ANGLE = 0
DOOR_OPEN_ANGLE = 175
DOOR_CLOSE_ANGLE = 0

# 语音指令定义
CMD_OPEN_WINDOW = 57
CMD_CLOSE_WINDOW = 58
CMD_OPEN_DOOR = 59
CMD_CLOSE_DOOR = 60

class ServoController:
    def __init__(self, pin, min_duty=25, max_duty=128, min_angle=0, max_angle=180):
        self.pwm = PWM(Pin(pin))
        self.pwm.freq(50)  # 舵机频率50Hz
        self.min_duty = min_duty
        self.max_duty = max_duty
        self.min_angle = min_angle
        self.max_angle = max_angle
        self.current_angle = 0
        
    def angle_to_duty(self, angle):
        """将角度转换为PWM占空比"""
        angle = max(self.min_angle, min(self.max_angle, angle))
        return int(self.min_duty + (angle - self.min_angle) * 
                  (self.max_duty - self.min_duty) / (self.max_angle - self.min_angle))
    
    def write(self, angle):
        """设置舵机角度"""
        duty = self.angle_to_duty(angle)
        self.pwm.duty(duty)
        self.current_angle = angle
        time.sleep_ms(1000)  # 等待舵机移动
    
    def detach(self):
        """断开舵机（停止供电）"""
        self.pwm.deinit()

class VoiceControlSystem:
    def __init__(self):
        # 初始化串口（语音模块）
        self.voice_uart = UART(2, baudrate=9600, rx=RX_PIN, tx=TX_PIN)
        
        # 初始化舵机
        self.window_servo = ServoController(SERVO_PIN_WINDOW)
        self.door_servo = ServoController(SERVO_PIN_DOOR)
        
        # 状态变量
        self.window_state = False  # False-关闭, True-打开
        self.door_state = False    # False-关闭, True-打开
        
        # 初始化位置
        self.initialize_positions()
        
    def initialize_positions(self):
        """初始化到关闭位置"""
        print("初始化系统位置...")
        self.window_servo.write(WINDOW_CLOSE_ANGLE)
        self.door_servo.write(DOOR_CLOSE_ANGLE)
        time.sleep_ms(1000)
        self.window_state = False
        self.door_state = False
        print("初始化完成")
    
    def process_voice_command(self, command):
        """处理语音指令"""
        print("收到语音指令:", command)
        
        if command == CMD_OPEN_WINDOW:
            self.control_window(True)
        elif command == CMD_CLOSE_WINDOW:
            self.control_window(False)
        elif command == CMD_OPEN_DOOR:
            self.control_door(True)
        elif command == CMD_CLOSE_DOOR:
            self.control_door(False)
        else:
            print("未知指令，请重试")
    
    def control_window(self, open_cmd):
        """控制窗户"""
        if open_cmd and not self.window_state:
            self.window_servo.write(WINDOW_OPEN_ANGLE)
            time.sleep_ms(1000)
            self.window_state = True
            print("窗户已打开")
        elif not open_cmd and self.window_state:
            self.window_servo.write(WINDOW_CLOSE_ANGLE)
            time.sleep_ms(1000)
            self.window_state = False
            print("窗户已关闭")
        else:
            print("窗户已经是目标状态")
    
    def control_door(self, open_cmd):
        """控制门"""
        if open_cmd and not self.door_state:
            self.door_servo.write(DOOR_OPEN_ANGLE)
            time.sleep_ms(1000)
            self.door_state = True
            print("门已打开")
        elif not open_cmd and self.door_state:
            self.door_servo.write(DOOR_CLOSE_ANGLE)
            time.sleep_ms(1000)
            self.door_state = False
            print("门已关闭")
        else:
            print("门已经是目标状态")
    
    def get_system_status(self):
        """获取系统状态"""
        return {
            "window": "打开" if self.window_state else "关闭",
            "door": "打开" if self.door_state else "关闭"
        }
    
    def emergency_stop(self):
        """紧急停止"""
        self.window_servo.detach()
        self.door_servo.detach()
        print("紧急停止！所有舵机已断电")
    
    def run(self):
        """主循环"""
        print("智能语音门窗控制系统已启动")
        print("等待语音指令...")
        print("可用指令：57-开窗户, 58-关窗户, 59-开门, 60-关门")
        
        while True:
            # 检查语音模块数据
            if self.voice_uart.any():
                try:
                    command = self.voice_uart.read(1)
                    if command:
                        self.process_voice_command(command[0])
                except Exception as e:
                    print("读取语音指令错误:", e)
            
            time.sleep_ms(100)

# 扩展功能类
class EnhancedVoiceControlSystem(VoiceControlSystem):
    def __init__(self):
        super().__init__()
        self.manual_control_enabled = True
        
    def manual_control(self, device, action):
        """手动控制接口"""
        if not self.manual_control_enabled:
            print("手动控制已禁用")
            return
            
        if device == "window":
            self.control_window(action == "open")
        elif device == "door":
            self.control_door(action == "open")
        else:
            print("未知设备")
    
    def set_servo_calibration(self, device, min_duty=None, max_duty=None):
        """校准舵机参数"""
        servo = self.window_servo if device == "window" else self.door_servo
        
        if min_duty is not None:
            servo.min_duty = min_duty
        if max_duty is not None:
            servo.max_duty = max_duty
            
        print(f"{device}舵机校准完成: min_duty={servo.min_duty}, max_duty={servo.max_duty}")

# 创建并运行系统
if __name__ == "__main__":
    try:
        system = VoiceControlSystem()
        system.run()
    except KeyboardInterrupt:
        print("系统已停止")
    except Exception as e:
        print("系统错误:", e)