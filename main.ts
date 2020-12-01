let luminosité = 0
input.onButtonPressed(Button.A, function () {
    luminosité = input.lightLevel()
    basic.pause(1000)
    basic.showString("" + Math.trunc(luminosité * 100 / 255) + "%")
})
