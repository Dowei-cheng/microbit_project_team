let X1 = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
            X1 = huskylens.readeArrow(1, Content2.xOrigin)
            if (X1 < 140) {
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 0, 0)
                basic.showLeds(`
                    . . # . .
                    . . # # .
                    . . # # #
                    . . # # .
                    . . # . .
                    `)
            }
            if (X1 >= 140 && X1 < 150) {
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 0, 0)
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . . # # .
                    . . # . .
                    . . . . .
                    `)
            }
            if (X1 >= 150 && X1 < 160) {
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 0, 0)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
            if (X1 >= 160 && X1 < 180) {
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 0, 0)
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # # . .
                    . . # . .
                    . . . . .
                    `)
            }
            if (X1 >= 180) {
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 0, 0)
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
