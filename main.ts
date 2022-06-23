let אנכי_חדש = 0
let אופקי_חדש = 0
let אנכי = 2
let אופקי = 2
basic.forever(function () {
    אופקי_חדש = Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 4)
    אנכי_חדש = Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 4)
    if (אופקי != אופקי_חדש || אנכי_חדש != אנכי) {
        led.unplot(אופקי, אנכי)
        אנכי = אנכי_חדש
        אופקי = אופקי_חדש
        led.plot(אופקי, אנכי)
    }
})
