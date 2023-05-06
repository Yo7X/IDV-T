spaces = [
    `Toxic postmatch`,
    `A tier lobby`,
    `Default skin`,
    `Sketchy username`,
    `A badge`,
    `B badge`,
    `C badge`,
    `Awful cipher pop`,
    `Missed flywheel`,
    `Terror shock`,
    `Sit full chair time`,
    `Self promo`,
    `Hunter recovery cancel`,
    `SS skin`,
    `No borrowed time`,
    `rescuer with no tide`,
    `Free space`
];

temp = [];

scramble()

function scramble(){
    id = 1

    temp = spaces.slice();

    for (let i = 0; i < 17; i++) {
        x = Math.floor(Math.random() * temp.length)
        document.getElementById('card_' + id).innerHTML = temp[x]
        document.getElementById('card_' + id).style.backgroundColor = 'rgba(20, 14, 82, 0.582)'
        temp.splice(x, 1)
        id++
    }
}

function addspace() {
    x = document.getElementById('typespace').value
    if (x == '') {
        alert('You need to put something in the text box')
    } else {
        spaces.push(x)
        document.getElementById('typespace').value = ''
    }
}

function removespace() {
    x = document.getElementById('typespace').value

    if (x == '') {
        alert('You need to put something in the text box\nRemember its case sensitive')
    } else {
        for (let i = 0; i < spaces.length; i++) {
            if (spaces[i] == x) {
                spaces.splice(i, 1)
                document.getElementById('typespace').value = ''
                break;
            }
        }
    }
}
