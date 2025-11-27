/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/block.js":
/*!*****************************!*\
  !*** ./src/blocks/block.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RGB_color_HSV: () => (/* binding */ RGB_color_HSV),
/* harmony export */   RGB_color_rgb: () => (/* binding */ RGB_color_rgb),
/* harmony export */   RGB_color_seclet: () => (/* binding */ RGB_color_seclet),
/* harmony export */   display_rgb: () => (/* binding */ display_rgb),
/* harmony export */   display_rgb_Brightness: () => (/* binding */ display_rgb_Brightness),
/* harmony export */   display_rgb_init: () => (/* binding */ display_rgb_init),
/* harmony export */   display_rgb_rainbow1: () => (/* binding */ display_rgb_rainbow1),
/* harmony export */   display_rgb_rainbow3: () => (/* binding */ display_rgb_rainbow3),
/* harmony export */   display_rgb_show: () => (/* binding */ display_rgb_show),
/* harmony export */   group_lcd_init2: () => (/* binding */ group_lcd_init2),
/* harmony export */   group_lcd_power: () => (/* binding */ group_lcd_power),
/* harmony export */   group_lcd_print: () => (/* binding */ group_lcd_print),
/* harmony export */   ke_DHT: () => (/* binding */ ke_DHT),
/* harmony export */   ke_a_Write: () => (/* binding */ ke_a_Write),
/* harmony export */   ke_bluetooth: () => (/* binding */ ke_bluetooth),
/* harmony export */   ke_button: () => (/* binding */ ke_button),
/* harmony export */   ke_buzzer: () => (/* binding */ ke_buzzer),
/* harmony export */   ke_ir_g: () => (/* binding */ ke_ir_g),
/* harmony export */   ke_led: () => (/* binding */ ke_led),
/* harmony export */   ke_motor2: () => (/* binding */ ke_motor2),
/* harmony export */   ke_music: () => (/* binding */ ke_music),
/* harmony export */   ke_notone: () => (/* binding */ ke_notone),
/* harmony export */   ke_servo: () => (/* binding */ ke_servo),
/* harmony export */   ke_servo_r: () => (/* binding */ ke_servo_r),
/* harmony export */   ke_smoke: () => (/* binding */ ke_smoke),
/* harmony export */   ke_smoke_D: () => (/* binding */ ke_smoke_D),
/* harmony export */   ke_steam: () => (/* binding */ ke_steam),
/* harmony export */   ke_tone01: () => (/* binding */ ke_tone01),
/* harmony export */   rc522_i2c_init: () => (/* binding */ rc522_i2c_init),
/* harmony export */   rc522_i2c_read: () => (/* binding */ rc522_i2c_read),
/* harmony export */   wifi_client_connected: () => (/* binding */ wifi_client_connected),
/* harmony export */   wifi_client_init: () => (/* binding */ wifi_client_init),
/* harmony export */   wifi_init: () => (/* binding */ wifi_init),
/* harmony export */   wifi_read_data: () => (/* binding */ wifi_read_data),
/* harmony export */   wifi_read_ip: () => (/* binding */ wifi_read_ip),
/* harmony export */   wifi_send_data: () => (/* binding */ wifi_send_data)
/* harmony export */ });
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ "blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! profile */ "profile");
/* harmony import */ var profile__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(profile__WEBPACK_IMPORTED_MODULE_1__);



const SMART_HOME_HUE = 80;

/////////////////模拟输出//////////////////////

const ke_a_Write = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ANALOGWRITE_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_CHANNEL)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                ['CH0 (LT0)', '0'],
                ['CH1 (LT0)', '1'],
                ['CH2 (LT1)', '2'],
                ['CH3 (LT1)', '3'],
                ['CH4 (LT2)', '4'],
                ['CH5 (LT2)', '5'],
                ['CH6 (LT3)', '6'],
                ['CH7 (LT3)', '7'],
                ['CH8 (HT0)', '8'],
                ['CH9 (HT0)', '9'],
                ['CH10 (HT1)', '10'],
                ['CH11 (HT1)', '11'],
                ['CH12 (HT2)', '12'],
                ['CH13 (HT2)', '13'],
                ['CH14 (HT3)', '14'],
                ['CH15 (HT3)', '15']]), "channel");
        this.appendValueInput("NUM", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_VALUE2)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_INOUT_ANALOG_WRITE);
        this.setHelpUrl("");
    }
};

//////////////////LED////////////////
const ke_led = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_LED)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_led_yellow.png */ "./src/media/ke_led_yellow.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
/////////////////蜂鸣器//////////////////////

var TONE_NOTES = [
    ["NOTE_C3", "131"], ["NOTE_D3", "147"], ["NOTE_E3", "165"], ["NOTE_F3", "175"], ["NOTE_G3", "196"], ["NOTE_A3", "220"], ["NOTE_B3", "247"],
    ["NOTE_C4", "262"], ["NOTE_D4", "294"], ["NOTE_E4", "330"], ["NOTE_F4", "349"], ["NOTE_G4", "392"], ["NOTE_A4", "440"], ["NOTE_B4", "494"],
    ["NOTE_C5", "532"], ["NOTE_D5", "587"], ["NOTE_E5", "659"], ["NOTE_F5", "698"], ["NOTE_G5", "784"], ["NOTE_A5", "880"], ["NOTE_B5", "988"]
];


const ke_tone01 = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(TONE_NOTES), 'STAT');
        this.setOutput(true, Number);
    }
};


const ke_buzzer = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BUZZER2)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_buzzer_w.png */ "./src/media/ke_buzzer_w.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendValueInput('FREQUENCY')
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.kids_tone);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.kids_beat)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([["1/8", "125"], ["3/8", "375"], ["1/4", "250"], ["3/4", "750"], ["1/2", "500"], ["1", "1000"]]), 'DURATION');

        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
    }
};


///////////music////////////////////
const ke_music = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.kids_play_tone)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_buzzer_w.png */ "./src/media/ke_buzzer_w.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            //.appendField(new Blockly.FieldDropdown([["Birthday", "Birthday"],["City of Sky", "City of Sky"],["Ode to Joy", "Ode to Joy"]]), 'play');
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                ['Birthday', 'Music.birthday();'],
                ['Tetris', 'Music.tetris();'],
                ['Ode to Joy', 'Music.Ode_to_Joy();'],
                ['Christmas', 'Music.christmas();'],
                ['Super mario', 'Music.super_mario();'],
                ['Star war tone', 'Music.star_war_tone();']
            ]), 'play');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
    }
};

////////////////////关闭蜂鸣器////////////////////////
const ke_notone = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.kids_notone)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_buzzer_w.png */ "./src/media/ke_buzzer_w.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        //this.setTooltip(Blockly.Msg.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
    }
};

////////////////////////电机///////////////////////////////////

const ke_motor2 = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MOTOR)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_fs.png */ "./src/media/ke_fs.png"), 43, 32));
        this.appendValueInput("PIN1", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField('INA')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT1");
        this.appendValueInput("PIN2", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField('INB');
        this.appendValueInput("SPEED2", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_MOTOR_ANALOG)
            .setCheck(Number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

///////////////////////////舵机///////////////////////////////////
const ke_servo = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SERVO)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_servo.png */ "./src/media/ke_servo.png"), 70, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendValueInput("angle", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DEGREE_0_180);
        this.appendValueInput("time", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DELAY + '(' + blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DELAY_MS + ')');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
    }
};

const ke_servo_r = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SERVO)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_READ_DEGREES);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_READ);
    }
};


///////////人体红外传感器////////////////////
const ke_ir_g = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_IR_G)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_rentihongwai.png */ "./src/media/ke_rentihongwai.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////按键传感器////////////////////
const ke_button = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BUTTON)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_button.png */ "./src/media/ke_button.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////烟雾数字传感器////////////////////
const ke_smoke_D = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SMOKE_DATA)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_gas.png */ "./src/media/ke_gas.png"), 60, 48));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////水蒸气传感器///////////////
const ke_steam = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_STEAM)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_steam.png */ "./src/media/ke_steam.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};
//////////烟雾传感器///////////////
const ke_smoke = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SMOKE_ANALOG)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_gas.png */ "./src/media/ke_gas.png"), 60, 48));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};


var WHAT = [[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_GETTEMPERATUE, 'temperature'], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_GETHUMIDITY, 'humidity']];

const ke_DHT = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([['DHT11', '11'], ['DHT21', '21'], ['DHT22', '22']]), 'TYPE')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_dht11.png */ "./src/media/ke_dht11.png"), 50, 40))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "PIN")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(WHAT), "WHAT");
        this.setOutput(true, Number);
        var thisBlock = this;
        this.setTooltip(function () {
            var op = thisBlock.getFieldValue('WHAT');
            var TOOLTIPS = {
                'temperature': blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM,
                'humidity': blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_GET_HUM
            };
            return TOOLTIPS[op];
        });
    }
};

//////////////////RGB灯////////////////////////////
const RGB_color_seclet = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldColour("ff0000"), "COLOR");
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.OLED_DRAW_PIXE_TOOLTIP);
    }
};

const RGB_color_rgb = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendValueInput("R")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB_R);
        this.appendValueInput("G")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB_G);
        this.appendValueInput("B")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB_B);
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('');
    }
};

var DISPLAY_RGB_TYPE = [
    ["NEO_GRB", "NEO_GRB"],
    ["NEO_RGB", "NEO_RGB"],
    ["NEO_RGBW", "NEO_RGBW"]
];

//RGB
const display_rgb_init = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB + blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_SETUP)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "PIN")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_MICROPYTHON_SOCKET_TYPE)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(DISPLAY_RGB_TYPE), "TYPE");
        this.appendValueInput("LEDCOUNT")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB_COUNT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        //  this.setFieldValue("12", "PIN");
    }
};

const display_rgb_Brightness = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "PIN")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.appendValueInput("Brightness")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_BRIGHTNESS);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        //  this.setFieldValue("12", "PIN");
    }
};


const display_rgb = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "PIN")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.appendValueInput("_LED_")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB_NUM);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.HTML_COLOUR);
        this.appendValueInput("COLOR", Number)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        // this.setFieldValue("12", "PIN");
    }
};

const display_rgb_show = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB_SHOW)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "PIN")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

var DISPLAY_RAINBOW_TYPE = [
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_1, "normal"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_2, "change"]
];


const display_rgb_rainbow1 = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "PIN")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.appendValueInput("WAIT")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGBdisplay_rgb_rainbow1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // this.setFieldValue("12", "PIN");
    }
};

const display_rgb_rainbow3 = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "PIN")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(DISPLAY_RAINBOW_TYPE), "TYPE");
        this.appendValueInput("rainbow_color")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB_display_rgb_rainbow3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // this.setFieldValue("12", "PIN");
    }
};

const RGB_color_HSV = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "PIN")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.appendValueInput("_LED_")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_RGB_NUM);
        this.appendValueInput("H")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.HSV_H);
        this.appendValueInput("S")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.HSV_S);
        this.appendValueInput("V")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.HSV_V);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('色调范围0-65536;饱和度范围0-255;明度范围0-255');
    }
};

///////////////////1602LCD IIC//////////////////////
const group_lcd_init2 = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendValueInput('device')
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_SETUP)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DF_LCD)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([['1602', '16,2'], ['2004', '20,4']]), 'TYPE')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('mylcd'), 'VAR')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_ADDRESS);
        this.appendValueInput("SCL", Number)
            .appendField('SCL')
            .setCheck(Number);
        this.appendValueInput("SDA", Number)
            .appendField('SDA')
            .setCheck(Number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_LCD_INIT2);
    }
};


const group_lcd_print = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendValueInput("TEXT", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DF_LCD)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('mylcd'), 'VAR')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_PRINT1);
        this.appendValueInput("TEXT2", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_PRINT2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_LCD_PRINT);
    }
};



const group_lcd_power = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DF_LCD)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('mylcd'), 'VAR')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ON, "display"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_OFF, "noDisplay"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_CURSOR, "cursor"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_NOCURSOR, "noCursor"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_BLINK, "blink"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_NOBLINK, "noBlink"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_CLEAR, "clear"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_NOBACKLIGHT, "noBacklight"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_BACKLIGHT, "backlight"]]), "STAT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_LCD_POWER);
    }
};

//////////////////////RFID////////////////////////////
const rc522_i2c_init = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_rc522_iic_init)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/rc522_iic.png */ "./src/media/rc522_iic.png"), 60, 40));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

const rc522_i2c_read = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_rc522_iic_read)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/rc522_iic.png */ "./src/media/rc522_iic.png"), 60, 40));
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

//////////////////////蓝牙////////////////////////////
const ke_bluetooth = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendValueInput("PIN1", Number)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('val'), 'VAL')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BLUETOOTH)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_bluetooth.png */ "./src/media/ke_bluetooth.png"), 70, 32))
            .appendField("RX:")
            .setCheck(Number);
        this.appendValueInput("PIN2", Number)
            .appendField("TX:")
            .setCheck(Number);
        this.appendStatementInput('DO')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_read);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};



////////////////////WIFI////////////////////////////

const wifi_init = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_WIFI_INIT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/wifi.png */ "./src/media/wifi.png"), 40, 30));
        this.appendValueInput("SSID", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("SSID")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_WIFI_NAME);
        this.appendValueInput("PASSWD", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("PASSWD")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_WIFI_PASSWORD);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};


const wifi_read_ip = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_WIFI_READ_IP)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/wifi.png */ "./src/media/wifi.png"), 40, 30));
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

const wifi_client_init = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_WIFI_CLIENT_INIT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/wifi.png */ "./src/media/wifi.png"), 40, 30));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

const wifi_client_connected = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_WIFI_CLIENT_COMMECTED)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/wifi.png */ "./src/media/wifi.png"), 40, 30));
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};
const wifi_read_data = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_WIFI_READ_DATA)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/wifi.png */ "./src/media/wifi.png"), 40, 30));
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};
const wifi_send_data = {
    init: function () {
        this.setColour(SMART_HOME_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_WIFI_SEND_DATA)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/wifi.png */ "./src/media/wifi.png"), 40, 30));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

/***/ }),

/***/ "./src/generators/generator.js":
/*!*************************************!*\
  !*** ./src/generators/generator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RGB_color_HSV: () => (/* binding */ RGB_color_HSV),
/* harmony export */   RGB_color_rgb: () => (/* binding */ RGB_color_rgb),
/* harmony export */   RGB_color_seclet: () => (/* binding */ RGB_color_seclet),
/* harmony export */   display_rgb: () => (/* binding */ display_rgb),
/* harmony export */   display_rgb_Brightness: () => (/* binding */ display_rgb_Brightness),
/* harmony export */   display_rgb_init: () => (/* binding */ display_rgb_init),
/* harmony export */   display_rgb_rainbow1: () => (/* binding */ display_rgb_rainbow1),
/* harmony export */   display_rgb_rainbow2: () => (/* binding */ display_rgb_rainbow2),
/* harmony export */   display_rgb_rainbow3: () => (/* binding */ display_rgb_rainbow3),
/* harmony export */   display_rgb_show: () => (/* binding */ display_rgb_show),
/* harmony export */   group_lcd_init2: () => (/* binding */ group_lcd_init2),
/* harmony export */   group_lcd_power: () => (/* binding */ group_lcd_power),
/* harmony export */   group_lcd_print: () => (/* binding */ group_lcd_print),
/* harmony export */   ke_DHT: () => (/* binding */ ke_DHT),
/* harmony export */   ke_a_Write: () => (/* binding */ ke_a_Write),
/* harmony export */   ke_bluetooth: () => (/* binding */ ke_bluetooth),
/* harmony export */   ke_button: () => (/* binding */ ke_button),
/* harmony export */   ke_buzzer: () => (/* binding */ ke_buzzer),
/* harmony export */   ke_ir_g: () => (/* binding */ ke_ir_g),
/* harmony export */   ke_led: () => (/* binding */ ke_led),
/* harmony export */   ke_motor2: () => (/* binding */ ke_motor2),
/* harmony export */   ke_music: () => (/* binding */ ke_music),
/* harmony export */   ke_notone: () => (/* binding */ ke_notone),
/* harmony export */   ke_servo: () => (/* binding */ ke_servo),
/* harmony export */   ke_servo_r: () => (/* binding */ ke_servo_r),
/* harmony export */   ke_smoke: () => (/* binding */ ke_smoke),
/* harmony export */   ke_smoke_D: () => (/* binding */ ke_smoke_D),
/* harmony export */   ke_sound: () => (/* binding */ ke_sound),
/* harmony export */   ke_steam: () => (/* binding */ ke_steam),
/* harmony export */   ke_tone01: () => (/* binding */ ke_tone01),
/* harmony export */   rc522_i2c_init: () => (/* binding */ rc522_i2c_init),
/* harmony export */   rc522_i2c_read: () => (/* binding */ rc522_i2c_read),
/* harmony export */   wifi_client_connected: () => (/* binding */ wifi_client_connected),
/* harmony export */   wifi_client_init: () => (/* binding */ wifi_client_init),
/* harmony export */   wifi_init: () => (/* binding */ wifi_init),
/* harmony export */   wifi_read_data: () => (/* binding */ wifi_read_data),
/* harmony export */   wifi_read_ip: () => (/* binding */ wifi_read_ip),
/* harmony export */   wifi_send_data: () => (/* binding */ wifi_send_data)
/* harmony export */ });
/* harmony import */ var mixly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mixly */ "mixly");
/* harmony import */ var mixly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mixly__WEBPACK_IMPORTED_MODULE_0__);


