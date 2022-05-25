DFRobotMaqueenPlus.I2CInit()
let _1Pausua = 1
let _2Pausua = 0
let _3Pausua = 0
basic.forever(function () {
    if (_1Pausua == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        basic.pause(500)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
    if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 30) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 15) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
    } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 7) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 10)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
    _1Pausua = 0
    _2Pausua = 1
})
