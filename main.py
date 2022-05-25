DFRobotMaqueenPlus.I2CInit()
let _1Pausua = 1
let _2Pausua = 0
let _3Pausua = 0
basic.forever(function () {
    if (_1Pausua) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        basic.pause(X)
    }
})
