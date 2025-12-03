# 作者 : www.keyes-robot.com

from machine import Pin, PWM
import time

# 定义按钮引脚
btn1 = Pin(4, Pin.IN, Pin.PULL_UP)
btn_count = 0
music_flag = False

# 蜂鸣器引脚 (假设使用GPIO25)
buzzer = PWM(Pin(25))

# 音符频率定义 (示例，您可以根据需要调整)
NOTE_B0  = 31
NOTE_C1  = 33
NOTE_CS1 = 35
NOTE_D1  = 37
# ... 更多音符定义

# 简单的音乐播放函数
def play_tone(frequency, duration):
    if frequency == 0:
        buzzer.duty(0)
        time.sleep_ms(duration)
        return
    buzzer.freq(frequency)
    buzzer.duty(512)  # 50%占空比
    time.sleep_ms(duration)
    buzzer.duty(0)    # 停止声音
    time.sleep_ms(10)

def play_ode_to_joy():
    # 欢乐颂简谱 (示例频率和时长)
    melody = [
        (392, 200), (392, 200), (440, 200), (466, 200),
        (466, 200), (440, 200), (392, 200), (349, 200),
        (329, 200), (329, 200), (349, 200), (392, 200),
        (392, 300), (349, 100), (349, 400)
    ]
    for note in melody:
        play_tone(note[0], note[1])

def play_christmas():
    # 圣诞歌简谱
    melody = [
        (262, 200), (262, 200), (294, 400),
        (262, 400), (349, 400), (330, 800)
    ]
    for note in melody:
        play_tone(note[0], note[1])

def play_tetris():
    # 俄罗斯方块主题曲
    melody = [
        (330, 200), (247, 200), (262, 200), (294, 200),
        (330, 200), (247, 200), (262, 200), (330, 200),
        (294, 200), (262, 200), (247, 200), (196, 200)
    ]
    for note in melody:
        play_tone(note[0], note[1])

def setup():
    buzzer.duty(0)  # 初始关闭蜂鸣器

def loop():
    global btn_count, music_flag
    
    btn1_val = btn1.value()
    
    if btn1_val == 0:  # 按钮按下
        time.sleep_ms(10)  # 防抖延迟
        
        if btn1_val == 0:  # 确认按钮仍按下
            btn_state = True
            
            while btn_state:
                btn_val = btn1.value()
                
                if btn_val == 1:  # 按钮释放
                    music_flag = True
                    btn_count += 1
                    print("Button count:", btn_count)
                    
                    # 循环计数1-3
                    if btn_count == 4:
                        btn_count = 1
                    
                    # 根据计数播放不同的歌曲
                    if music_flag:
                        if btn_count == 1:
                            play_ode_to_joy()
                        elif btn_count == 2:
                            play_christmas()
                        elif btn_count == 3:
                            play_tetris()
                        music_flag = False
                    
                    btn_state = False  # 退出等待循环

# 主程序
setup()
while True:
    loop()
    time.sleep_ms(10)  # 减少CPU占用