////////////////////模拟输出////////////////////

const ke_a_Write = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var ch = this.getFieldValue('channel');
    var value_num = generator.valueToCode(this, 'NUM', generator.ORDER_ATOMIC);
    generator.setups_['ke_a_Write'] = 'ledcSetup('+ch+', 490, 8);';
    generator.setups_['led_ch'] = 'ledcAttachPin('+dropdown_pin+', '+ch+');';

    return `ledcWrite(${ch}, ${value_num});\n`;
};

////////////////////LED////////////////////
const ke_led = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};

////////////////////蜂鸣器////////////////////

const ke_tone01 = function (_, generator) {
    var code = this.getFieldValue('STAT');
    return [code, generator.ORDER_ATOMIC];
};

const ke_buzzer = function (block, generator) {
    var pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var fre = generator.valueToCode(block, 'FREQUENCY', generator.ORDER_ATOMIC);
    var dur = this.getFieldValue('DURATION');

    generator.definitions_['include_tone_init'] = '#include <ESP32Tone.h>\n';
    generator.setups_[`buzzer_${pin}`] = 'pinMode(' + pin + ', OUTPUT);\n';
    var code = 'tone(' + pin + ', ' + fre + ', ' + dur + ', 0);\n';
    return code;
};

const ke_music = function (block, generator) {
    var pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var play = this.getFieldValue('play');
    generator.definitions_['include_music_init'] = '#include <ESP32Tone.h>\n#include <musicESP32.h>\n';

    generator.definitions_[`music_${pin}`] = 'music Music(' + pin + ');';

    generator.setups_[`buzzer_${pin}`] = 'pinMode(' + pin + ', OUTPUT);\n';

    var code = '' + play + '\n';
    return code;

};

const ke_notone = function (block, generator) {
    var pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_[`buzzer_${pin}`] = 'pinMode(' + pin + ', OUTPUT);\n';

    var code = 'noTone(' + pin + ', 0);\n';
    return code;

};

////////////////////电机////////////////////

const ke_motor2 = function (block, generator) {
    var pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);
    //const val1 = generator.valueToCode(block, 'SPEED1', generator.ORDER_ATOMIC);
    var state1 = this.getFieldValue('STAT1');
    var val2 = generator.valueToCode(this, 'SPEED2', generator.ORDER_ATOMIC);

    generator.setups_[`ke_motor2`] = 'pinMode(' + pin1 + ', OUTPUT);\n  ledcSetup(5, 1200, 8);\n  ledcAttachPin(' + pin2 + ', 5);\n';

    var code = 'digitalWrite(' + pin1 + ',' + state1 + ');\nledcWrite(5, ' + val2 + ');\n';
    return code;

};



////////////////////舵机////////////////////
const ke_servo = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var value_degree = generator.valueToCode(this, 'angle', generator.ORDER_ATOMIC);
    //value_degree = value_degree.replace('(','').replace(')','')
    var delay_time = generator.valueToCode(this, 'time', generator.ORDER_ATOMIC) || '0'
    //delay_time = delay_time.replace('(','').replace(')','');

    generator.definitions_['include_ESP32_Servo'] = '#include <ESP32_Servo.h>';
    generator.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';';
    generator.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ',500,2500);';

    var code = 'servo_' + dropdown_pin + '.write(' + value_degree + ');\n' + 'delay(' + delay_time + ');\n';
    return code;
};

const ke_servo_r = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);

    generator.definitions_['include_ESP32_Servo'] = '#include <ESP32_Servo.h>';
    generator.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';';
    generator.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');';

    var code = 'servo_' + dropdown_pin + '.read()';
    return [code, generator.ORDER_ATOMIC];
};

//////////////////////////数字传感器////////////////////////////////

const ke_ir_g = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'digitalRead(' + dropdown_pin + ')';
    return [code, generator.ORDER_ATOMIC];
};

/////////////////按键传感器////////////////
const ke_button = ke_ir_g;
/////////////////烟雾数字传感器/////////////////
const ke_smoke_D = ke_ir_g;

//////////////////////模拟传感器/////////////////////////
const ke_sound = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'analogRead(' + dropdown_pin + ')';
    return [code, generator.ORDER_ATOMIC];
};

////////////////////水蒸气////////////////////
///
const ke_steam = ke_sound;



////////////////////烟雾////////////////////

const ke_smoke = ke_sound;


//////////////////////////DHT11///////////////////////////


const ke_DHT = function (_, generator) {
    var sensor_type = this.getFieldValue('TYPE');
    var dropdown_pin = this.getFieldValue('PIN');
    var what = this.getFieldValue('WHAT');
    generator.definitions_['include_DHT'] = '#include <DHT.h>';
    generator.definitions_['var_declare_dht' + dropdown_pin] = 'DHT dht' + dropdown_pin + '(' + dropdown_pin + ', ' + sensor_type + ');'
    generator.setups_['DHT_SETUP' + dropdown_pin] = ' dht' + dropdown_pin + '.begin();';
    var code;
    if (what == "temperature")
        code = 'dht' + dropdown_pin + '.readTemperature()'
    else
        code = 'dht' + dropdown_pin + '.readHumidity()'
    return [code, generator.ORDER_ATOMIC];
}

///////////////////////////RGB灯/////////////////
const RGB_color_seclet = function (_, generator) {
    var colour = this.getFieldValue('COLOR');
    colour = '0x' + colour.substring(1, colour.length);
    return [colour, generator.ORDER_NONE];
};

const RGB_color_rgb = function (_, generator) {
    var R = generator.valueToCode(this, 'R', generator.ORDER_ATOMIC);
    var G = generator.valueToCode(this, 'G', generator.ORDER_ATOMIC);
    var B = generator.valueToCode(this, 'B', generator.ORDER_ATOMIC);
    var colour = "((" + R + " & 0xffffff) << 16) | ((" + G + " & 0xffffff) << 8) | " + B;
    return [colour, generator.ORDER_NONE];
};

const display_rgb_init = function (_, generator) {
    var dropdown_rgbpin = this.getFieldValue('PIN');
    var type = this.getFieldValue('TYPE');
    var value_ledcount = generator.valueToCode(this, 'LEDCOUNT', generator.ORDER_ATOMIC);
    generator.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
    generator.definitions_['var_declare_rgb_display' + dropdown_rgbpin] = 'Adafruit_NeoPixel rgb_display_' + dropdown_rgbpin + ' = Adafruit_NeoPixel(' + value_ledcount + ',' + dropdown_rgbpin + ',' + type + ' + NEO_KHZ800);';
    generator.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.begin();';
    return '';
};

const display_rgb_Brightness = function (_, generator) {
    var dropdown_rgbpin = this.getFieldValue('PIN');
    var Brightness = generator.valueToCode(this, 'Brightness', generator.ORDER_ATOMIC);
    generator.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
    generator.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.begin();';
    var code = 'rgb_display_' + dropdown_rgbpin + '.setBrightness(' + Brightness + ');\n';
    return code;
};

const display_rgb = function (_, generator) {
    var dropdown_rgbpin = this.getFieldValue('PIN');
    var value_led = generator.valueToCode(this, '_LED_', generator.ORDER_ATOMIC);
    var COLOR = generator.valueToCode(this, 'COLOR', generator.ORDER_ATOMIC);
    COLOR = COLOR.replace(/#/g, "0x");
    var code = 'rgb_display_' + dropdown_rgbpin + '.setPixelColor((' + value_led + ')-1, ' + COLOR + ');\n';
    return code;
};

const RGB_color_HSV = function (_, generator) {
    var dropdown_rgbpin = this.getFieldValue('PIN');
    var value_led = generator.valueToCode(this, '_LED_', generator.ORDER_ATOMIC);
    var H = generator.valueToCode(this, 'H', generator.ORDER_ATOMIC);
    var S = generator.valueToCode(this, 'S', generator.ORDER_ATOMIC);
    var V = generator.valueToCode(this, 'V', generator.ORDER_ATOMIC);
    var code = 'rgb_display_' + dropdown_rgbpin + '.setPixelColor((' + value_led + ')-1, ' + 'rgb_display_' + dropdown_rgbpin + '.ColorHSV(' + H + ',' + S + ',' + V + '));\n';
    return code;
};

const display_rgb_show = function () {
    var dropdown_rgbpin = this.getFieldValue('PIN');
    var code = 'rgb_display_' + dropdown_rgbpin + '.show();\n';
    return code;
};

const display_rgb_rainbow1 = function (_, generator) {
    var dropdown_rgbpin = this.getFieldValue('PIN');
    var wait_time = generator.valueToCode(this, 'WAIT', generator.ORDER_ATOMIC);
    generator.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.begin();\n';
    var funcName2 = 'Wheel';
    var code2 = 'uint32_t Wheel(byte WheelPos){\n'
        + '  if(WheelPos < 85){\n'
        + '    return rgb_display_' + dropdown_rgbpin + '.Color(WheelPos * 3, 255 - WheelPos * 3, 0);\n'
        + '  }\n'
        + '  else if(WheelPos < 170){\n'
        + '    WheelPos -= 85;\n'
        + '    return rgb_display_' + dropdown_rgbpin + '.Color(255 - WheelPos * 3, 0, WheelPos * 3);\n'
        + '  }\n '
        + '  else{\n'
        + '    WheelPos -= 170;\n'
        + '    return rgb_display_' + dropdown_rgbpin + '.Color(0, WheelPos * 3, 255 - WheelPos * 3);\n'
        + '  }\n'
        + '}\n';
    generator.definitions_[funcName2] = code2;
    var funcName3 = 'rainbow';
    var code3 = 'void rainbow(uint8_t wait){\n'
        + '  uint16_t i, j;\n'
        + '  for(j=0; j<256; j++){\n'
        + '    for(i=0; i<rgb_display_' + dropdown_rgbpin + '.numPixels(); i++){\n'
        + '      rgb_display_' + dropdown_rgbpin + '.setPixelColor(i, Wheel((i+j) & 255));\n'
        + '    }\n'
        + '    rgb_display_' + dropdown_rgbpin + '.show();\n'
        + '    delay(wait);\n'
        + '  }\n'
        + '}\n';
    generator.definitions_[funcName3] = code3;
    var code = 'rainbow(' + wait_time + ');\n'
    return code;
};

const display_rgb_rainbow2 = function (_, generator) {
    var dropdown_rgbpin = this.getFieldValue('PIN');
    var wait_time = generator.valueToCode(this, 'WAIT', generator.ORDER_ATOMIC);
    var funcName2 = 'Wheel';
    var code2 = 'uint32_t Wheel(byte WheelPos){\n'
        + '  if(WheelPos < 85){\n'
        + '    return rgb_display_' + dropdown_rgbpin + '.Color(WheelPos * 3, 255 - WheelPos * 3, 0);\n'
        + '  }\n'
        + '  else if(WheelPos < 170){\n'
        + '    WheelPos -= 85;\n'
        + '    return rgb_display_' + dropdown_rgbpin + '.Color(255 - WheelPos * 3, 0, WheelPos * 3);\n'
        + '  }\n'
        + '  else{\n'
        + '    WheelPos -= 170;\n'
        + '    return rgb_display_' + dropdown_rgbpin + '.Color(0, WheelPos * 3, 255 - WheelPos * 3);\n'
        + '  }\n'
        + '}\n';
    generator.definitions_[funcName2] = code2;
    var funcName3 = 'rainbow';
    var code3 = 'void rainbow(uint8_t wait){\n'
        + '  uint16_t i, j;\n'
        + '  for(j=0; j<256; j++){\n'
        + '    for(i=0; i<rgb_display_' + dropdown_rgbpin + '.numPixels(); i++){\n'
        + '      rgb_display_' + dropdown_rgbpin + '.setPixelColor(i, Wheel((i+j) & 255));\n'
        + '    }\n'
        + '    rgb_display_' + dropdown_rgbpin + '.show();\n'
        + '    delay(wait);\n'
        + '  }\n'
        + '}\n';
    generator.definitions_[funcName3] = code3;
    var funcName4 = 'rainbowCycle';
    var code4 = 'void rainbowCycle(uint8_t wait){\n'
        + '  uint16_t i, j;\n'
        + '  for(j=0; j<256*5; j++){\n'
        + '    for(i=0; i< rgb_display_' + dropdown_rgbpin + '.numPixels(); i++){\n'
        + '      rgb_display_' + dropdown_rgbpin + '.setPixelColor(i, Wheel(((i * 256 / rgb_display_' + dropdown_rgbpin + '.numPixels()) + j) & 255));\n'
        + '    }\n'
        + '    rgb_display_' + dropdown_rgbpin + '.show();\n'
        + '    delay(wait);\n'
        + '  }\n'
        + '}\n';
    generator.definitions_[funcName4] = code4;
    var code = 'rainbowCycle(' + wait_time + ');\n'
    return code;
};

const display_rgb_rainbow3 = function (_, generator) {
    var dropdown_rgbpin = this.getFieldValue('PIN');
    var rainbow_color = generator.valueToCode(this, 'rainbow_color', generator.ORDER_ATOMIC);
    var type = this.getFieldValue('TYPE');
    var funcName2 = 'Wheel';
    var code2 = 'uint32_t Wheel(byte WheelPos){\n'
        + '  if(WheelPos < 85){\n'
        + '    return rgb_display_' + dropdown_rgbpin + '.Color(WheelPos * 3, 255 - WheelPos * 3, 0);\n'
        + '  }\n'
        + '  else if(WheelPos < 170){\n'
        + '    WheelPos -= 85;\n'
        + '    return rgb_display_' + dropdown_rgbpin + '.Color(255 - WheelPos * 3, 0, WheelPos * 3);\n'
        + '  }\n'
        + '  else{\n'
        + '    WheelPos -= 170;return rgb_display_' + dropdown_rgbpin + '.Color(0, WheelPos * 3, 255 - WheelPos * 3);\n'
        + '  }\n'
        + '}\n';
    generator.definitions_[funcName2] = code2;
    var code3 = '';
    if (type == "normal")
        code3 = 'for(int RGB_RAINBOW_i = 0; RGB_RAINBOW_i < rgb_display_' + dropdown_rgbpin + '.numPixels(); RGB_RAINBOW_i++){\n'
            + '  rgb_display_' + dropdown_rgbpin + '.setPixelColor(RGB_RAINBOW_i, Wheel(' + rainbow_color + ' & 255));\n'
            + '}\n'
            + 'rgb_display_' + dropdown_rgbpin + '.show();\n';
    else
        code3 = 'for(int RGB_RAINBOW_i = 0; RGB_RAINBOW_i < rgb_display_' + dropdown_rgbpin + '.numPixels(); RGB_RAINBOW_i++){\n'
            + '  rgb_display_' + dropdown_rgbpin + '.setPixelColor(RGB_RAINBOW_i, Wheel(((RGB_RAINBOW_i * 256 / rgb_display_' + dropdown_rgbpin + '.numPixels()) + ' + rainbow_color + ') & 255));\n'
            + '}\n'
            + 'rgb_display_' + dropdown_rgbpin + '.show();\n';
    return code3;
};


////////////////////////////////////lcd 1602////////////////////////////////////

const group_lcd_init2 = function (_, generator) {
    var varName = this.getFieldValue('VAR');
    var TYPE = this.getFieldValue('TYPE');
    var SCL = generator.valueToCode(this, 'SCL', generator.ORDER_ATOMIC);
    var SDA = generator.valueToCode(this, 'SDA', generator.ORDER_ATOMIC);
    var board_type = mixly__WEBPACK_IMPORTED_MODULE_0__.JSFuncs.getPlatform();
    var device = generator.valueToCode(this, 'device', generator.ORDER_ATOMIC) || '0x27';
    if (SDA == "SDA" && SCL == "SCL") {
        generator.definitions_['include_Wire'] = '#include <Wire.h>';
        generator.definitions_['include_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>';
        generator.definitions_['var_declare_LiquidCrystal_I2C_' + varName] = 'LiquidCrystal_I2C ' + varName + '(' + device + ',' + TYPE + ');';
    }
    else {
        if (board_type.match(RegExp(/AVR/))) {
            generator.definitions_['include_SoftI2CMaster'] = '#include <SoftI2CMaster.h>';
            generator.definitions_['include_LiquidCrystal_SoftI2C'] = '#include <LiquidCrystal_SoftI2C.h>';
            generator.definitions_['var_declare_LiquidCrystal_SoftI2C_' + varName] = 'LiquidCrystal_SoftI2C ' + varName + '(' + device + ',' + TYPE + ',' + SCL + ',' + SDA + ');';
        }
        else {
            generator.definitions_['include_Wire'] = '#include <Wire.h>';
            generator.definitions_['include_LiquidCrystal_SoftI2C'] = '#include <LiquidCrystal_I2C.h>';
            generator.definitions_['var_declare_LiquidCrystal_I2C_' + varName] = 'LiquidCrystal_I2C ' + varName + '(' + device + ',' + TYPE + ');';
            generator.setups_["setup_Wire"] = 'Wire.begin(' + SDA + ',' + SCL + ');';
        }
    }
    generator.setups_['setup_lcd_init_' + varName] = varName + '.init();';
    generator.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';
    return '';
};



const group_lcd_print = function (_, generator) {
    var varName = this.getFieldValue('VAR');
    var str1 = generator.valueToCode(this, 'TEXT', generator.ORDER_ATOMIC) || '""';
    var str2 = generator.valueToCode(this, 'TEXT2', generator.ORDER_ATOMIC) || '""';

    var code = varName + '.setCursor(0, 0);\n'
    code += varName + '.print(' + str1 + ');\n';
    code += varName + '.setCursor(0, 1);\n';
    code += varName + '.print(' + str2 + ');\n';
    //code+=varName+'.setCursor(0, 2);\n';
    //code+=varName+'.print('+str3+');\n';
    //code+=varName+'.setCursor(0, 3);\n';
    //code+=varName+'.print('+str4+');\n';
    return code;
};



const group_lcd_power = function () {
    var varName = this.getFieldValue('VAR');
    var dropdown_stat = this.getFieldValue('STAT');
    var code = varName + '.' + dropdown_stat + '();\n'
    return code;
};

//////////////////////RFID////////////////////////////
const rc522_i2c_init = function (_, generator) {
    generator.definitions_['1include_rc522_iic_init'] = '#include <Wire.h>\n#include <MFRC522_I2C.h>\nMFRC522 mfrc522(0x28);\nString rfid_str = "";\n';
    generator.definitions_['1include_rc522_iic_data'] = 'String return_rfid_data()\n' +
        '{\n' +
        '  if ( ! mfrc522.PICC_IsNewCardPresent() || ! mfrc522.PICC_ReadCardSerial() ) {\n' +
        '    delay(50);\n' +
        '    return "0";\n' +
        '  }\n' +
        '  rfid_str = "";\n' +
        '  for (byte i = 0; i < mfrc522.uid.size; i++) {\n' +
        '    rfid_str = rfid_str + String(mfrc522.uid.uidByte[i],HEX);\n' +
        '  }\n' +
        '  return rfid_str;\n' +
        '}\n';

    generator.setups_['1setup_rc522_iic'] = 'Wire.begin();\nmfrc522.PCD_Init();\n';

    return '';
};


const rc522_i2c_read = function (_, generator) {
    return ['return_rfid_data()', generator.ORDER_ATOMIC];
};


/////////////////////////////////////蓝牙////////////////////////////////////
const ke_bluetooth = function (_, generator) {
    var val = this.getFieldValue('VAL');
    var branch = generator.statementToCode(this, 'DO');
    var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);


    generator.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
    generator.definitions_['mySerial'] = 'SoftwareSerial mySerial(' + dropdown_pin1 + ', ' + dropdown_pin2 + ');\n';
    generator.definitions_['char'] = 'char ' + val + ';\n';

    generator.setups_['mySerial23'] = 'mySerial.begin(9600);';

    var code = 'if (mySerial.available())\n{\n' + val + ' = mySerial.read();\n';
    code += branch;
    code += '}\n';
    return code;
};

/////////////////////////////////////WIFI////////////////////////////////////
const wifi_init = function (block, generator) {
    var ssid = generator.valueToCode(block, 'SSID', generator.ORDER_ATOMIC);
    var passwd = generator.valueToCode(block, 'PASSWD', generator.ORDER_ATOMIC);
    generator.definitions_['wifi_init'] = '#include <WiFi.h>\n#include <ESPmDNS.h>\n#include <WiFiClient.h>\n';

    generator.definitions_['wifi_init2'] = 'const char* ssid = ' + ssid + ';\nconst char* password = ' + passwd + ';\n';
    generator.setups_['wifi_setup'] = 'WiFi.begin(ssid, password);\n   while (WiFi.status() != WL_CONNECTED) {\n   delay(1000); \n   Serial.print(".");} \n   WiFi.setTxPower(WIFI_POWER_19dBm);';

    return ``;

};

// generator.wifi_read = function () {
//     return [`req`, generator.ORDER_ATOMIC];
// };


const wifi_read_ip = function (_, generator) {
    return [`WiFi.localIP()`, generator.ORDER_ATOMIC]
};

const wifi_client_init = function () {

    return 'WiFiClient client = server.available();\n';
};

const wifi_client_connected = function (_, generator) {
    generator.definitions_['wifi_client_connected'] = 'WiFiServer server(80);\n';
    generator.setups_.wifi_client_connected = 'server.begin();\n';  

    return [`(client == 0 && client.connected() == 0)`, generator.ORDER_ATOMIC];
};

const wifi_read_data = function (_, generator) {

    return [`request`, generator.ORDER_ATOMIC];
};

// WiFi 发送数据块
const wifi_send_data = function (block, generator) {
    // 包含 DHT 库
    generator.definitions_['include_dht'] = '#include <DHT.h>\n';

    // 初始化 DHT 传感器
    generator.definitions_['dht_1'] = 'DHT dht_1(17, 11);\n';

    // 设置引脚模式
    generator.setups_['setup_dht'] = 
        'pinMode(34, INPUT);\n' +
        'pinMode(23, INPUT);\n' +
        'pinMode(14, INPUT);\n' + 
        'pinMode(25, OUTPUT);\n' +
        'pinMode(19, OUTPUT);\n' +
        'pinMode(18, OUTPUT);\n' +
        'pinMode(12, OUTPUT);\n' +
        'dht_1.begin();\n';

    // 生成代码字符串
    var code =
        'String request = "";\n' +
        'if (client.available())\n' + 
        '{\n' +
        '  request = client.readStringUntil(\'s\');\n' +
        '}\n' +
        'String dataBuffer = "";\n' + 
        'dataBuffer += String(analogRead(34));\n' +
        'dataBuffer += ",";\n' +
        'dataBuffer += String(digitalRead(23));\n' +
        'dataBuffer += ",";\n' +
        'dataBuffer += String(digitalRead(14));\n' +
        'dataBuffer += ",";\n' +
        'dataBuffer += String(int(dht_1.readTemperature()));\n' +
        'dataBuffer += ",";\n' +
        'dataBuffer += String(int(dht_1.readHumidity()));\n' +
        'client.print(dataBuffer);\n' + 
        'delay(500);\n';

    return code;
};

/***/ }),

