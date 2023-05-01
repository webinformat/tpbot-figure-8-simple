let loop = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showNumber(loop)
    TPBot.setWheels(40, 80)
    basic.pause(2000)
    TPBot.setWheels(80, 40)
    basic.pause(4000)
    TPBot.setTravelTime(TPBot.DriveDirection.Forward, 100, 0.2)
    TPBot.setWheels(40, 80)
    basic.pause(2000)
    loop += 1
})
