let loop = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showNumber(loop)
    TPBot.setWheels(40, 80)
    basic.pause(4800)
    TPBot.setWheels(80, 40)
    basic.pause(3500)
    loop += 1
})