/***/ "./src/language/en.js":
/*!****************************!*\
  !*** ./src/language/en.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnCatgories: () => (/* binding */ EnCatgories),
/* harmony export */   EnMsg: () => (/* binding */ EnMsg)
/* harmony export */ });
const EnMsg = {};


EnMsg.ke_LED = 'led';

EnMsg.MIXLY_ANALOGWRITE_PIN = 'AnalogWrite PIN#';
EnMsg.MIXLY_CHANNEL = 'channel';

EnMsg.MIXLY_VALUE2 = 'value';


EnMsg.Kids_ON = 'HIGH';
EnMsg.Kids_OFF = 'LOW';
EnMsg.Kids_anologWrite = 'anologWrite';

EnMsg.Kids_iic = 'PIN：SDA# A4, SCL# A5';
EnMsg.Kids_rot = 'button_PIN';
EnMsg.Kids_rot_count = 'count';
EnMsg.Kids_bits = 'string';
EnMsg.Kids_pin = 'PIN';

EnMsg.Kids_iic_pin = 'PIN #SDA:A4,#SCL:A5';
EnMsg.Kids_lcd_p = 'LCD';
EnMsg.Kids_shilihua = 'Instantiation name';
EnMsg.Kids_size = 'font size';

EnMsg.Kids_printcount = 'Display digits';
EnMsg.ke_string = 'display character';

EnMsg.Kids_lcd_left = 'LCD_Scroll to the left';
EnMsg.Kids_lcd_right = 'LCD_Scroll to the right';

EnMsg.ke_TM1637='4 digit 8-segment LED digital';
EnMsg.ke_ws='digit';
EnMsg.ke_begin='Display position';
EnMsg.ke_fill0='add 0?';
EnMsg.ke_light='Brightness0~7';
EnMsg.ke_XY='Show or hide';
EnMsg.ke_L='left';
EnMsg.ke_R='right';
EnMsg.ke_MH='colon';
EnMsg.ke_value='value';


EnMsg.MIXLY_WIFI_INIT = 'WIFI Initialization';
EnMsg.MIXLY_WIFI_NAME = 'Name';
EnMsg.MIXLY_WIFI_PASSWORD = 'Password';
EnMsg.MIXLY_WIFI_READ_IP = 'WIFI Read IP';
EnMsg.MIXLY_WIFI_CLIENT_INIT = 'WIFI Initialize Client';
EnMsg.MIXLY_WIFI_CLIENT_CONNECTED = 'WIFI Client Not Connected';
EnMsg.MIXLY_WIFI_READ_DATA = 'WIFI Read Data';
EnMsg.MIXLY_WIFI_SEND_DATA = 'WIFI Send Data';

EnMsg.ke_oled_init = 'OLED_init';
EnMsg.ke_oled_piexl = 'OLED_point coordinates';
EnMsg.ke_oled_x = 'column';
EnMsg.ke_oled_y = 'row';
EnMsg.ke_oled_cong = 'from';
EnMsg.ke_oled_dao = 'to';
EnMsg.ke_oled_kai = 'initial point';
EnMsg.ke_oled_kuan = 'width';
EnMsg.ke_oled_chang = 'height';
EnMsg.ke_oled_angle1 = 'angle1';
EnMsg.ke_oled_angle2 = 'angle2';
EnMsg.ke_oled_angle3 = 'angle3';

EnMsg.ke_oled_line = 'OLED_line';
EnMsg.ke_oled_rect = 'OLED_hollow rectangle';
EnMsg.ke_oled_fil_lrect = 'OLED_solid rectangle';
EnMsg.ke_oled_r_rect = 'OLED_hollow rounded rectangle';
EnMsg.ke_oled_r_fill_rect = 'OLED_solid rounded rectangle';
EnMsg.ke_oled_circle = 'OLED_hollow circle  Center coordinates';
EnMsg.ke_oled_circle_radius = 'Circle radius';
EnMsg.ke_oled_radius = 'Corner radius';
EnMsg.ke_oled_fill_circle = 'OLED_solid circle  Center coordinates';
EnMsg.ke_oled_triangle = 'OLED_hollow triangle';
EnMsg.ke_oled_fill_triangle = 'OLED_solid triangle';
EnMsg.ke_oled_string1 = 'OLED_displays a string or number';
EnMsg.ke_oled_weizhi = 'display position';
EnMsg.ke_oled_print = 'display';
EnMsg.ke_oled_clear = 'OLED_clear';


EnMsg.MIXLY_ke_LED1='Piranha LED';
EnMsg.MIXLY_ke_LED2='Red Piranha LED';
EnMsg.MIXLY_ke_LED3='Green Piranha LED';
EnMsg.MIXLY_ke_LED4='Yellow Piranha LED';
EnMsg.MIXLY_ke_LED5='Blue Piranha LED';
EnMsg.MIXLY_ke_LED01='Straw cap LED';
EnMsg.MIXLY_ke_LED02='Red Straw cap LED';
EnMsg.MIXLY_ke_LED03='Green Straw cap LED';
EnMsg.MIXLY_ke_LED04='Yellow straw cap LED';
EnMsg.MIXLY_ke_LED05='Blue Straw cap LED';
EnMsg.MIXLY_ke_QCD='Colorful lights';
EnMsg.MIXLY_ke_RGB_A='Common anode RGB';
EnMsg.MIXLY_ke_RGB_B='Common cathode RGB';

EnMsg.MIXLY_ke_BUZZER1='Active buzzer';
EnMsg.MIXLY_ke_BUZZER2='Passive Buzzer';
EnMsg.MIXLY_ke_RELAY='Relay';
EnMsg.MIXLY_ke_v_motor='Vibration motor';
EnMsg.MIXLY_ke_SPEAKER='Speaker';
EnMsg.MIXLY_NOTONE_PIN = 'noTone PIN#';
EnMsg.MIXLY_ke_MOTOR='Fan';
EnMsg.MIXLY_MOTOR_ANALOG='analog value';
EnMsg.MIXLY_ke_MOTOR01='geared motor';
EnMsg.MIXLY_ke_SERVO='servo';
EnMsg.MIXLY_ke_TB6612='TB6612motor';
EnMsg.MIXLY_H='front';
EnMsg.MIXLY_L='back';



EnMsg.MIXLY_RGB_INIT = 'RGB Init';
EnMsg.MIXLY_RGB_SET_BRIGHTNESS = 'RGB Brightness';
EnMsg.MIXLY_RGB_SET_COLOR = 'RGB Color';
EnMsg.MIXLY_RGB_SHOW = 'RGB show';
EnMsg.MIXLY_RGB = 'RGB';
EnMsg.MIXLY_CHASE = 'chase';
EnMsg.MIXLY_RAINBOW = 'rainbow';
EnMsg.MIXLY_RGB_NUM = 'NO';
EnMsg.MIXLY_RGB_COUNT = 'COUNT';
EnMsg.MIXLY_RGB_R = 'R';
EnMsg.MIXLY_RGB_G = 'G';
EnMsg.MIXLY_RGB_B = 'B';
EnMsg.MIXLY_RGBdisplay_rgb_rainbow1 = 'conversion switch time';
EnMsg.MIXLY_RGBdisplay_rgb_rainbow2 = 'cycle switch time';
EnMsg.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_1 = 'Normal';
EnMsg.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_2 = 'Gradient';
EnMsg.MIXLY_RGB_display_rgb_rainbow3 = 'rainbow';

EnMsg.MIXLY_ke_IR_G='PIR Sensor';
EnMsg.MIXLY_ke_FLAME='Flame Sensor';
EnMsg.MIXLY_ke_HALL='Hall Sensor';
EnMsg.MIXLY_ke_CRASH='Crash Sensor';
EnMsg.MIXLY_ke_BUTTON='Button';
EnMsg.MIXLY_ke_sl_BUTTON='Self-locking button';
EnMsg.MIXLY_ke_TUOCH='Capacitive Touch';
EnMsg.MIXLY_ke_KNOCK='Knock Sensor';
EnMsg.MIXLY_ke_TILT='Tilt Sensor';
EnMsg.MIXLY_ke_SHAKE='Vibration Sensor';
EnMsg.MIXLY_ke_REED_S='Reed Switch Sensor';
EnMsg.MIXLY_ke_TRACK='Tracking Sensor';
EnMsg.MIXLY_ke_AVOID='Obstacle Avoidance MSensor';
EnMsg.MIXLY_ke_LIGHT_B='Light Interrupt Sensor';
EnMsg.MIXLY_ke_ROT='Rotation';


EnMsg.MIXLY_ke_ANALOG_T='Analog Temperature Sensor';
EnMsg.MIXLY_ke_SOUND='Sound Sensor';
EnMsg.MIXLY_ke_LIGHT='photocell Sensor';
EnMsg.MIXLY_ke_UV='UV Sensor';
EnMsg.MIXLY_ke_Piezo='Piezo Sensor';
EnMsg.MIXLY_ke_WATER='Water Level Sensor';
EnMsg.MIXLY_ke_SOIL='Soil Sensor';
EnMsg.MIXLY_ke_POTENTIOMETER='rotational potentiometer';
EnMsg.MIXLY_ke_LM35='LM35 Temperature Sensor';
EnMsg.MIXLY_ke_SLIDE_POTENTIOMETER='slide potentiometer';
EnMsg.MIXLY_ke_TEMT6000='TEMT6000 Ambient Light';
EnMsg.MIXLY_ke_STEAM='water vapor sensor';
EnMsg.MIXLY_ke_FILM_P='Thin-film Pressure Sensor';
EnMsg.MIXLY_ke_JOYSTICK='Joystick Sensor';
EnMsg.MIXLY_ke_JOYSTICK_btn='Joystick_button';
EnMsg.MIXLY_ke_SMOKE_DATA='Smoke Sensor digital';
EnMsg.MIXLY_ke_SMOKE_ANALOG='Smoke Sensor analog';
EnMsg.MIXLY_ke_ALCOHOL='Alcohol Sensor';
EnMsg.MIXLY_ke_Voltage='Voltage Sensor';
EnMsg.MIXLY_ke_Current='Current Sensor';


EnMsg.MIXLY_ke_18B20='18B20 Temperature Sensor';
EnMsg.MIXLY_ke_18B20_R='Getting temperature';
EnMsg.MIXLY_ke_DHT11='temperature and humidity Sensor';
EnMsg.MIXLY_DHT11_H='getTemperature';    /////////////
EnMsg.MIXLY_DHT11_T='getHumidity';     ////////////
EnMsg.MIXLY_ke_BMP180='BMP180 altimeter Sensor';
EnMsg.MIXLY_ke_BMP180_T='temperature';
EnMsg.MIXLY_ke_BMP180_A='atmosphere';
EnMsg.MIXLY_ke_BMP180_H='height above sea level ';

EnMsg.MIXLY_ke_BMP280='BMP280 altimeter Sensor';
EnMsg.MIXLY_ke_BMP280_T='temperature';
EnMsg.MIXLY_ke_BMP280_A='atmosphere';
EnMsg.MIXLY_ke_BMP280_H='height above sea level';

EnMsg.MIXLY_ke_SR04='SR04 Ultrasound Module';
EnMsg.MIXLY_ke_3231='DS3231 clock';

