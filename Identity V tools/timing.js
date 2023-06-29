let clock
 
let blink
let blinkTick = false

let teleport
let teleportTick = false

let patroler
let patrolerTick = false

let excitement
let excitementTick = false

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


    teleport = 40
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
    patroler = 100
    patrolerTick = true

    patroler--
    document.getElementById('timePatroler').innerHTML = 'Patroler ' + patroler
}

function timeExcitement() {
    excitement = 100
    excitementTick = true

    excitement--
    document.getElementById('timeExcitement').innerHTML = 'Excitement ' + excitement
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
        document.getElementById('timePatroler').innerHTML = 'Patroler ' + patroler
        if (patroler == 0) {
            patrolerTick = false
            document.getElementById('timePatroler').innerHTML = 'Patroler'
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

}, 1000)
