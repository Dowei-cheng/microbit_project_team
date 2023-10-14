let X1 = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
            X1 = huskylens.readeArrow(1, Content2.xOrigin)
            if (X1 < 135) {
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 60, 10)
                basic.showLeds(`
                    . . # . .
                    . . # # .
                    . . # # #
                    . . # # .
                    . . # . .
                    `)
            }
            if (X1 >= 135 && X1 < 145) {
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 60, 40)
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . . # # .
                    . . # . .
                    . . . . .
                    `)
            }
            if (X1 >= 150 && X1 < 170) {
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 60, 60)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
            if (X1 >= 175 && X1 < 185) {
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 40, 60)
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # # . .
                    . . # . .
                    . . . . .
                    `)
            }
            if (X1 >= 185) {
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 10, 60)
                basic.showLeds(`
                    . . # . .
                    . # # . .
                    # # # . .
                    . # # . .
                    . . # . .
                    `)
            }
        }
    }
})
basic.forever(function () {
	
})