//RTC-DS3231/DS1307
EnMsg.MIXLY_ke_DS3231='DS3231';
EnMsg.MIXLY_ke_DS1307='DS1307';
EnMsg.MIXLY_ke_DS3231_GET_TIME='Get';
EnMsg.MIXLY_ke_DS3231_SET_TIME='SetTime';
EnMsg.MIXLY_ke_DS3231_SET_TIME2='Compiled date and time';
EnMsg.MIXLY_ke_YEAR='Year';
EnMsg.MIXLY_ke_MONTH='Month';
EnMsg.MIXLY_ke_DAY='Day';
EnMsg.MIXLY_ke_HOUR='Hour';
EnMsg.MIXLY_ke_MINUTE='Minute';
EnMsg.MIXLY_ke_SECOND='Second';
EnMsg.MIXLY_ke_DAYOFWEEK='DayOfWeek';

EnMsg.MIXLY_ke_ADXL345='Acceleration Sensor';
EnMsg.MIXLY_ADXL345_X='X-axis acceleration'; ///
EnMsg.MIXLY_ADXL345_Y='Y-axis acceleration'; ///
EnMsg.MIXLY_ADXL345_Z='Z-axis acceleration'; ///
EnMsg.MIXLY_ADXL345_XA='X-axis angle';  ///
EnMsg.MIXLY_ADXL345_YA='Y-axis angle';  ///
EnMsg.MLX90614_TYPE = 'Infrared temperature sensor';
EnMsg.MLX90614_TARGET_OBJECT_TEMP = 'Target object temperature';
EnMsg.MLX90614_AMBIENT_TEMP = 'Ambient temperature';
EnMsg.TCS34725_Get_RGB='TCS347255 Sensor Get Color';
EnMsg.ke_Gesture_APDS='Gesture sensor';



EnMsg.MIXLY_DF_LCD = 'LCD';
EnMsg.MIXLY_LCD_PRINT1 = 'print line1';
EnMsg.MIXLY_LCD_PRINT2 = 'print line2';
EnMsg.MIXLY_LCD_PRINT3 = 'print line3';
EnMsg.MIXLY_LCD_PRINT4 = 'print line4';
EnMsg.MIXLY_LCD_ROW = 'row';
EnMsg.MIXLY_LCD_COLUMN = 'column';
EnMsg.MIXLY_LCD_PRINT = 'print';
EnMsg.MIXLY_LCD_SETCOLOR = 'setColor';
EnMsg.MIXLY_LCD_STAT_CURSOR = 'Cursor';
EnMsg.MIXLY_LCD_STAT_NOCURSOR = 'noCursor';
EnMsg.MIXLY_LCD_STAT_BLINK = 'Blink';
EnMsg.MIXLY_LCD_STAT_NOBLINK = 'noBlink';
EnMsg.MIXLY_LCD_STAT_CLEAR = 'Clear';
EnMsg.MIXLY_LCD_NOBACKLIGHT = 'NoBackLight';
EnMsg.MIXLY_LCD_BACKLIGHT = 'BackLight';
EnMsg.MIXLY_NUMBER = 'number';
EnMsg.MIXLY_ke_MATRIX='8*8 dot matrix';

EnMsg.MIXLY_LCD128_SETUP='128X32 LCD start';  ////////////////
EnMsg.MIXLY_LCD128_CURSOR='128X32 LCD set cursor';
EnMsg.MIXLY_DISPLAY_STRING='128X32 LCD display String';
EnMsg.MIXLY_ke_LCD128_PIXLE='128X32 LCD draw pixel';
EnMsg.MIXLY_ke_LCD128_D='128X32 LCD delete pixel';
EnMsg.MIXLY_LCD128_CLEAR='128X32 LCD Clear';



EnMsg.MIXLY_ke_TM1637='4 digit 8-segment LED digital';
EnMsg.MIXLY_ke_TM1637_C='digit';
EnMsg.MIXLY_ke_TM1637_P='display position';
EnMsg.MIXLY_ke_TM1637_Fill='add 0?';
EnMsg.MIXLY_ke_TM1637_light='brightness 0~7';
EnMsg.MIXLY_ke_TM1637_xy='show or hide';
EnMsg.MIXLY_ke_TM1637_left='left';
EnMsg.MIXLY_ke_TM1637_maohao='colon';
EnMsg.MIXLY_ke_TM1637_right='right';
EnMsg.MIXLY_ke_value='value';

//4 Display
EnMsg.MIXLY_ke_4DIGITDISPLAY='DigitDisplay';
EnMsg.MIXLY_ke_4DIGITDISPLAY_DISPLAYSTRING='displayString';
EnMsg.MIXLY_ke_4DIGITDISPLAY_DISPLAYNUMBER='displayNumber';
EnMsg.MIXLY_ke_4DIGITDISPLAY_NOMBER1='No.';
EnMsg.MIXLY_ke_4DIGITDISPLAY_NOMBER2='';
EnMsg.MIXLY_ke_4DIGITDISPLAY_DOT='Dot';
EnMsg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS='Brightness';
EnMsg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS_RANGE='(1~8)';
EnMsg.MIXLY_ke_4DIGITDISPLAY_TIME_HOUR='Hour';
EnMsg.MIXLY_ke_4DIGITDISPLAY_TIME_MINUTE='Minute';
EnMsg.MIXLY_ke_4DIGITDISPLAY_TIME_SECOND='Second';
//4 Display time
EnMsg.MIXLY_ke_TIME_SEC_ON ='on';
EnMsg.MIXLY_ke_TIME_SEC_BLINK ='blink';
EnMsg.MIXLY_ke_TIME_SEC_OFF='off';


EnMsg.MIXLY_ke_IR_E='Infrared Transmitter Module';
EnMsg.MIXLY_ke_IR_R='Infrared Receiver Module';
EnMsg.MIXLY_ke_W5100='W5100 Ethernet Module';
EnMsg.MIXLY_rc522_iic_init='RFID RC522_I2C Init';
EnMsg.MIXLY_rc522_iic_read='RFID RC522_I2C Read';
EnMsg.MIXLY_ke_BLUETOOTH='Bluetooth';
EnMsg.MIXLY_ke_read='Received signal';


//EnMsg.MIXLY_ke_kzsc = 'Control output';

EnMsg.MIXLY_ke_Count='count';

EnMsg.MIXLY_ke_YEAR = 'year';
EnMsg.MIXLY_ke_MONTH = 'month';
EnMsg.MIXLY_ke_DAY = 'day';
EnMsg.MIXLY_ke_HOUR = 'hour';
EnMsg.MIXLY_ke_MINUTE = 'minute';
EnMsg.MIXLY_ke_SECOND = 'second';
EnMsg.MIXLY_ke_WEEK = 'week';

EnMsg.MIXLY_ke_angle = 'angle';

EnMsg.kids_Ode_to_joy = "Ode_to_joy";
EnMsg.kids_birthday = "birthday";

EnMsg.kids_tone = "tone";
EnMsg.kids_beat = "beat";
EnMsg.kids_play_tone = "play_tone";
EnMsg.kids_notone = "no_tone";

EnMsg.kids_ADkey = "5 key module";

const EnCatgories = {};

/***/ }),

/***/ "./src/language/zh-hans.js":
/*!*********************************!*\
  !*** ./src/language/zh-hans.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZhHansCatgories: () => (/* binding */ ZhHansCatgories),
/* harmony export */   ZhHansMsg: () => (/* binding */ ZhHansMsg)
/* harmony export */ });
const ZhHansMsg = {};

ZhHansMsg.ke_LED = 'LED灯';
ZhHansMsg.MIXLY_ANALOGWRITE_PIN = '模拟输出 管脚 #';
ZhHansMsg.MIXLY_CHANNEL = '通道';

ZhHansMsg.MIXLY_VALUE2 = '赋值为';
ZhHansMsg.Kids_iic = '管脚：SDA# A4, SCL# A5';
ZhHansMsg.Kids_rot = '按钮管脚';
ZhHansMsg.Kids_rot_count = '计数变量';
ZhHansMsg.Kids_bits = '字符串';
ZhHansMsg.Kids_pin = '管脚';

ZhHansMsg.Kids_iic_pin = '管脚SDA:A4,SCL:A5';
ZhHansMsg.Kids_lcd_p = '液晶显示屏';
ZhHansMsg.Kids_shilihua = '实例化名称';
ZhHansMsg.Kids_size = '字体大小';
ZhHansMsg.Kids_printcount = '显示数字';

ZhHansMsg.ke_string = '显示字符';

ZhHansMsg.Kids_lcd_left = '液晶显示屏往左滚动';
ZhHansMsg.Kids_lcd_right = '液晶显示屏往右滚动';

ZhHansMsg.ke_TM1637 = '4位8段数码管';
ZhHansMsg.ke_ws = '位数';
ZhHansMsg.ke_begin = '显示的位置';
ZhHansMsg.ke_fill0 = '是否补充0';
ZhHansMsg.ke_light = '亮度0~7';
ZhHansMsg.ke_XY = '显或隐';
ZhHansMsg.ke_L = '左边';
ZhHansMsg.ke_R = '右边';
ZhHansMsg.ke_MH = '冒号';
ZhHansMsg.ke_value = '数值';

ZhHansMsg.MIXLY_WIFI_INIT = 'WIFI 初始化';
ZhHansMsg.MIXLY_WIFI_NAME = '名称';
ZhHansMsg.MIXLY_WIFI_PASSWORD = '密码';
ZhHansMsg.MIXLY_WIFI_READ_IP = 'WIFI 读取IP';
ZhHansMsg.MIXLY_WIFI_CLIENT_INIT = 'WIFI 初始化客户端';
ZhHansMsg.MIXLY_WIFI_CLIENT_COMMECTED = 'WIFI 没有连接客户端';
ZhHansMsg.MIXLY_WIFI_READ_DATA = 'WIFI 读取数据';
ZhHansMsg.MIXLY_WIFI_SEND_DATA = 'WIFI 发送数据';
ZhHansMsg.ke_oled_init = 'OLED初始化';
ZhHansMsg.ke_oled_piexl = 'OLED_画点的坐标';
ZhHansMsg.ke_oled_x = '列';
ZhHansMsg.ke_oled_y = '行';
ZhHansMsg.ke_oled_cong = '从';
ZhHansMsg.ke_oled_dao = '到';
ZhHansMsg.ke_oled_kai = '起始位';
ZhHansMsg.ke_oled_kuan = '宽';
ZhHansMsg.ke_oled_chang = '长';
ZhHansMsg.ke_oled_angle1 = '角度1为';
ZhHansMsg.ke_oled_angle2 = '角度2为';
ZhHansMsg.ke_oled_angle3 = '角度3为';

ZhHansMsg.ke_oled_line = 'OLED_画两点连线';
ZhHansMsg.ke_oled_rect = 'OLED_画空心矩形';
ZhHansMsg.ke_oled_fil_lrect = 'OLED_画实心矩形';
ZhHansMsg.ke_oled_r_rect = 'OLED_画倒圆角的空心矩形';
ZhHansMsg.ke_oled_r_fill_rect = 'OLED_画倒圆角的实心矩形';
ZhHansMsg.ke_oled_circle = 'OLED_画空心圆形  圆心坐标';
ZhHansMsg.ke_oled_circle_radius = '圆半径';
ZhHansMsg.ke_oled_radius = '圆角半径';
ZhHansMsg.ke_oled_fill_circle = 'OLED_画实心的圆形  圆心坐标';
ZhHansMsg.ke_oled_triangle = 'OLED_画空心三角形';
ZhHansMsg.ke_oled_fill_triangle = 'OLED_画实心三角形';
ZhHansMsg.ke_oled_string1 = 'OLED_显示字符串或数字';
ZhHansMsg.ke_oled_weizhi = '显示的位置';
ZhHansMsg.ke_oled_print = '显示';
ZhHansMsg.ke_oled_clear = 'OLED_清屏';




ZhHansMsg.Kids_ON = '高';
ZhHansMsg.Kids_OFF = '低';
ZhHansMsg.Kids_anologWrite = 'PWM输出';



ZhHansMsg.MIXLY_ke_BUZZER1 = '有源蜂鸣器';
ZhHansMsg.MIXLY_ke_BUZZER2 = '无源蜂鸣器';
ZhHansMsg.MIXLY_ke_RELAY = '继电器';
ZhHansMsg.MIXLY_ke_v_motor = '震动马达';
ZhHansMsg.MIXLY_ke_SPEAKER = '扬声器';
ZhHansMsg.MIXLY_NOTONE_PIN = '结束声音 管脚#';
ZhHansMsg.MIXLY_ke_MOTOR = '小风扇';
ZhHansMsg.MIXLY_MOTOR_ANALOG = '模拟输出值';

ZhHansMsg.MIXLY_ke_MOTOR01 = '减速电机';
ZhHansMsg.MIXLY_ke_SERVO = '舵机';
ZhHansMsg.MIXLY_ke_TB6612 = 'TB6612电机驱动';
ZhHansMsg.MIXLY_H = '正';
ZhHansMsg.MIXLY_L = '反';


ZhHansMsg.MIXLY_RGB_INIT = 'RGB灯初始化';
ZhHansMsg.MIXLY_RGB_SET_BRIGHTNESS = 'RGB灯设置亮度';
ZhHansMsg.MIXLY_RGB_SET_COLOR = 'RGB灯设置颜色';
ZhHansMsg.MIXLY_RGB_SHOW = 'RGB灯设置生效';
ZhHansMsg.MIXLY_RGB = 'RGB灯';
ZhHansMsg.MIXLY_CHASE = '跑马灯';
ZhHansMsg.MIXLY_RAINBOW = '彩虹';
ZhHansMsg.MIXLY_RGB_NUM = '灯号';
ZhHansMsg.MIXLY_RGB_COUNT = '灯数';
ZhHansMsg.MIXLY_RGB_R = 'R值';
ZhHansMsg.MIXLY_RGB_G = 'G值';
ZhHansMsg.MIXLY_RGB_B = 'B值';
ZhHansMsg.MIXLY_RGBdisplay_rgb_rainbow1 = '七彩变换切换时间';
ZhHansMsg.MIXLY_RGBdisplay_rgb_rainbow2 = '七彩循环切换时间';
ZhHansMsg.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_1 = '普通';
ZhHansMsg.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_2 = '渐变';
ZhHansMsg.MIXLY_RGB_display_rgb_rainbow3 = '彩虹值';

ZhHansMsg.MIXLY_ke_IR_G = '人体红外热传感器';
ZhHansMsg.MIXLY_ke_FLAME = '火焰传感器';
ZhHansMsg.MIXLY_ke_HALL = '霍尔传感器';
ZhHansMsg.MIXLY_ke_CRASH = '碰撞传感器';
ZhHansMsg.MIXLY_ke_BUTTON = '按键';
ZhHansMsg.MIXLY_ke_sl_BUTTON = '自锁按键';
ZhHansMsg.MIXLY_ke_TUOCH = '触摸传感器';
ZhHansMsg.MIXLY_ke_KNOCK = '敲击传感器';
ZhHansMsg.MIXLY_ke_TILT = '倾斜传感器';
ZhHansMsg.MIXLY_ke_SHAKE = '震动传感器';
ZhHansMsg.MIXLY_ke_REED_S = '干簧管传感器';
ZhHansMsg.MIXLY_ke_TRACK = '循迹传感器';
ZhHansMsg.MIXLY_ke_AVOID = '避障传感器';
ZhHansMsg.MIXLY_ke_LIGHT_B = '光折断传感器';
ZhHansMsg.MIXLY_ke_ROT = '旋转编码器';

ZhHansMsg.MIXLY_ke_ANALOG_T = '模拟温度传感器';
ZhHansMsg.MIXLY_ke_SOUND = '声音传感器';
ZhHansMsg.MIXLY_ke_LIGHT = '光敏传感器';
ZhHansMsg.MIXLY_ke_UV = '紫外线传感器';
ZhHansMsg.MIXLY_ke_Piezo = '陶瓷压电传感器';
ZhHansMsg.MIXLY_ke_WATER = '水位传感器';
ZhHansMsg.MIXLY_ke_SOIL = '土壤传感器';
ZhHansMsg.MIXLY_ke_POTENTIOMETER = '旋转电位器';
ZhHansMsg.MIXLY_ke_LM35 = 'LM35温度传感器';
ZhHansMsg.MIXLY_ke_SLIDE_POTENTIOMETER = '滑动电位器';
ZhHansMsg.MIXLY_ke_TEMT6000 = 'TEMT6000环境光';
ZhHansMsg.MIXLY_ke_STEAM = '水蒸气传感器';
ZhHansMsg.MIXLY_ke_FILM_P = '薄膜压力传感器';
ZhHansMsg.MIXLY_ke_JOYSTICK = '遥杆传感器';
ZhHansMsg.MIXLY_ke_JOYSTICK_btn = '遥杆按钮';
ZhHansMsg.MIXLY_ke_SMOKE_DATA = '烟雾传感器 数字';
ZhHansMsg.MIXLY_ke_SMOKE_ANALOG = '烟雾传感器 模拟';
ZhHansMsg.MIXLY_ke_ALCOHOL = '酒精传感器';
ZhHansMsg.MIXLY_ke_Voltage = '电压传感器';
ZhHansMsg.MIXLY_ke_Current = '电流传感器';


ZhHansMsg.MIXLY_ke_18B20 = '18B20温度传感器';
ZhHansMsg.MIXLY_ke_18B20_R = '获取温度';
ZhHansMsg.MIXLY_ke_DHT11 = '温湿度传感器';
ZhHansMsg.MIXLY_DHT11_H = '获取湿度';    /////////////
ZhHansMsg.MIXLY_DHT11_T = '获取温度';     ////////////
ZhHansMsg.MIXLY_ke_BMP180 = 'BMP180高度计传感器';

