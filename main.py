X1 = 0
huskylens.init_i2c()
huskylens.init_mode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)

def on_forever():
    global X1
    huskylens.request()
    if huskylens.is_learned(1):
        if huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENS_RESULT_ARROW):
            X1 = huskylens.reade_arrow(1, Content2.X_ORIGIN)
            if X1 < 140:
                mbit_小車類.car_ctrl_speed2(mbit_小車類.CarState.CAR_RUN, 0, 0)
                basic.show_leds("""
                    . . # . .
                    . . # # .
                    . . # # #
                    . . # # .
                    . . # . .
                    """)
            if X1 >= 140 and X1 < 150:
                mbit_小車類.car_ctrl_speed2(mbit_小車類.CarState.CAR_RUN, 0, 0)
                basic.show_leds("""
                    . . . . .
                    . . # . .
                    . . # # .
                    . . # . .
                    . . . . .
                    """)
            if X1 >= 150 and X1 < 160:
                mbit_小車類.car_ctrl_speed2(mbit_小車類.CarState.CAR_RUN, 0, 0)
                basic.show_leds("""
                    . . # . .
                    . # # # .
                    # # # # #
                    . . . . .
                    . . . . .
                    """)
            if X1 >= 160 and X1 < 180:
                mbit_小車類.car_ctrl_speed2(mbit_小車類.CarState.CAR_RUN, 0, 0)
                basic.show_leds("""
                    . . . . .
                    . . # . .
                    . # # . .
                    . . # . .
                    . . . . .
                    """)
            if X1 >= 180:
                mbit_小車類.car_ctrl_speed2(mbit_小車類.CarState.CAR_RUN, 0, 0)
                basic.show_leds("""
                    . . # . .
                    . # # . .
                    # # # . .
                    . # # . .
                    . . # . .
                    """)
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)
