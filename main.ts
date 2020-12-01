let luminosité = 0
input.onButtonPressed(Button.A, function () {
    luminosité = Math.trunc(input.lightLevel() * 100 / 255)
    basic.showString("" + luminosité + "%")
})