ZhHansMsg.MIXLY_ke_BMP180_T = '温度';
ZhHansMsg.MIXLY_ke_BMP180_A = '大气压';
ZhHansMsg.MIXLY_ke_BMP180_H = '海拔高度';

ZhHansMsg.MIXLY_ke_BMP280 = 'BMP280高度计传感器';
ZhHansMsg.MIXLY_ke_BMP280_T = '温度';
ZhHansMsg.MIXLY_ke_BMP280_A = '大气压';
ZhHansMsg.MIXLY_ke_BMP280_H = '海拔高度';

ZhHansMsg.MIXLY_ke_SR04 = 'SR04超声波模块';
ZhHansMsg.MIXLY_ke_3231 = 'DS3231时钟';

//RTC-DS3231/DS1307
ZhHansMsg.MIXLY_ke_DS3231 = 'DS3231';
ZhHansMsg.MIXLY_ke_DS1307 = 'DS1307';
ZhHansMsg.MIXLY_ke_DS3231_GET_TIME = '获取';
ZhHansMsg.MIXLY_ke_DS3231_SET_TIME = '设置时间';
ZhHansMsg.MIXLY_ke_DS3231_SET_TIME2 = '编译的日期和时间';
ZhHansMsg.MIXLY_ke_YEAR = '年';
ZhHansMsg.MIXLY_ke_MONTH = '月';
ZhHansMsg.MIXLY_ke_DAY = '日';
ZhHansMsg.MIXLY_ke_HOUR = '时';
ZhHansMsg.MIXLY_ke_MINUTE = '分';
ZhHansMsg.MIXLY_ke_SECOND = '秒';
ZhHansMsg.MIXLY_ke_DAYOFWEEK = '星期';

ZhHansMsg.MIXLY_Ke_ADXL345 = '加速度传感器';
ZhHansMsg.MIXLY_ADXL345_X = 'X轴加速度'; ///
ZhHansMsg.MIXLY_ADXL345_Y = 'Y轴加速度'; ///
ZhHansMsg.MIXLY_ADXL345_Z = 'Z轴加速度'; ///
ZhHansMsg.MIXLY_ADXL345_XA = 'X轴角度';  ///
ZhHansMsg.MIXLY_ADXL345_YA = 'Y轴角度';  ///

ZhHansMsg.MLX90614_TYPE = '红外测温传感器';
ZhHansMsg.MLX90614_TARGET_OBJECT_TEMP = '目标物体温度';
ZhHansMsg.MLX90614_AMBIENT_TEMP = '周围环境温度';
ZhHansMsg.TCS34725_Get_RGB = 'TCS34725颜色传感器 获取颜色';
ZhHansMsg.ke_Gesture_APDS = '手势传感器获取手势';


ZhHansMsg.MIXLY_ke_YEAR = '年';
ZhHansMsg.MIXLY_ke_MONTH = '月';
ZhHansMsg.MIXLY_ke_DAY = '天';
ZhHansMsg.MIXLY_ke_TEXT = '周';
ZhHansMsg.MIXLY_ke_HOUR = '时';
ZhHansMsg.MIXLY_ke_MINUTE = '分';
ZhHansMsg.MIXLY_ke_SECOND = '秒';
ZhHansMsg.MIXLY_ke_GET = '获取时间';


ZhHansMsg.MIXLY_DF_LCD = '液晶显示屏';
ZhHansMsg.MIXLY_LCD_PRINT1 = '打印第1行';
ZhHansMsg.MIXLY_LCD_PRINT2 = '打印第2行';
ZhHansMsg.MIXLY_LCD_PRINT3 = '打印第3行';
ZhHansMsg.MIXLY_LCD_PRINT4 = '打印第4行';
ZhHansMsg.MIXLY_LCD_ROW = '在第';
ZhHansMsg.MIXLY_LCD_COLUMN = '行第';
ZhHansMsg.MIXLY_LCD_PRINT = '列打印';
ZhHansMsg.MIXLY_LCD_SETCOLOR = '设置颜色';
ZhHansMsg.MIXLY_LCD_STAT_CURSOR = '有光标';
ZhHansMsg.MIXLY_LCD_STAT_NOCURSOR = '无光标';
ZhHansMsg.MIXLY_LCD_STAT_BLINK = '闪烁';
ZhHansMsg.MIXLY_LCD_STAT_NOBLINK = '不闪烁';
ZhHansMsg.MIXLY_LCD_STAT_CLEAR = '清屏';
ZhHansMsg.MIXLY_LCD_NOBACKLIGHT = '关闭背光';
ZhHansMsg.MIXLY_LCD_BACKLIGHT = '打开背光';
ZhHansMsg.MIXLY_NUMBER = '数字';

ZhHansMsg.MIXLY_LCD128_SETUP = '128X32 LCD 初始化';  ////////////////
ZhHansMsg.MIXLY_LCD128_CURSOR = '128X32 LCD 设置位置';
ZhHansMsg.MIXLY_DISPLAY_STRING = '128X32 LCD 显示字符';
ZhHansMsg.MIXLY_ke_LCD128_PIXLE = '128X32 LCD 画点坐标';
ZhHansMsg.MIXLY_ke_LCD128_D = '128X32 LCD 删除点坐标';
ZhHansMsg.MIXLY_LCD128_CLEAR = '128X32 LCD 清屏';


ZhHansMsg.MIXLY_ke_2004LCD = 'IIC2004LCD';
ZhHansMsg.MIXLY_ke_print1 = '打印第一行';
ZhHansMsg.MIXLY_ke_print2 = '打印第二行';
ZhHansMsg.MIXLY_ke_print3 = '打印第三行';
ZhHansMsg.MIXLY_ke_print4 = '打印第四行';


ZhHansMsg.MIXLY_ke_MATRIX = '8*8点阵';
ZhHansMsg.MIXLY_ke_TM1637 = '4位8段数码管';
ZhHansMsg.MIXLY_ke_TM1637_C = '位数';
ZhHansMsg.MIXLY_ke_TM1637_P = '在第几位开始显示';
ZhHansMsg.MIXLY_ke_TM1637_Fill = '是否填充0';
ZhHansMsg.MIXLY_ke_TM1637_light = '亮度0~7';
ZhHansMsg.MIXLY_ke_TM1637_xy = '显或隐';
ZhHansMsg.MIXLY_ke_TM1637_left = '左边';
ZhHansMsg.MIXLY_ke_TM1637_maohao = '冒号';
ZhHansMsg.MIXLY_ke_TM1637_right = '右边';
ZhHansMsg.MIXLY_ke_value = '数值';

//4 Display
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY = '四位数码管';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_DISPLAYSTRING = '显示字符串';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_DISPLAYNUMBER = '显示数字';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_NOMBER1 = '第';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_NOMBER2 = '个';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_DOT = '小数点';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS = '亮度';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS_RANGE = '(1~8)';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_TIME_HOUR = '时';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_TIME_MINUTE = '分';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_TIME_SECOND = '秒';
//4 Display time
ZhHansMsg.MIXLY_ke_TIME_SEC_ON = '亮';
ZhHansMsg.MIXLY_ke_TIME_SEC_BLINK = '闪';
ZhHansMsg.MIXLY_ke_TIME_SEC_OFF = '灭';

ZhHansMsg.MIXLY_ke_IR_E = '红外发射模块';
ZhHansMsg.MIXLY_ke_IR_R = '红外接收模块';
ZhHansMsg.MIXLY_ke_W5100 = 'W5100以太网模块';
ZhHansMsg.MIXLY_rc522_iic_init = 'RFID RC522_I2C 初始化';
ZhHansMsg.MIXLY_rc522_iic_read = 'RFID RC522_I2C 读取值';
ZhHansMsg.MIXLY_ke_BLUETOOTH = '蓝牙';
ZhHansMsg.MIXLY_ke_read = '接收到信号';


//ZhHansMsg.MIXLY_ke_kzsc = '控制输出';

ZhHansMsg.MIXLY_ke_Count = '灯号';

ZhHansMsg.MIXLY_ke_YEAR = '年';
ZhHansMsg.MIXLY_ke_MONTH = '月';
ZhHansMsg.MIXLY_ke_DAY = '日';
ZhHansMsg.MIXLY_ke_HOUR = '时';
ZhHansMsg.MIXLY_ke_MINUTE = '分';
ZhHansMsg.MIXLY_ke_SECOND = '秒';
ZhHansMsg.MIXLY_ke_WEEK = '周';

ZhHansMsg.MIXLY_ke_angle = '角度';

ZhHansMsg.kids_Ode_to_joy = "圣诞歌";
ZhHansMsg.kids_birthday = "生日快乐";

ZhHansMsg.kids_tone = "音调";
ZhHansMsg.kids_beat = "节拍";
ZhHansMsg.kids_play_tone = "播放乐曲";
ZhHansMsg.kids_notone = "关闭蜂鸣器";

ZhHansMsg.kids_ADkey = "5位按键模块";

const ZhHansCatgories = {};

/***/ }),

/***/ "./src/language/zh-hant.js":
/*!*********************************!*\
  !*** ./src/language/zh-hant.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZhHantCatgories: () => (/* binding */ ZhHantCatgories),
/* harmony export */   ZhHantMsg: () => (/* binding */ ZhHantMsg)
/* harmony export */ });
const ZhHantMsg = {};

ZhHantMsg.ke_LED = 'LED灯';
ZhHantMsg.MIXLY_ANALOGWRITE_PIN = '類比輸出裝置  @腳位';
ZhHantMsg.MIXLY_CHANNEL = '通道';
ZhHantMsg.MIXLY_VALUE2 = '賦值為';
ZhHantMsg.Kids_ON = '高';
ZhHantMsg.Kids_OFF = '低';
ZhHantMsg.Kids_anologWrite = 'PWM模拟输出';

ZhHantMsg.Kids_iic = '管脚：SDA# A4, SCL# A5';
ZhHantMsg.Kids_rot = '按钮管脚';
ZhHantMsg.Kids_rot_count = '计数变量';

ZhHantMsg.Kids_bits = '字符串';
ZhHantMsg.Kids_pin = '管脚';

ZhHantMsg.Kids_iic_pin = '管脚SDA:A4,SCL:A5';
ZhHantMsg.Kids_lcd_p = '液晶显示屏';
ZhHantMsg.Kids_shilihua = '实例化名称';
ZhHantMsg.Kids_size = '字体大小';
ZhHantMsg.Kids_printcount = '显示数字';
ZhHantMsg.ke_string = '显示字符';

ZhHantMsg.Kids_lcd_left = '液晶显示屏往左滚动';
ZhHantMsg.Kids_lcd_right = '液晶显示屏往右滚动';

ZhHantMsg.ke_TM1637 = '4位8段数码管';
ZhHantMsg.ke_ws = '位数';
ZhHantMsg.ke_begin = '显示的位置';
ZhHantMsg.ke_fill0 = '是否补充0';
ZhHantMsg.ke_light = '亮度0~7';
ZhHantMsg.ke_XY = '显或隐';
ZhHantMsg.ke_L = '左边';
ZhHantMsg.ke_R = '右边';
ZhHantMsg.ke_MH = '冒号';
ZhHantMsg.ke_value = '数值';

ZhHantMsg.MIXLY_WIFI_INIT = 'WIFI 初始化';
ZhHantMsg.MIXLY_WIFI_NAME = '名稱';
ZhHantMsg.MIXLY_WIFI_PASSWORD = '密碼';
ZhHantMsg.MIXLY_WIFI_READ_IP = 'WIFI 讀取IP';
ZhHantMsg.MIXLY_WIFI_CLIENT_INIT = 'WIFI 初始化客戶端';
ZhHantMsg.MIXLY_WIFI_CLIENT_CONNECTED = 'WIFI 沒有連接客戶端'; 
ZhHantMsg.MIXLY_WIFI_READ_DATA = 'WIFI 讀取數據';
ZhHantMsg.MIXLY_WIFI_SEND_DATA = 'WIFI 發送數據';

ZhHantMsg.ke_oled_init = 'OLED初始化';
ZhHantMsg.ke_oled_piexl = 'OLED_画点的坐标';
ZhHantMsg.ke_oled_x = '列';
ZhHantMsg.ke_oled_y = '行';
ZhHantMsg.ke_oled_cong = '从';
ZhHantMsg.ke_oled_dao = '到';
ZhHantMsg.ke_oled_kai = '起始位';
ZhHantMsg.ke_oled_kuan = '宽';
ZhHantMsg.ke_oled_chang = '长';
ZhHantMsg.ke_oled_angle1 = '角度1为';
ZhHantMsg.ke_oled_angle2 = '角度2为';
ZhHantMsg.ke_oled_angle3 = '角度3为';

ZhHantMsg.ke_oled_line = 'OLED_画两点连线';
ZhHantMsg.ke_oled_rect = 'OLED_画空心矩形';
ZhHantMsg.ke_oled_fil_lrect = 'OLED_画实心矩形';
ZhHantMsg.ke_oled_r_rect = 'OLED_画倒圆角的空心矩形';
ZhHantMsg.ke_oled_r_fill_rect = 'OLED_画倒圆角的实心矩形';
ZhHantMsg.ke_oled_circle = 'OLED_画空心圆形  圆心坐标';
ZhHantMsg.ke_oled_circle_radius = '圆半径';
ZhHantMsg.ke_oled_radius = '圆角半径';
ZhHantMsg.ke_oled_fill_circle = 'OLED_画实心的圆形  圆心坐标';
ZhHantMsg.ke_oled_triangle = 'OLED_画空心三角形';
ZhHantMsg.ke_oled_fill_triangle = 'OLED_画实心三角形';
ZhHantMsg.ke_oled_string1 = 'OLED_显示字符串或数字';
ZhHantMsg.ke_oled_weizhi = '显示的位置';
ZhHantMsg.ke_oled_print = '显示';
ZhHantMsg.ke_oled_clear = 'OLED_清屏';


ZhHantMsg.MIXLY_ke_LED1 = '食人魚LED';
ZhHantMsg.MIXLY_ke_LED2 = '紅色食人魚LED';
ZhHantMsg.MIXLY_ke_LED3 = '綠色食人魚LED';
ZhHantMsg.MIXLY_ke_LED4 = '黃色食人魚LED';
ZhHantMsg.MIXLY_ke_LED5 = '藍色食人魚LED';
ZhHantMsg.MIXLY_ke_LED01 = '草帽LED';
ZhHantMsg.MIXLY_ke_LED02 = '紅色草帽LED';
ZhHantMsg.MIXLY_ke_LED03 = '綠色草帽LED';
ZhHantMsg.MIXLY_ke_LED04 = '黃色草帽LED';
ZhHantMsg.MIXLY_ke_LED05 = '藍色草帽LED';
ZhHantMsg.MIXLY_ke_QCD = '七彩led灯';
ZhHantMsg.MIXLY_ke_RGB_A = '共阳RGB';
ZhHantMsg.MIXLY_ke_RGB_B = '共阴RGB';

ZhHantMsg.MIXLY_ke_BUZZER1 = '有源蜂鳴器';
ZhHantMsg.MIXLY_ke_BUZZER2 = '無源蜂鳴器';
ZhHantMsg.MIXLY_ke_RELAY = '繼電器';
ZhHantMsg.MIXLY_ke_v_motor = '震动马达';
ZhHantMsg.MIXLY_ke_SPEAKER = '扬声器';
ZhHantMsg.MIXLY_NOTONE_PIN = '结束声音 管脚#';
ZhHantMsg.MIXLY_ke_MOTOR = '风扇';
ZhHantMsg.MIXLY_MOTOR_ANALOG = '模拟输出值';
ZhHantMsg.MIXLY_ke_MOTOR01 = '减速电机';
ZhHantMsg.MIXLY_ke_SERVO = '舵機';
ZhHantMsg.MIXLY_ke_TB6612 = 'TB6612电机驱动';
ZhHantMsg.MIXLY_H = '正';
ZhHantMsg.MIXLY_L = '反';


ZhHantMsg.MIXLY_RGB_INIT = 'RGB燈初始化';
ZhHantMsg.MIXLY_RGB_SET_BRIGHTNESS = 'RGB燈設置亮度';
ZhHantMsg.MIXLY_RGB_SET_COLOR = 'RGB燈設置顏色';
ZhHantMsg.MIXLY_RGB_SHOW = 'RGB燈設置生效';
ZhHantMsg.MIXLY_RGB = 'RGB燈';
ZhHantMsg.MIXLY_CHASE = '跑馬燈';
ZhHantMsg.MIXLY_RAINBOW = '彩虹';
ZhHantMsg.MIXLY_RGB_NUM = '燈號';
ZhHantMsg.MIXLY_RGB_COUNT = '燈數';
ZhHantMsg.MIXLY_RGB_R = 'R值';
ZhHantMsg.MIXLY_RGB_G = 'G值';
ZhHantMsg.MIXLY_RGB_B = 'B值';
ZhHantMsg.MIXLY_RGBdisplay_rgb_rainbow1 = '七彩變換切換時間';
ZhHantMsg.MIXLY_RGBdisplay_rgb_rainbow2 = '七彩迴圈切換時間';
ZhHantMsg.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_1 = '普通';
ZhHantMsg.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_2 = '漸變';
ZhHantMsg.MIXLY_RGB_display_rgb_rainbow3 = '彩虹值';

