enum RadioMessage {
    message1 = 49434
}
function moveOn () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Sl * v)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Sr * v)
}
radio.onReceivedValue(function (name, value) {
    if (name == "cX") {
        cX = value
    } else if (name == "cY") {
        cY = value
    }
})
let cY = 0
let Sr = 0
let v = 0
let Sl = 0
let cX = 0
radio.setGroup(212)
cX = 510
cX = 510
serial.redirectToUSB()
basic.forever(function () {
    if (cX > 560) {
        Sl = 200
        Sr = 75
    } else if (cX < 460) {
        Sl = 75
        Sr = 200
    } else {
        Sr = 200
        Sl = 200
    }
})
basic.forever(function () {
    if (cY > 560) {
        v = 1
    } else if (cY < 460) {
        v = -1
    } else {
        v = 0
    }
})
basic.forever(function () {
    if (v == 0) {
        if (cX < 460) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        } else if (cX > 560) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        } else {
            moveOn()
        }
    } else {
        moveOn()
    }
})
basic.forever(function () {
    serial.writeLine("" + (cY))
})
