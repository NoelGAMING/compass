let Degres = 0
basic.forever(function () {
    Degres = input.compassHeading()
    if (Degres < 45) {
        basic.showString("E")
    } else if (Degres < 135) {
        basic.showString("K")
    } else if (Degres < 225) {
        basic.showString("D")
    } else if (Degres < 315) {
        basic.showString("Ny")
    } else {
        basic.showString("E")
    }
})