ZhHantMsg.MIXLY_ke_IR_G = '人體紅外熱傳感器';
ZhHantMsg.MIXLY_ke_FLAME = '火焰傳感器';
ZhHantMsg.MIXLY_ke_HALL = '霍爾傳感器';
ZhHantMsg.MIXLY_ke_CRASH = '碰撞傳感器';
ZhHantMsg.MIXLY_ke_BUTTON = '按鍵';
ZhHantMsg.MIXLY_ke_sl_BUTTON = '自锁按键';
ZhHantMsg.MIXLY_ke_TUOCH = '電容觸摸傳感器';
ZhHantMsg.MIXLY_ke_KNOCK = '敲擊傳感器';
ZhHantMsg.MIXLY_ke_TILT = '傾斜傳感器';
ZhHantMsg.MIXLY_ke_SHAKE = '振動傳感器';
ZhHantMsg.MIXLY_ke_REED_S = '幹簧管傳感器';
ZhHantMsg.MIXLY_ke_TRACK = '循跡傳感器';
ZhHantMsg.MIXLY_ke_AVOID = '避障傳感器';
ZhHantMsg.MIXLY_ke_LIGHT_B = '光折斷傳感器';
ZhHantMsg.MIXLY_ke_ROT = '旋转编码器';

ZhHantMsg.MIXLY_ke_ANALOG_T = '模擬溫度傳感器';
ZhHantMsg.MIXLY_ke_SOUND = '聲音傳感器';
ZhHantMsg.MIXLY_ke_LIGHT = '光敏傳感器';
ZhHantMsg.MIXLY_ke_UV = '紫外线传感器';
ZhHantMsg.MIXLY_ke_Piezo = '陶瓷压电传感器';
ZhHantMsg.MIXLY_ke_WATER = '水位傳感器';
ZhHantMsg.MIXLY_ke_SOIL = '土壤傳感器';
ZhHantMsg.MIXLY_ke_POTENTIOMETER = '旋转電位器';
ZhHantMsg.MIXLY_ke_LM35 = 'LM35溫度傳感器';
ZhHantMsg.MIXLY_ke_SLIDE_POTENTIOMETER = '滑動電位器';
ZhHantMsg.MIXLY_ke_TEMT6000 = 'TEMT6000環境光傳感器';
ZhHantMsg.MIXLY_ke_STEAM = '水蒸氣傳感器';
ZhHantMsg.MIXLY_ke_FILM_P = '薄膜壓力傳感器';
ZhHantMsg.MIXLY_ke_JOYSTICK = '遙桿傳感器';
ZhHantMsg.MIXLY_ke_JOYSTICK_btn = '遥杆按钮';

ZhHantMsg.MIXLY_ke_SMOKE_DATA = '煙霧傳感器 数字';
ZhHantMsg.MIXLY_ke_SMOKE_ANALOG = '煙霧傳感器 模拟';
ZhHantMsg.MIXLY_ke_ALCOHOL = '酒精傳感器';
ZhHantMsg.MIXLY_ke_Voltage = '电压传感器';
ZhHantMsg.MIXLY_ke_Current = '电流传感器';


ZhHantMsg.MIXLY_ke_18B20 = '18B20溫度傳感器';
ZhHantMsg.MIXLY_ke_18B20_R = '获取温度';
ZhHantMsg.MIXLY_ke_DHT11 = '溫濕度傳感器';
ZhHantMsg.MIXLY_DHT11_H = '获取湿度';    /////////////
ZhHantMsg.MIXLY_DHT11_T = '获取温度';     ////////////
ZhHantMsg.MIXLY_ke_BMP180 = 'BMP180高度計傳感器';
ZhHantMsg.MIXLY_ke_BMP180_T = '温度';
ZhHantMsg.MIXLY_ke_BMP180_A = '大气压';
ZhHantMsg.MIXLY_ke_BMP180_H = '海拔高度';

ZhHantMsg.MIXLY_ke_BMP280 = 'BMP280高度計傳感器';
ZhHantMsg.MIXLY_ke_BMP280_T = '温度';
ZhHantMsg.MIXLY_ke_BMP280_A = '大气压';
ZhHantMsg.MIXLY_ke_BMP280_H = '海拔高度';

ZhHantMsg.MIXLY_ke_SR04 = 'SR04超聲波模塊';
ZhHantMsg.MIXLY_ke_3231 = '3231時鐘';

//RTC-DS3231/DS1307
ZhHantMsg.MIXLY_ke_DS3231 = 'DS3231';
ZhHantMsg.MIXLY_ke_DS1307 = 'DS1307';
ZhHantMsg.MIXLY_ke_DS3231_GET_TIME = '獲取';
ZhHantMsg.MIXLY_ke_DS3231_SET_TIME = '設置時間';
ZhHantMsg.MIXLY_ke_DS3231_SET_TIME2 = '編譯的日期與時間';
ZhHantMsg.MIXLY_ke_YEAR = '年';
ZhHantMsg.MIXLY_ke_MONTH = '月';
ZhHantMsg.MIXLY_ke_DAY = '日';
ZhHantMsg.MIXLY_ke_HOUR = '時';
ZhHantMsg.MIXLY_ke_MINUTE = '分';
ZhHantMsg.MIXLY_ke_SECOND = '秒';
ZhHantMsg.MIXLY_ke_DAYOFWEEK = '星期';

ZhHantMsg.MIXLY_ke_ADXL345 = '加速度傳感器';
ZhHantMsg.MIXLY_ADXL345_X = 'X轴加速度'; ///
ZhHantMsg.MIXLY_ADXL345_Y = 'Y轴加速度'; ///
ZhHantMsg.MIXLY_ADXL345_Z = 'Z轴加速度'; ///
ZhHantMsg.MIXLY_ADXL345_XA = 'X轴角度';  ///
ZhHantMsg.MIXLY_ADXL345_YA = 'Y轴角度';  ///
ZhHantMsg.MLX90614_TYPE = '紅外測溫傳感器';
ZhHantMsg.MLX90614_TARGET_OBJECT_TEMP = '目標物體溫度';
ZhHantMsg.MLX90614_AMBIENT_TEMP = '周圍環境溫度';
ZhHantMsg.TCS34725_Get_RGB = 'TCS34725顏色感測器 獲取顏色';
ZhHantMsg.ke_Gesture_APDS = '手势传感器获取手势';


ZhHantMsg.MIXLY_DF_LCD = 'LCD 顯示幕';
ZhHantMsg.MIXLY_LCD_PRINT1 = '列印第1列(row)';
ZhHantMsg.MIXLY_LCD_PRINT2 = '列印第2列(row)';
ZhHantMsg.MIXLY_LCD_PRINT3 = '列印第3列(row)';
ZhHantMsg.MIXLY_LCD_PRINT4 = '列印第4列(row)';
ZhHantMsg.MIXLY_LCD_ROW = '列(row)在第';
ZhHantMsg.MIXLY_LCD_COLUMN = '行(column)在第';
ZhHantMsg.MIXLY_LCD_PRINT = '列列印';
ZhHantMsg.MIXLY_LCD_SETCOLOR = '設置顏色';
ZhHantMsg.MIXLY_LCD_STAT_CURSOR = '有游標';
ZhHantMsg.MIXLY_LCD_STAT_NOCURSOR = '無游標';
ZhHantMsg.MIXLY_LCD_STAT_BLINK = '閃爍';
ZhHantMsg.MIXLY_LCD_STAT_NOBLINK = '不閃爍';
ZhHantMsg.MIXLY_LCD_STAT_CLEAR = '清屏';
ZhHantMsg.MIXLY_LCD_NOBACKLIGHT = '關閉背光';
ZhHantMsg.MIXLY_LCD_BACKLIGHT = '打開背光';
ZhHantMsg.MIXLY_NUMBER = '數字';
ZhHantMsg.MIXLY_ke_MATRIX = '8*8點陣';

ZhHantMsg.MIXLY_LCD128_SETUP = '128X32 LCD 初始化';  ////////////////
ZhHantMsg.MIXLY_LCD128_CURSOR = '128X32 LCD 设置位置';
ZhHantMsg.MIXLY_DISPLAY_STRING = '128X32 LCD 显示字符';
ZhHantMsg.MIXLY_ke_LCD128_PIXLE = '128X32 LCD 画点坐标';
ZhHantMsg.MIXLY_ke_LCD128_D = '128X32 LCD 删除点坐标';
ZhHantMsg.MIXLY_LCD128_CLEAR = '128X32 LCD 清屏';


ZhHantMsg.MIXLY_ke_TM1637 = '4位8段數碼管';
ZhHantMsg.MIXLY_ke_TM1637_C = '位数';
ZhHantMsg.MIXLY_ke_TM1637_P = '在第几位开始显示';
ZhHantMsg.MIXLY_ke_TM1637_Fill = '是否填充0';
ZhHantMsg.MIXLY_ke_TM1637_light = '亮度0~7';
ZhHantMsg.MIXLY_ke_TM1637_xy = '显或隐';
ZhHantMsg.MIXLY_ke_TM1637_left = '左边';
ZhHantMsg.MIXLY_ke_TM1637_maohao = '冒号';
ZhHantMsg.MIXLY_ke_TM1637_right = '右边';
ZhHantMsg.MIXLY_ke_value = '数值';

//4 Display
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY = '四位數碼管';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_DISPLAYSTRING = '顯示字符串';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_DISPLAYNUMBER = '顯示數字';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_NOMBER1 = '第';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_NOMBER2 = '個';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_DOT = '小數點';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS = '亮度';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS_RANGE = '(1~8)';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_TIME_HOUR = '時';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_TIME_MINUTE = '分';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_TIME_SECOND = '秒';
//4 Display time
ZhHantMsg.MIXLY_ke_TIME_SEC_ON = '亮';
ZhHantMsg.MIXLY_ke_TIME_SEC_BLINK = '閃';
ZhHantMsg.MIXLY_ke_TIME_SEC_OFF = '滅';

ZhHantMsg.MIXLY_ke_IR_E = '紅外發射模塊';
ZhHantMsg.MIXLY_ke_IR_R = '紅外接收模塊';
ZhHantMsg.MIXLY_ke_W5100 = 'W5100以太網模塊';
ZhHantMsg.MIXLY_rc522_iic_init = 'RFID RC522_I2C 初始化';
ZhHantMsg.MIXLY_rc522_iic_read = 'RFID RC522_I2C 读取值';
ZhHantMsg.MIXLY_ke_BLUETOOTH = '藍牙';
ZhHantMsg.MIXLY_ke_read = '接收到信号';

ZhHantMsg.MIXLY_ke_Count = '灯号';

ZhHantMsg.MIXLY_ke_YEAR = '年';
ZhHantMsg.MIXLY_ke_MONTH = '月';
ZhHantMsg.MIXLY_ke_DAY = '日';
ZhHantMsg.MIXLY_ke_HOUR = '时';
ZhHantMsg.MIXLY_ke_MINUTE = '分';
ZhHantMsg.MIXLY_ke_SECOND = '秒';
ZhHantMsg.MIXLY_ke_WEEK = '周';

ZhHantMsg.MIXLY_ke_angle = '角度';

ZhHantMsg.kids_Ode_to_joy = "圣诞歌";
ZhHantMsg.kids_birthday = "生日快乐";

ZhHantMsg.kids_tone = "音调";
ZhHantMsg.kids_beat = "节拍";
ZhHantMsg.kids_play_tone = "播放乐曲";
ZhHantMsg.kids_notone = "关闭蜂鸣器";

ZhHantMsg.kids_ADkey = "5位按键模块";

const ZhHantCatgories = {};

/***/ }),

