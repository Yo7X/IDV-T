function googleTranslateElementInit() {}

list = [
    `Run in a circle 3 times`,
    `Place a grafiti on the closest wall`,
    `No interacting with anything for 10 seconds`,
    `Subscribe to yo7 on YouTube`,
    `Mute the game for the rest of the match`,
    `If available click the surrender button`
];

defaultlist = [
    `Run in a circle 3 times`,
    `Place a grafiti on the closest wall`,
    `No interacting with anything for 10 seconds`,
    `Subscribe to yo7 on YouTube`,
    `Mute the game for the rest of the match`,
    `If available click the surrender button`
];

function listdefault() {
    list = defaultlist
    selectedlist = defaultlist
    showWheelList()
}

hunterlist = [
    `Change target`,
    `Your next hit must be a charged attack`,
    `Your next down must be done using an abilitie`,
    `You are not allowed to tunnel your current target`,
    `You cant use any abilities for 10 seconds`,
    `Your next chair must be far away from progressed ciphers and exit gates`,
    `No using the basement for the rest of this match`,
    `Mute the game for the rest of this match`,
    `If you have trump card use it now or as soon as it becomes available`
];

function listhunter() {
    list = hunterlist
    selectedlist = hunterlist
    showWheelList()
}

survivorlist = [
    `Run in a circle 3 times`,
    `Change cipher`,
    `Use an item`,
    `Your not allowed to rescue anyone bellow half`,
    `No vaulting for 10 seconds`
];

function listsurvivor() {
    list = survivorlist
    selectedlist = survivorlist
    showWheelList()
}

let selectedlist

function wheelAdd() {
    x = document.getElementById('wheelTypeSpace').value

    if (x == '') {
        alert("You need to put somthing in the textbox")
    } else {
        list.push(x)
        document.getElementById('wheelTypeSpace').value = ''
        showWheelList()
    }
}

function wheelRemove() {
    x = document.getElementById('wheelTypeSpace').value

    if (x == '') {
        alert('You need to put something in the text box\nRemember its case sensitive')
    } else {
        for (let i = 0; i < list.length; i++) {
            if (list[i] == x) {
                list.splice(i, 1)
                document.getElementById('wheelTypeSpace').value = ''
                break;
            }
        }
        showWheelList()
    }
}

function showWheelList() {
    let formattedList = '';

    list.forEach(item => {
        formattedList += item + '<br>';
    });

    document.getElementById('wheelList').innerHTML = formattedList;
}

time = 0

function spin() {
    document.getElementById('showWheelResults').style.display = 'block'

    let number = [Math.floor(Math.random() * list.length)]

    random = list[number]
    document.getElementById('wheelResult').innerHTML = random

    time = document.getElementById('wheelTime').value
    
    if (document.getElementById('autoSpin').checked) {
    document.getElementById('wheelTimer').innerHTML = time + ' seconds untill next spin'
    } else {
        document.getElementById('wheelTimer').innerHTML = ''
    }

    if (document.getElementById('wheeltts').checked) {
        speak()
    }

    if (document.getElementById('wheelRemove').checked) {
        if (list.length == 0) {
            document.getElementById('wheelResult').innerHTML = 'No more list items. Spin again to refresh the list'
            list = defaultlist
        } else {
        list.splice(number, 1)
        }
    }
    showWheelList()
}

function speak() {
    responsiveVoice.speak(document.getElementById('wheelResult').innerText, 'UK English Female', {pitch: 1, rate: 1, volume : 1})
}

setInterval( function() {
    if (document.getElementById('autoSpin').checked) {
        if (time > 1 || time == 1) {
            time--
            document.getElementById('wheelTimer').innerHTML = time + ' seconds untill next spin'
            console.log(time)
        } else if (time == 0) {
            spin()
        }
    }
}, 1000)
