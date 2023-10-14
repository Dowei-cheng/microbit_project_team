let X1 = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
            X1 = huskylens.readeArrow(1, Content2.xOrigin)
            led.stopAnimation()
            if (X1 < 135) {
                led.plot(0, 0)
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 0, 65)
            } else if (X1 >= 135 && X1 < 145) {
                led.plot(1, 0)
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 30, 40)
            } else if (X1 >= 150 && X1 < 170) {
                led.plot(2, 0)
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 50, 50)
            } else if (X1 >= 175 && X1 < 185) {
                led.plot(3, 0)
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 40, 30)
            } else if (X1 >= 185) {
                led.plot(4, 0)
                mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 65, 0)
            }
        }
    }
})
basic.forever(function () {
	
})