/***/ "./src/media/ke_bluetooth.png":
/*!************************************!*\
  !*** ./src/media/ke_bluetooth.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAACXBIWXMAAA7fAAAO3wFVDDfZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABm5JREFUaIHFm32MHlUVh5/7dlnc0i+gplYqWmhTDAgxGqQmho+UBKMWpaVQqzHRxMQ/1FRNTIz/oQmJH03URIlRBCGIKAiKFoGmUD5sEBRIjYhABUsrSGoL0m53u49/3HnNdHZm33nfufPuL9lsdubOOec583XnnLuBFqWeDJwLvAs4C1gGnArMA+YDI8Ah4DDwErAH+AfwJPA4sDOE8N82Y0wqdZn6FfUhddJmOqzeo25W3zTbbJVSV6u3qhMNgas0od6uXjDbrP+X+m71ty0BV+kB9cLZhF6s/kidSgDz5IDH3awuGzb4JvWVBNCqv1NXNDj+P+qmYUAvVG9Mghx1izqqvjmBrevUN7QFvkL9S4Igu/qpOpLZTgGv+rC6JDX4GnV/ogBVt6ghZz8VvOrf1bekAl+tvpYwuKtLfKSEV92tvq0p+JnGB0oKTambK/ykhlfdpS4cFPyEzEAKTamfncFXG/Cqd5k9V/qFvy5RAEfVT/bw1Ra86tf6Bd+YyPGENd7Btgt/1LpTYvWN6ssJnB5R11f4OHeI8KrPqXPrwN+UwNm4urbC/pfVO4YMr3pVL/DzbD5Xn1DXzQCu/cM/pm5rGNdh9a0zwW9v6GBS/WiF7aty4/qB/7061/j2ub9hfNdUga9uaFj1UyV2g3FGl1dd+G3qWG7cfOMUdlCNq6eWwf+kgVEtn7kF9bslY+vAP6zOK7G5SH2qQZxfLxo8SX29gcEJS76r1fcZXzVF9YJ/VD1x2hmKY6+wWbXoRfU4gE5m88PAWJmzmhoBfqOelN8YQtgBbAIm+7D1J+DiEML+4g51A3BD5m9QLQUuzhv9ZYNM5vVIMQGZ/fXG935XVWd+p7HiO03qBtPVB3/QNTqqHkxkVGNJamlJ8B9QD2VjivBL1R+rJ1SAX27awugeNaC+J6HRrp5VTy+BuMT4bLmjDLICfJ3HXjWptKIDvLNuIH1oObBdPSO/MYSwFXg/8FodI8bp8U3AcckjhPNQr2khq13tU99RArW4BnhbZ7yrLR1gZQtZ7WoJcJ+FD5kQwr97gF9Ge2e8q+UdYoBt6kTgLnV1ncEZ+M9oFxzgtA4wjB7YImCres5Mg4YIDrA4qOPA6BCcAfwTeG8I4YXiDvUjwM0MBxzg1Q7gkJxBbFF/q2LfRoYHDjC303tMUj0FfL5i38eA2u//BHq9A7w6JGd/Ay4MIewt2xlCOAJsAO4cUjwHOkBpMIn1DHBRFXhXIYRxYB2wdQgxHewQl4K0qeeBNSGEWn6yBFxK+1fA8x3g6TYdABeEEHbnN1pWTckpuwUuB+5pLzR2dYDHWjK+h3ipP5ffaJyvb+l1cAjhELAW2NZOeO3B7yWCP5PfqF5JybRVHbOksZgl4EPA9hZi/CPqHPWlhB8M+9S3Fz0ZV3N0v8nLihmHshneNJmmcptX/J7PjKfqy72snlUS/Kc9tpZXVckZVz9YkYB5xoVIKXRt3vD6BAZfsWTurn7G6Y2QmQqYM3V75qsPJoj10rzRMZstMDpq4bM1s7umYnyv6u24ca5floAF6t4Gse4zX73NHizXlzmrqQ7wRaf3wrcBtw1gbxS4xfLuz5do9iV6fQhh4pgt6irLa+z96OfdrObszlXvLYyr27GZUK/IjftCw/iOqMtLU2KaZWa/Vo8v2B1T78yN6adXN6l+XP2EzZuoP6y8HtSVpikR366OFmyPqN/J9vfbpZ20+SLmcQtn/ZhP2hDC08D3K7NTX2uBW81dASGEyRDC54DN9F9DmJP9NNE3i7PNaTJOKJ5tmOWutprrsuZ8LC/83fbihN1WNETKEnCJaRYUa+yvz9gHtF34SfX8WuC5gK5OGMB9lrSbhwT/1b7As4DmqHcnDGK7FQmwPfhfqYOV6ox9+ycSBrNDnT8k+AfscbvVScAS9a8Jg3pQXdAy/E4rFjcMkoBTTHsF/EFd1BL8DgvJTZGABcZXVyo9YnZ2TAd/m3VfaQMkYET9hs2/Abp6VD3Z5vBTxrdT+30I9SL1hYYBd/Vn9ewGx++1ogDSZgIWqd82zpmbavcAxxxRv2eqB9uASVip/sJ0t0IvHc38rZo16KLU04z3Xap/OSvqgHEVyRm9o5klGQuN640rOptWhf+lXmtcopL8KR56DxlcxqfvOcDZwJnZ76XAQmABcdXGfuAAcBB4kfgf1LuAJ4DHQwhTbcX3P7OCHmEf8I0TAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/media/ke_button.png":
/*!*********************************!*\
  !*** ./src/media/ke_button.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABpCAYAAAA9d90HAAAACXBIWXMAACXQAAAl0AHaYF2kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAADaVJREFUeJztnXm0X9MVx7/7iSkJiVlEzSSEtqhaWKqiLdVVy9SosTSqa7GExljVyTwUHZQKVUWNS00NVgQhoQvViimDoUkIQkyRiCDv0z/O79WT/Pa593fvub/3ey++a/3+uef+9t7n7Hvv2WfvffYxNQnA0pK+KmkLSYNrv3Ul9ZHUV1J/SdYseRoAkt6VNLf2my5psqQpkp6S9JiZfdIMQSodHGCgpP0kfUPSjgpK6WmYK2m8pHsl3WRmM6tilFxZwDKSvifpB5KGSloqNY8WxkJJ90n6q6SbzezjlMSTKQtYVkFBp0r6Qiq63RgzJF0oaZSZzU9BsLSyAJN0iKRzJK1ZWqKeh9cknSTpWjOjDKFSygK2kPRHhfnoc8TxkKQjzezZogQKKav2No2QdK6kZQuQmCFpqoJF9abCJP1+EVmahOUVrNZVJW0kaZCkDST1apDOAknHm9nFacVzAKwE3EpjmA1cDuwPrNEUQSsGsAKwO3A+8EKD43EL0L9qAdcBnsspUDswGtiTYCH2WAAG7ABcAXyYc3yeAaoxxIAhwMs5lXQT8OVKBGlxAAOBC4H5OcZqBrBZagGGED5lWXga+NzYkARsCPwjx5jNTqYwYD3glQyGC4HTCC6lz9EJwPeB9zLG72VgnbKMVgamZDB6HdglUd96JAhv2RMZ4zgJWKkoAwNuy2DwErBR4r71SAC9yf4s3klYFtWF2wCcqLCO8jBR0q5mNqtEHwoBaFPw3m+msOYZJGk9hbVQH0kdT+g7kubVftMV1nWTJU2S9LSZLWyy3L0kXSnp4Mhtx5nZhY0Q3Qr4OPIEPE+T10uEuXMEYY33dsYTmgfvEL4cI4ANmtiPpYC/R+T6CPhSXmJtwKMRYq83q3NAP2A48CBhSVAV2oHxwBFUvVgN/VoOeCgizyOEr0cmoaMiRBYC32xCZ1YDfkV4+puNucDvgLUr7uMawKsROX6URWAF4K0IgV9X3IFVgN+Tb0FZNT4ELgFWq7C/QwkvQD28AfSJ/fnkiPDPUNE6imB5HlITsNXwDnAMUEkQFfhThPdxne+1Tn/qLem/klavR1PSUDMbV4Gw60u6RtIOBf4+WdIzClbeFAXrr8OD30vSCpL6SRqoT63GrfSptdgIHpN0kJk9X+C/LoB+CtbpgDrNsyStv1jwEjg8ouGbUgrYiedeNDYvzQWuAQ4ECgU6CdbY1sDxhIm8EcwB9q9gHGJ2wg/r/WFC5A9bJRauDbiA/Bbeo8ChQPKEG2Bj4HTgzZyyAFxKWDOlkmFZfJfeg4vevFFk4EanEqrGaxngxpyDMh74Vkr+Ebn6AD8BZuaU7Q5g+YT8Rzp82um8VAJ+FhFqr4QC9QXG5BiImcCwVHwblLEPcC5hcZqFCRT15y3Od7UIz5M73zjOuWk2IWsphTDLAGNzDMAowqTbpQA2BR7LIe8jBOMsBc/bHR5jO27ojR/dvCKREG1kf/reBw5IwS8VgF6Exbm3FurAvSSIhgMHO/TnA8sL2CUiRBLLB7goo7PTSR0xTQhgGNnh+isT8FkrQn9nAcdGbiidBwjsm9HJyZQNvDUBwNeBdzP6MjwBHy/HZYQIZmg9lM7ZBjbI6OAkKnTnpAawDWGt5WEeIZeyDI/rHNoXtyns5qiHKSWZtkm6TsGDUA8zJe1mZm+W4dNMmNnjkvZWyP+rh96Srqfc/OWN++A2SWs5jWXdKj+WtK3TNk/S7mY2vSSPpsPMxkqKfe6GSDou0p6Fqc71gcJ3059VlBvBex7LhjqsKO1WAXEH7AcEn2cRurs6NF8RwWSuh1NKdGRUpCN/K0q3lUAIID4Z6WchfyqwvUNvjvDXEMcUZLY2sMCh+RawahG6rQiCQ/gTp6/twOYFaO7p0FvYJskLHxfdnnKCJG+CPcnMZhek23IwsyckXeY1SzqxAFlvGdMmR4sAIxrlAqxKMF/r4Qny5BV0MxA2anjLk4+B9RqkN8JTSOrBO1DBfK2HM82sPTG/LoeZvSPJ28LTS2E3aBKkVpaXDzdZ0m2JebUSLlKIUNfDwUQSNxtBMmURfHtbO81/6IlvVQfM7C1J1zvNG0raPgWflG+WF/f6SNKNCfm0Kq6OtO2RgkFKZe3sXL+r9uT1dDws6SWnbWgKBkmURQhQeq/67Sl4tDpqO/Hvdpq3JEFEOdWbta3CJul6GJeIR3fAfc71pVQs1e4zSKWsIc71aWY2LRGP7oBx8p0JpYOrqZTlhVmeSES/W6C25nrFaR5Uln4qZXmClIqJdVN4fS6trFSJius6173YTGUglCvYVdKKCiXm7m/yGm+KQhW4RVG6jEIqZXnR4NcS0c8F4FRJv5DUeQPFY8C+ZvZyk8TwHNUrlCWc6jPopTU3rcQPYT/T6fqsoqRQkPJumlc4xetz1yur5vfy9hF5/rIqEAuWDpHUrJxET1m9KJluneLNsgidpmywri0418u4LYl/Lgdie9hKlbArraza5O1l+yRL3M9AHj5JUpxzYGXnemycciHVnPWBc730d7obwjO25pYtDplKWW8415fE8queD7C0ZZxKWTOc6y2fFl0BvMVv6QznVMqa5lz/YiL63QK1NAmvz6W9OamU9bRzPen21m6AjeXP08+VJZ5KWf92rm8IeOnZPRFeWoMkPV6WeCplPakQvl8UpuCnW1LwXef6fEn/KUs8ibLMbJ6kR5zmJPkHrY6ad+I7TvNDZlbvYW4IKXMwxjjXdwdWScinVbGb/PkqSR2RlMq61bm+jKTkhT5aEAc51z9WopzJZMoys8nyI8Mjqaj2USsAGCxpT6d5jJm9nYJP6ozca5zr60vaJzGvVsLJ8sfyhlRMUivrKvkhgtPpgdWpaxsPvPDLDCVMcE2qLDN7T9KfneZNFLau9jRcLD8scm7KM7Sq2IJzoaQPnbYzqbhCZjMBHCjfXH9NoXhxMiRXVi3XwdsCs6Kky1LtquhKAKtL+m3klvPNzHtoC6GqzW1nS/Ly23dXud3sXY7a3HudwhFN9TBR/gNbGG0KEcx6KPz010zVEyK3nAUkSdbvIlwiyTsl4hNJw0vMVd64t7fJj/L6xXTz4SpJ9zttS0u6BfDSrlsWwPGSDo/c8pvaXuOi8DLF5rXJz0AqVTWzFsI+VJK3IOwvaQxQOlO1WQBGSjovcstzkspW6PZcVnPaJM1xGkv782rGxmHys3rWkvQABUoQNBOE6tjnSbpA/mdqtqQ9EhgV3ri/3yY/N2DjkkwlSWZ2h6QzIrcMkDSBJpVXbRSEwo9XKz4HL5C0t5m9mIDlJs71V9tUYSJ9J/xSUqyyTD9Jo4FTWqn8ArC1gr/Tc9JK4atxhJmNT8TW25EzKVZIFxLUG+wAocLy6AivDoylwbpHxIsqduDaBugtVXtw8tTJPanx0XD5DozwOTpW2AkS1zAnKOyuHAMwDzgJWC4n3WTKIigqT3XsdoLBkQz4ZVehVsmzL/4TlKRG7iICLQvckGMwIJRjHU7GpgLSKmtYDloLgNgZWIUAXOXwm0/Hgws87Nw0O2ugCgplwNk5BqUDrwI/x6lKTVplnZdBZxawU9oR+X91bq/s373Sp+6msQ6NVRTcQ0lhZpjZTyUNk/Rejr8MkHSapEmAZy2lQixl7CFJW5rZg5F7imIP+Wb7p/oBNo88SXdWIFhn3hsC/8zxZnTgnjo0Ur5ZyxFOauiM+cAJVBjtBu5x5G5nUYML/7TPdvIea1dc0DZCNbBYseAOLOYeI7012KcmzyjgDCDJmjPCb0v840XG1fuDWzqNik75qSPDQOBy4udNTqrzv1VzKMsLinY5iJ9aW/eUn374xyO1A19vovCDgatZvCLoQmCxPESCwfJ6hrJaMiwD7IT/Vr2Gt1uScDSRh8pOpot0ZEBNpscJT59XHyrr8Ju3acH68QQL0Cu6D7F1HKFqtFfgGCo+87EMCIvZeuuU2VRgaqcA8eXLLLIOpCG4WTwspEUdrh0AdiAcqXQpcDTgbRvtUgDfJn4gTfZRGYRX89kMjTftEOaeCMJpeLGT8CaQN0+F+KQH8AIJnbxLEoA1gRcjY7sAaGwTInBOhCDARJp8ZHt3R01REzPG9dgihHsRP1Ic4CW6UVi+K0E48WhqxnjeQdE0PcIi1TvlswNvAEvShrmGAexG9mmtzwL9yzIaQvwIdwjz2zk0rz5StwDBWDub7CN+ZxCquSVhuh3hQOcsTAK8fLolCoTjGSflGLM3gU1TM9+O+DFLnXEbsE1SAboJgK8Q9/V1xvTkiuokyKbAtJyCQDiTeF9yhue7KwjR733wwxz18BQwsGrBBgD3NSAUBAfxVYQcg2oFbBIIYZmDgL8QfI+N4EZgxUZ5FjITCUG4UxRSzIoE5GYqpMBNlTRLISvYSzZtBayokCm7mkKK3iaSimxd+lDSSDO7tIgQpbbeANsqJOkvaZVkiuABSUeZ2WLxuLwolVBpZo8qlDU9Uv4WnyUdr0g6wMyGllGUVPLN6gygr8IpoydI6hHzUklMVziqaZSZzU9BMPkORILlt7+kQyR9TdVt2GtFLFQo3nK1pFtS7ieWKlBWZxBW5fspbDzbUeX3fLUi5iikqI2RdLOZvV4Vo6bt7SWkBGwraQsFi2qQQvHIvgqWVv9mytMAkPSuglLmKnzeJitYs09J+peZfdIMQf4H4/EAPG/MuhgAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/ke_buzzer_w.png":
/*!***********************************!*\
  !*** ./src/media/ke_buzzer_w.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_dht11.png":
/*!********************************!*\
  !*** ./src/media/ke_dht11.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_fs.png":
/*!*****************************!*\
  !*** ./src/media/ke_fs.png ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_gas.png":
/*!******************************!*\
  !*** ./src/media/ke_gas.png ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_led_yellow.png":
/*!*************************************!*\
  !*** ./src/media/ke_led_yellow.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_rentihongwai.png":
/*!***************************************!*\
  !*** ./src/media/ke_rentihongwai.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_servo.png":
/*!********************************!*\
  !*** ./src/media/ke_servo.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_steam.png":
/*!********************************!*\
  !*** ./src/media/ke_steam.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/rc522_iic.png":
/*!*********************************!*\
  !*** ./src/media/rc522_iic.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAACXQAAAl0AHaYF2kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAGm1JREFUeJztnXe4XFW5h9/vhEASCKELQQwgIGDQUKSjSJBeBJSAghQvvXP1opQbBJFmAaSJDaRIkUuRYuiEoiAIIQGRkoSAQABpIaTnd/9Ye8JwOOdkzpn17TUzZ73PM09Okjnf+vae+e299lpfMdohaRNgP2BTYAVgQPv3ZLrkPeBF4C7gAjOblNifTB1Y5QdJ/YCLgH2TedN6zASOMbMLUzuS6RkGIKkPcD2wc1p3WpYDzezXqZ3IdJ+KQA4FLkjsSyszFVjZzN5I7Uime7QVU6tTUjvS4iwMfDe1E5nu0wZsByyZ2pFewPDUDmS6TxuwTWonegmfSe1Apvu0AeukdqKXsGhqBzLdp418ZctkOqWNfGXLZDqlDVgotROZTKPSltqBTKaRyQLJZLogCyST6YIskEymC7JAMpkuWCC1A5nakfQZ4ARgBvAhIQhyJiEH5UPgleI1ycymp/KzlcgCaS6WAQ6s5Y2S3iSI5WXgn8AY4EngOTOb4+Zhi2GSlNqJXsJkM1u2HgOSNgD+Vqcf04CxBLE8DtxrZs/XabNlyXeQ5qJPBBv9gfWLFwCSXgceIKQJ/yWnCX9EvoOUR4w7yGbA6Ej+dMUzwI3AdWb2ZAnjNSx5Fau5iHEHqYU1geOBJyRNkHSupE1LGruhyAJpLsoSSDUrAkcCD0h6VtLxkj6VwI8kZIE0FykEUs3ngNOASZKulbSlJJvfLzUzWSDNRWqBVFgQ+CZwJ/CUpEMkLZLYJxeyQJqLRhFINUOBC4GJkk6WtFhqh2KSBdJcNKJAKiwJjCRMv86QtHhqh2KQBdJcNLJAKgwEjgMmSDql2e8oWSDNRTMIpMIg4CTgRUlHFdU7m44skOaiGb9kSwDnAI9J+nJqZ7pLFkhz0YwCqTAMuF/SnyWtlNqZWskCaS5a4fPaARgn6UhJDX88KYMV9yNElabgSOA7icauh1mpHYjEAOBcYISk/czsudQOdUZKgTxrZo+nGLiIXm1GPkjtQGQ2Bp6U9CPgbDObm9qh9jT8LS7zMVpNIBDC788A7ioyJhuKLJDm4p3UDjjyVeBxSVuldqSaLJDm4mng7dROOLIUcLukkxrlAb4hnMjUhpnNBvYBxhHuJp29mpk2QkOnP0taIrUzOeW2yTCzW4BbunqPpL7A0sBKwBrF60vAeoQ5fzOwHWHKtUvKrMYskBbEzGYBrxavhyr/LmlBYF1gE2Bzwry/kdt8rwiMlrSbmd2ZwoE8xepFmNlMM/urmf3UzHYgzPm3J4SrN2qhhoHArZL2TjF4FkgvxsymmdltZnaYmQ0hTMHOAxqtG29f4DJJJ5c9cBZIZh5m9riZHQWsAOwK3JPYpWoMGCnpl2WucGWBZD5BMRW7wcyGA2sBlxBKmzYChwO/KUskWSCZLjGzcWZ2EDAE+BHwfmKXIMTx/bqMghFZIJmaMLO3zOxkYFXgZ4QSpinZn5Bn4koWSKZbmNkbZvY9YDXg8sTuHCnpF54DZIFkeoSZvWJm3wGGE3b2U3G0pJFexrNAMnVhZvcAawM/IPQqScFISXt5GM4CydSNmc02szMJ4SxPpHCB8NC+UWzDWSCZaJjZU8BGwAUJhu8H3CBpSEyjWSCZqJjZDDM7nLDR+G7Jw38KuE3SoFgGs0AyLpjZDcCGwLMlD70mcGmsPZIskIwbZvYvQt75vSUP/XXg4BiGskAyrpjZO8BWwK9KHvrnktaq10gWSMadYpXrYOCsEoftB1wuaaF6jGSBZErDzI4j7JeUxReBn9RjIGcUNhmSLies+08lrBJNBaYA4wkPxBPMLNWG3XwxszOLSNy6vrjd4BhJt5nZ3T355SyQ5mMHoKuWArMlTQSeAx4h5HQ82kiiMbPTJfUD/reM4YCLJQ01sxnd/eU8xWo+5rd8uQCwCqHowY8I/c/fljRK0g8krebtYC2Y2UhKiMYtWAU4tie/mAXSfPTkM1uYsJJ0OvAvSY8VPTuWjutat/lv4OqSxjqxJ5Ubs0B6J+sSrt4vS7pO0pdSOFHU4t0HGF3CcAOAn3f3l7JAmo+Yn9lCwDeARyU9KGmLiLZrong2GgG8XMJwu0nauju/YJLk5c18uJF01TM2ICwBlslkM1u2XiOSPiBMmby4B/ihmT3qOMYnkDQMeBDfYwN4EljHzGr63qcUSG8jlkA+xL86ooArgKPNrLRawJL2AP5YwlA7m9nNtbwxT7EyHWHA3sDTkkprNGRmVwOXljDUyFqDGbNAmg/3Sh5VLEso2PYnSYuWNObhwDPOY6wDbFPLG7NAmo8yBVJhN0KX2i94D2RmU4E98U/frWmTMguk+UghEAjlfh6RtL/3QEVm4inOw2woafj83pQFkukO/YDfSjq9hLHOBP7uPMbh83tDXsUqj1irWLNojBi6i4HDPBtvShoKPA4s6DTEHGAlM+t0DybfQZqPVFOs9hwM/EGSm1jNbBzwUy/7QB/gwC59yHeQ0mi1O0iFq4Fve91JJPUn9GZcycM+8DowpLNo53wHaT6mpnagHXsAZ3sZN7NphKBGL5YFdunsP7NAyiNWB6dGqK7enmMlHeZlvKiQMsrLPnBQZ/+RBVIOAk6MZKsRBQJwrqQdHe1/n/BQ7cHmkjqcwmWBlMNZZnZHJFv/jmQnNn2AKyWt6mHczMYCf/CwTVj4+FZH/5EF4s/dwAkR7XlONeplIL4rWyfh1+lqn47+Ma9i+TIeWN/M/hPLYNHK+QRgGCEJaHFgUWAQsEyscepkpJm57IRL+hk9TJ+tgQ3ah/lngfjxFrBpUV2wFCQtRshzGU4IxkuSKQjMBjbxyCkp0mZfIHS+jc35ZnZE9T9kgfjwIbClmf01pRNFcOEhwF7AIiUP/yzwBTObFduwpCvp5JmhTl4FPl2dTJWfQeIzC9gttTggBP2Z2SHA8oRVtDL3UFYHDnWy/TMnu4MJofDzyAKJyxxgLzP7S2pHqjGz983sNEJfwUsAt/ipdoyUtGRso2b2D+C+2HYLPrZUnQUSDwEHm9m1qR3pDDN7tWjpvBXl1ANYnLgreNVc7GR3p+q/5GeQOIgQ2XpRakdqRdJg4BpgU+ehZgJrmtmLMY1KGgBMJv6zlYDPmNkrkO8gsTi6mcQB4W4CfBX4rfNQC+IQS2VmHwI3xbZL2DTcvPKXNmC6wyC9BQHHmNl5qR3pCWY2GzgA/56C+3g8i+BXAWWTyg9tlN9HrlWYA+xvZmXVl3WhWNI8Ar85PYQNzQMc7N5B2G+KzbxpZxth0yXTPWYCe5rZpakdiUEhksOA2x2HOaKIAohGscfi4fOakhaHIJDHHAZoZaYBu5rZdakdiUmR8LQ3MNFpiMG0WyGKxD0ONtsI7axpw+dBp1WZCuxkZremdsSDImZsN/xK7uzuYNNDIABDIQhkNFBavFAT8w4hfOSu1I54UmzCdbsKeo1sLylq7V0zm0QICo3N6gBtxa3VM6WxFZgMbGFmf0vtSEmcis9UawCwrYNdjzbTa0CxD1JMGc50GKQVGAtsaGZPpnakLIo9Bq+L5jcdbD7kYHMNqCohUxTz/T6hol1drXNbiD8TKnZMSe1I2RTfhzFA3b3G2zEFWKLYg4mCpPXwKTI3+BM1liQNIWRXfZUQBbqUw8CNzoeEiNFzPQujNTqS9gV+72B63eJZJwpF2MkU4keGrB/ZXqaVkNRX0suKzxHzH73bvj7v4OdOORargZG0gKQdJJ0t6U6F5ptji58vkbSHpCW8xi824q5yML3J/N/SbcY52FzOwWamXiT1kXS0pEk1XOWmSbpQPejgWqMvG0a/LkuvOPj5Ewc/R+Y7SIMhaXnCsuUvgBVq+JV+hLTacZK+7eDSI0DsL/TykmJfnV+LbA9guSyQBkKhb/ldwGY9+PWBwBWSoiYoFXFat8W0WfDZyPZej2wPYPEskAZBYVn1Oood3Dr4seI3ufGI11s5sr3Jke0BLJIF0jiMAL4SydY5kacw0ZZkq8gCyXSL4yPaGkiNPfhqZBzxAxhXiWwvC6RVkfRZ4u9Y76FI+RdmNoP4D8ErRrY3LbI9gIWzQBqDrR1sLkbPHvY7I3bmXuy20tFCV6oYmAXSGAxxslvvA381sQUStRqJmc0h1AiIyYJ1V+GWtBRhrbw7TOOjYhFTCPPbSYTI2WvMLPp8UtI9fPKLuDAdN4hclFDOv5pZhC/J68AtwCkRA+4+FclOe2I+qL8X0RaEcx+b2cSt2dsnRpl6EXdF4seSNo8ZzFawNPX52ZfwhVsOWJvwUBirGki/SHba0z+irdgR3h61gmMLZIEYU6zYxYkHUkP/6h4Qu7zRFhFtRWuP0I6YO+ADItoC6C8p9hQ/dsX3Po0oEKgtxKK7xF7lGBbR1psRbVUzMaKt2AKJikIqb+zGPQ0rEI/G8bF7+60oKdY04cFIdqqZTuhuFYu6W1i3Y3rkXJtBEW1VqH+KVTyoxl498Kiq8Wpke22EZ5EY3E/8An43m1mUi4KkfsTft4jdSs1DIBZrDhh7+uKxph1bIAAbxzBS5F2cH8NWwQzi7qSvyidX9erlncj2PAQyLZZAYl/9PNJcPQQSM/HnDODlSLaOj9z67fMRbVWIdawVPBLHPoglkNhXA48uqRMcbG4uKcryp5lNBbYH3q7T1DlmFruu1ZaR7UHY94pJh33O62Rqo95BBka2Bz4pmQOpKpVfL0Uv8K3oWb3k9wnFtI+J5Q/MC8PfJqbNgqj9QvARSMPeQaLPJ83sNXz2G3aJaczMHicsIZ9Obf5OBc4DhpqZRwWSLxCq28Qmdp0xD4G8H2sqE1sgHh8IhFCWzSPbHCHpGDOLtlBRTLeOl3QKsB1hMWAoIQCxjbCL/yIhNffeWKtVnbCHk90nItvzEMikWAKJnbM8SNKSRTHlmDxCfIEsBuwKXBnZLmY2Hfi/4lU6kvoD/+Vg+tVKi7MYFNPA2AlYAC/FmmLFXpEAnyvC/Q42Ab5XfEitxrfwKRwYuyL7yvgs806MJZCXItmpZqiDzQfx2WMZBgx3sJuMIk7qKCfzsQWyXmR7FaLdQTwEEmUTrpqixq5Xw6BTW+wu8l3iZzlC2OMaFdnmlyLbqzA+lkBir2lD0eHHgRud7G5IKLzQ9Ci0HzvNyfwDRYfdmHjcQaYAL0YRSHFljv2gvqakxSLbBLjewWaFnzr5XDanEPJnPIjauk5SH2CdmDYLxpjZ3Jjx+GMi2oKwnBl9Xm9mLxDf1wrLEyoiNi2SdiQ09PRgBnBNZJvr4bOx/DjELRfv0WAm6iZcFVc42QXY16kEqDtFdZXLqOobE5nrzSx2brvHLj8U+zSNfAcB2CFW6Zp2/J74GYbVXCIpZkKVO8Wex5+AxR2H8ejF7lERBhzuIB4CGUTc1FZgXjfXa2PbrWIAMErSao5jREOhAc3NxM2SbM+jZvZATIMKrR88mty8CTwNcQXyPD6po7s52IR4BRc6YxngdkkeG57RkDQQ+As+EbvVeKyKfY34eSoA9xdFu+MJpDDosVO9h6TYRcYws0eJvx7fnpWBByV57CfUjaTBwJ3ELTDXEWMI/R5js6uDTYD7Kj/Erirh0Y53EWAvB7sAJxI/Xbg9g4GHJe3uPE63kPQ1wjx7gxKG+5/KFTkWxUVzx5g2q7jPxaqkNaL3+AmMdXE4+Hyrk8/tmSvpYoUpTTIkLSzpnMKfMnC5S0va38nfl+UVESHJJL3m5LjLNEDSmpJmOvncERMlefQKn99xLiDpIEmvlnisMyR5pOsi6V4nnz/2bBp1ilXcRj3mmhDajEXHzJ4BzvGw3QlDgGslPSzpG5I80ovnIamfpL0IqzIXU25jyrPM7OnYRhX6MX45tt2Cm53sBiRt7aTs2ZJWdfJ5Efm0O66FSZJ+KClqfV5Ja0v6paS3Ex3XswrlgqIj6VQnn99Tu3236HMtSX0JGW8eG06/MbMDHOwiaWvgdvx2kefHXMJqz52EPoUPF5mFNaGwC74ZISHsK8SvY9UdZgEbm1n0yGmFDc1J+OSpXGNmH8ugdPkySLoU2MfB9CxgNTOb6GAbSefglwPREyYTqrFMAP4NzKn6v0EEEQwp/oxZqLpejjez0z0MSzoYuMjDNvB1M7up+h+8BLIDfs8iF5nZoR6GiynBo/jkQfQWbgd2iFxWFJiXWvs0sEZs24RyS8uZ2ceqeno10BmFT99qgP0VeolHp8gB35n4zWJ6CxOBvT3EUbAtPuIAuK69OMBJIEUpzUs9bBP6VBznZBszm0BIfPIoyt3KvAfs6FBoA5h39zjZw3ZBh0U33B5IFWKQXsBHhLOBtc3MoxgcAJIOwif6tBWZCWxnZjGryX8MSSOAq53Mv0B4tv3Ebr9bj8LiSuwRegKhNKlrYpKZ/Qr4oecYLcIcYD9ncfQFTvWyD1zYWSiMdxPPXzna3lKSV0IVAGZ2BiH9NNMxFXFc5TzOAYQK8x5MIySJdYjrmr/CLvHz+K3JTwA+H7OqYUdIOhkY6TlGEzIT2NPMXIvaSRoE/Au/RqeXmdm+nf2n6x2kaK4Tu9J4NSsB33O0D4CZnQzsj09NrWZkJjDCWxwFZ+AnDgh1jTvFfddYIVvtJXx2PiF0KlrbzJ5zsj8PSTsBV+HTwrhZ+A9BHG7PHBUUAlTvw+9CfreZdZko5v0Mgpl9iG/23gDgquJBzhUzu5lQRSN6AF6TMAZYvyRxLERYRfT8jp41vze4C6TgfOL3pKtmXeAkR/vzMLNnCUXivJYcG5WrCPFV40sa70RgTUf7lbi3xkDST5wiMCvMkeQVAt3ZMe0r6R3n40rNFEledbI6O68byj9HZ7syj2m+SBooabLzQY+XQ/76fI5rWUnXOx9XCuZKulYh96LM87m0pFecj210mcdUM5KOcT5wSep0Tdv52HaT9EIJx1cGD0ryKgjd1TlskzSqhOOLXhg9CpIWkjShhBNwbKLj6yvpQElvlnCMHoyT9E0lqlIv6X9LOMYbUhxbzUj6dgknYbak7RMe4+KSTlLzCOU5SXsq9ARJdc6+rvC5eTJdIbGscVG4jT7ifCIk6X0lrkelUEHkaDXm1OtDSVdK2koJhVGcp00Kf7xxSeKKjqS1VE4lkYmKnOvdw+M1SRtJOl/SGyUcd2fMUXi+OEAhhCM5CqWi/lPCsb+mkhdw6kLSaSWcFClUD2mYnW+F55TtJf1GYWrjzeuSLlOYQnlFM/QISYMVLmJl0KPmRslahimkt44ByijwPJqQr1BzEYSyUCj/+eXitQGhXGlPm/C8CzxV9fo7oRGMd/XIbqOwfHwH8LkShrvFzHpUhTFpTz1JXyHkjJThx0PAtkU3rIZGoQXaysXrM4T8l76EMqwV3gXeIKQHv0lorezRKzI6klYniGOFEoabQoj49ujE7I9COc6yuF8NNN3qjUhaX9JbJX7mLgUHS0PSAElPl3jCskgSIelrCqErZXGbWqHzsKTPS5pa4ol7VA2wutWbUNhALbMG8puSlk193NGQ9N0ST54kvagwF844ojBDuKLkz3auQjPS1iLBiXxb0rapj7tVkbSSpCdK/kwl6YzUx+6CQsTvsyWfzDkKYSHNP1dtICTtonI2ANtzt0Lv9NZE0ipKE8N0m/JzSd0oxKGVPROo8JKkZVKfA3ckbaoQWFY2b6gV564lodD6IlUbifclfTH1OSgNhajfstqEVTNX0u8UNusyNSBpqeKcpSJp9HYyJI1MeNJfU4JWac2EQlzZMUqfdlxqSnDDoBAFm/LKJIWHvtwOoR0KAZdlL6h0xImpz0VSJPVRyFtIyWyFkJhPpz4fqZG0maQ70n4c85hv2Z5egUKH1mtSfxqSpim0UG6dHdoakbStpNFpT//HuEh5af4jFOa7jVI9ZLpCPsfQ1OfFE4VzvrukfyQ925/kCiXOgmxIJC0o6abEH041cxWqcGytFrqaSfqcpLPlX6apJ9wo59bZTY2CSC5P/CF1xD8lnShpldTnqCdIWkzSPpIeSHkS58OtCiVJS6Mpr3oKV+uRNG5LgmeA6wil9SekdqYzJA0BtgZ2BLYCFuz6N5LyR2Cfor1faTSlQCpIOpLQaapR56NzgbGErMl7gdFm9m4qZxRCaTYCNgG2BIal8qWbnA8c5dgctFOaWiAACpt5lxOaezY6c4AngL8B4wh3mnFm9k7sgSStQOjKtDoh131joNmmf3OBE4pOX0loeoFAqKsEXAsMTu1LD3mNIJZXCTnmk4vXW8D04j3vApXiC23AEu1eSxKOf1VCIYwBJfnuxRRgr6LlRDJaQiAQikgD1xCqg2SamwnATp5djGulUefu3cbMXgeGA2fy0ZU203zcBKzXCOKAFrqDVCNpZ0Ln0oaoHpipiRnAccB5jVTHqyUFAiBpNeBSwqpNprEZB+xtZk+mdqQ9LTPFak/R1HNT4GjC1SnTeMwmTInXa0RxQAvfQapRCFe/DFg7tS+ZeYwF9jezx1I70hUtewepxszGEvYCTiHfTVIzhdDbft1GFwf0kjtINQoNVE4HcrZg+dwCHNpMdXJ7nUAqKHQ5/QXlVJfv7TwIHGdmD6d2pLv0iilWR5jZbcBahKXFhq/43qSMI2z4bdaM4oBefAepRtKSwLHAEcDAxO60As8QprF/NLM5qZ2phyyQKiQtARwJHEXPm9j0ZsYAPweubHZhVMgC6YCqO8ohQK6P1TVzgVsJO+B3pXYmNlkgXSCpP/At4FBgncTuNBrvAr8DLjCz8amd8SILpEYkrQscCOwN9E/sTirmAn8F/kCYRjVcz8fYZIF0E0lLA7sDIwiZeb1hJfBJQr7N5Wb2SmpnyiQLpA4kLU/YcBxB2KlvlfMp4DHgeuBPZvZiYn+S0SofaHKKAgjbEHJStiBk+DUTbwJ3AaOAUUV+Ta8nC8QBhaJmwwhiGQ5sSOPlprxCaI39EGGne0yKogiNThZISUhamSCatYs/hwFl1PqdA4wn7FE8RYii/YeZTSph7KYnCyQhkgYRRDKk+HP54udlCVO0voSd/f5AP2BRoA8hNGY2ITL5A0Jxh8prMvASQRTjgZfMbGZpB9Vi/D/2X0tdg+JarAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/media/wifi.png":
/*!****************************!*\
  !*** ./src/media/wifi.png ***!
  \****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "blockly/core":
/*!**************************!*\
  !*** external "Blockly" ***!
  \**************************/
