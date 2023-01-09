radio.onReceivedValueDeprecated(function (name, value) {
    if (name == "turn left") {
        turn_left_indicator_on = true
        turn_right_indicator_on = false
        kitronik_servo_lite.left()
        indicator.clear()
        indicator.show()
    } else if (name == "turn right") {
        turn_left_indicator_on = false
        turn_right_indicator_on = true
        kitronik_servo_lite.right()
        indicator.clear()
        indicator.show()
    } else if (name == "go") {
        turn_left_indicator_on = false
        turn_right_indicator_on = false
        kitronik_servo_lite.forward()
        indicator.clear()
        indicator.show()
    } else if (name == "stop") {
        turn_left_indicator_on = false
        turn_right_indicator_on = false
        kitronik_servo_lite.stop()
        indicator.clear()
        indicator.show()
    }
})
let led_2 = 0
let led_1 = 0
let turn_right_indicator_on = false
let turn_left_indicator_on = false
let indicator: neopixel.Strip = null
indicator = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
radio.setGroup(1)
indicator.setBrightness(255)
kitronik_servo_lite.setDegreesPerSecond(2)
basic.forever(function () {
    if (turn_left_indicator_on == true) {
        indicator.range(led_1, 1).showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(75)
        led_1 += 1
        if (led_1 > 5) {
            led_1 = -1
            indicator.clear()
            indicator.show()
            basic.pause(100)
        }
    } else if (turn_right_indicator_on == true) {
        indicator.range(led_2, 1).showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(75)
        if (led_2 < 0) {
            led_2 = 5
            indicator.clear()
            indicator.show()
            basic.pause(100)
        }
    }
})
