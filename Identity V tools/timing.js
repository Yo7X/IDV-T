skillTimes = [
    ["Blink", 150, 60]
    ["Teleport", 100, 60]
]




let runBlink
let blinkTimer

function timeBlink() {
    if (runBlink != true) {
        let skill = 150
        runBlink = true
        document.getElementById('timeBlink').innerHTML = "Blink - " + --skill;

        blinkTimer = setInterval( function() {
            document.getElementById('timeBlink').innerHTML = "Blink - " + --skill;
            //console.log('Looping - ' + skill);

            if (skill <= 0) {
                clearInterval(blinkTimer);
                document.getElementById('timeBlink').innerHTML = "Blink"
                runBlink = false
            };
        }, 1000)
    } else {
        clearInterval(blinkTimer);
        document.getElementById('timeBlink').innerHTML = "Blink"
        runBlink = false
    }
}

let runTp
let tpTimer

function timeTeleport() {
    if (runTp != true) {
        let skill = 100
        runTp = true
        document.getElementById('timeTeleport').innerHTML = "Teleport - " + --skill;

        tpTimer = setInterval(function () {
            document.getElementById('timeTeleport').innerHTML = "Teleport - " + --skill;
            //console.log('Looping - ' + skill);

            if (skill <= 0) {
                clearInterval(tpTimer);
                document.getElementById('timeTeleport').innerHTML = "Teleport"
                runTp = false
            };
        }, 1000)
    } else {
        clearInterval(tpTimer);
        document.getElementById('timeTeleport').innerHTML = "Teleport"
        runTp = false
    }
}
