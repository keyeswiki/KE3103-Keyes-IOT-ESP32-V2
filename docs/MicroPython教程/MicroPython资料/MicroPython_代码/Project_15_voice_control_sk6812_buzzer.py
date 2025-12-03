# 作者 : www.keyes-robot.com

from machine import Pin, PWM, UART
import neopixel
import time
import math

# 定义引脚
LED_PIN = 26
LED_COUNT = 4
BUZZER_PIN = 25
RX_PIN = 27
TX_PIN = 16

# 初始化NeoPixel
strip = neopixel.NeoPixel(Pin(LED_PIN), LED_COUNT)

# 初始化蜂鸣器
buzzer = PWM(Pin(BUZZER_PIN))
buzzer.duty(0)

# 初始化软件串口 (UART2)
uart = UART(2, baudrate=9600, rx=RX_PIN, tx=TX_PIN)

def color_wipe(color, wait):
    for i in range(len(strip)):
        strip[i] = color
        strip.write()
        time.sleep_ms(wait)

def theater_chase_rainbow(wait):
    first_pixel_hue = 0
    for a in range(30):
        for b in range(3):
            strip.fill((0, 0, 0))
            for c in range(b, len(strip), 3):
                hue = first_pixel_hue + c * 65536 // len(strip)
                rgb = hsv_to_rgb(hue / 65536.0, 1.0, 1.0)
                strip[c] = (int(rgb[0]), int(rgb[1]), int(rgb[2]))
            strip.write()
            time.sleep_ms(wait)
            first_pixel_hue += 65536 // 90

def hsv_to_rgb(h, s, v):
    if s == 0.0:
        return (v * 255, v * 255, v * 255)
    i = int(h * 6.0)
    f = (h * 6.0) - i
    p = v * (1.0 - s)
    q = v * (1.0 - s * f)
    t = v * (1.0 - s * (1.0 - f))
    i = i % 6
    if i == 0:
        return (v * 255, t * 255, p * 255)
    if i == 1:
        return (q * 255, v * 255, p * 255)
    if i == 2:
        return (p * 255, v * 255, t * 255)
    if i == 3:
        return (p * 255, q * 255, v * 255)
    if i == 4:
        return (t * 255, p * 255, v * 255)
    if i == 5:
        return (v * 255, p * 255, q * 255)

def play_tone(frequency, duration):
    if frequency == 0:
        buzzer.duty(0)
    else:
        buzzer.freq(frequency)
        buzzer.duty(512)
    time.sleep_ms(duration)
    buzzer.duty(0)

def birthday():
    tones = [
        (294, 250),  # D4
        (440, 250),  # A4
        (392, 250),  # G4
        (532, 250),  # C5
        (494, 250),  # B4
        (392, 250),  # G4
        (440, 250),  # A4
        (392, 250),   # G4
        (392, 250),  # G4
        (587, 250),  # D5
        (532, 250),  # C5  
        (392, 250),  # G4
        (784, 250), # G5
        (659, 250),  # E5
        (532, 250),  # C5  
        (494, 250),  # B4
        (440, 250),  # A4
        (698, 250),  # F5
        (659, 250),  # E5
        (532, 250),  # C5  
        (587, 250),  # D5
        (532, 500),  # C5-长时
        (0, 0),      # 关闭蜂鸣器
    ]
    for freq, dur in tones:
        play_tone(freq, dur)
        time.sleep_ms(50)

while True:
    if uart.any():
        command = uart.read(1)
        if command:
            cmd = ord(command)
            print("执行命令:", cmd) 
            
            if cmd == 11:
                birthday()
            elif cmd == 12:
                play_tone(0, 0)
            elif cmd == 13:
                color_wipe((255, 0, 0), 50)
            elif cmd == 14:
                color_wipe((0, 0, 0), 50)
            elif cmd == 15:
                color_wipe((0, 255, 0), 50)
            elif cmd == 16:
                color_wipe((0, 0, 0), 50)
            elif cmd == 17:
                color_wipe((0, 0, 255), 50)
            elif cmd == 18:
                color_wipe((0, 0, 0), 50)
            elif cmd == 36:
                theater_chase_rainbow(50)
            elif cmd == 37:
                color_wipe((0, 0, 0), 50)
            elif cmd == 38:
                play_tone(784, 250)
            elif cmd == 39:
                play_tone(0, 0)
            
            # 回声命令（可选）
            uart.write(str(cmd))