/***/ ((module) => {

module.exports = Blockly;

/***/ }),

/***/ "mixly":
/*!************************!*\
  !*** external "Mixly" ***!
  \************************/
/***/ ((module) => {

module.exports = Mixly;

/***/ }),

/***/ "profile":
/*!**************************!*\
  !*** external "profile" ***!
  \**************************/
/***/ ((module) => {

module.exports = profile;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ "blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _language_zh_hans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language/zh-hans */ "./src/language/zh-hans.js");
/* harmony import */ var _language_zh_hant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/zh-hant */ "./src/language/zh-hant.js");
/* harmony import */ var _language_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language/en */ "./src/language/en.js");
/* harmony import */ var _generators_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generators/generator */ "./src/generators/generator.js");
/* harmony import */ var _blocks_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/block */ "./src/blocks/block.js");







// 载入语言文件
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHans, _language_zh_hans__WEBPACK_IMPORTED_MODULE_1__.ZhHansMsg);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHant, _language_zh_hant__WEBPACK_IMPORTED_MODULE_2__.ZhHantMsg);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.En, _language_en__WEBPACK_IMPORTED_MODULE_3__.EnMsg);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHans.MSG, _language_zh_hans__WEBPACK_IMPORTED_MODULE_1__.ZhHansCatgories);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHant.MSG, _language_zh_hant__WEBPACK_IMPORTED_MODULE_2__.ZhHantCatgories);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.En.MSG, _language_en__WEBPACK_IMPORTED_MODULE_3__.EnCatgories);

// 载入图形化模块外观定义文件
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Blocks, _blocks_block__WEBPACK_IMPORTED_MODULE_5__);

// 载入图形化模块代码生成定义文件
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Arduino.forBlock, _generators_generator__WEBPACK_IMPORTED_MODULE_4__);
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map