let clock

let blink
let blinkTick = false

let teleport
let teleportTick = false

let patroler
let patrolerTick = false

let excitement
let excitementTick = false

let mirror
let mirrorTick = false

function timeReset() {
    blinkTick = false
    document.getElementById('timeBlink').innerHTML = 'Blink'

    teleportTick = false
    document.getElementById('timeTeleport').innerHTML = 'Teleport'

    patrolerTick = false
    document.getElementById('timePatroler').innerHTML = 'Patroler'

    excitementTick = false
    document.getElementById('timeExcitement').innerHTML = 'Excitement'
}

function timeGameStart() {
    blink = 60
    blinkTick = true
    blink--
    document.getElementById('timeBlink').innerHTML = 'Blink ' + blink


    teleport = 45
    teleportTick = true
    teleport--
    document.getElementById('timeTeleport').innerHTML = 'Teleport ' + teleport


    patroler = 40
    patrolerTick = true
    patroler--
    document.getElementById('timePatroler').innerHTML = 'Patroler ' + patroler

    excitement = 40
    excitementTick = true
    excitement--
    document.getElementById('timeExcitement').innerHTML = 'Excitement ' + excitement
}

function timeBlink() {
    blink = 150
    blinkTick = true

    blink--
    document.getElementById('timeBlink').innerHTML = 'Blink ' + blink
}

function timeTeleport() {
    teleport = 100
    teleportTick = true

    teleport--
    document.getElementById('timeTeleport').innerHTML = 'Teleport ' + teleport
}

function timePatroler() {
    patroler = 90
    patrolerTick = true

    patroler--
    document.getElementById('timePatroler').innerHTML = 'Patroller ' + patroler
}

function timeExcitement() {
    excitement = 100
    excitementTick = true

    excitement--
    document.getElementById('timeExcitement').innerHTML = 'Excitement ' + excitement
}

function timeMirror() {
    mirror = 28
    mirrorTick = true

    mirror--
    document.getElementById('timeMirror').innerHTML = 'Mirror (Active) ' + mirror
    document.getElementById('timeMirror').style.width = '370px'
}





setInterval( function() {
    if (blinkTick == true) {
        blink--
        document.getElementById('timeBlink').innerHTML = 'Blink ' + blink
        if (blink == 0) {
            blinkTick = false
            document.getElementById('timeBlink').innerHTML = 'Blink'
        }
    }

    if (teleportTick == true) {
        teleport--
        document.getElementById('timeTeleport').innerHTML = 'Teleport ' + teleport
        if (teleport == 0) {
            teleportTick = false
            document.getElementById('timeTeleport').innerHTML = 'Teleport'
        }
    }

    if (patrolerTick == true) {
        patroler--
        document.getElementById('timePatroler').innerHTML = 'Patroller ' + patroler
        if (patroler == 0) {
            patrolerTick = false
            document.getElementById('timePatroler').innerHTML = 'Patroller'
        }
    }

    if (excitementTick == true) {
        excitement--
        document.getElementById('timeExcitement').innerHTML = 'Excitement ' + excitement
        if (excitement == 0) {
            excitementTick = false
            document.getElementById('timeExcitement').innerHTML = 'Excitement'
        }
    }

    if (mirrorTick == true) {
        mirror--
        if (mirror > 15) {
            document.getElementById('timeMirror').innerHTML = 'Mirror (Active) ' + mirror
        } else {
            document.getElementById('timeMirror').innerHTML = 'Mirror (Cooldown) ' + mirror
        }
        if (mirror == 0) {
            mirrorTick = false
            document.getElementById('timeMirror').innerHTML = 'Mirror'
            document.getElementById('timeMirror').style.width = '200px'
        }
    }

}, 1000)
