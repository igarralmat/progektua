DFRobotMaqueenPlus.I2CInit()
let _1Pausua = 1
let _2Pausua = 0
let _3Pausua = 0
basic.forever(function () {
    if (_3Pausua == 1) {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        } else {
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 75)
            }
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 75)
            }
        }
    }
    if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 30) {
    	
    }
})
basic.forever(function () {
    if (_1Pausua == 1) {
        if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 30) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 15) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
        } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 10) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 25)
        } else {
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            basic.pause(500)
            _1Pausua = 0
            _2Pausua = 1
        }
    }
})
basic.forever(function () {
    if (_2Pausua == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 70)
        basic.pause(600)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(1500)
        _2Pausua = 0
        _3Pausua = 1
    }
})
