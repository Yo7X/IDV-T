let ar = [
    ['Are you cool', 'Random', 'Yes', 'No', 'Pizza', 'Yes', 0],
    ['When was the golbal version of idv released', 'General', 'July 2018', 'May 2020', 'March 2017', 'July 2018', 1],
    ['The limited skin from season 10 belongs to what character?', 'Skins', 'Doctor', 'Grave keeper', 'Bloody queen', 'Grave keeper', 2],
    ['What is a primed cipher', 'Vocabulary', 'A cipher with no decoding progress', 'The last cipher', 'A cipher with 99% progress', 'A cipher with 99% progress', 3],
    ['question', 'catagory', 'answer1', 'answer2', 'answer3', 'right answer', 'number of array'],
    ['question', 'catagory', 'answer1', 'answer2', 'answer3', 'right answer', 'number of array']
    //['question', 'catagory', 'answer1', 'answer2', 'answer3', 'right answer', 'number of array']
];

y = 0
win = 0
loss = 0

function srt() {

x = Math.floor(Math.random() * 4)

document.getElementById('question').innerHTML = ar[x][0]
document.getElementById('cat').innerHTML = ar[x][1]

document.getElementById('an01').innerHTML = ar[x][2]
document.getElementById('an02').innerHTML = ar[x][3]
document.getElementById('an03').innerHTML = ar[x][4]

y = ar[x][6]
}

function ans01() {
a = document.getElementById('an01').innerHTML
b = ar[y][5]

console.log(a + ' \n' + b + ' \n' + y)


if (a == b) {
    win = win + 1
    document.getElementById('wl').innerHTML = 'Correct: ' + win + ' <br> Wrong: ' + loss
    srt()
} else {
    loss = loss + 1
    document.getElementById('wl').innerHTML = 'Correct: ' + win + ' <br> Wrong: ' + loss
    srt()
}

}

function ans02() {
a = document.getElementById('an02').innerHTML
b = ar[y][5]

if (a == b) {
    win = win + 1
    document.getElementById('wl').innerHTML = 'Correct: ' + win + ' <br> Wrong: ' + loss
    srt()
} else {
    loss = loss + 1
    document.getElementById('wl').innerHTML = 'Correct: ' + win + ' <br> Wrong: ' + loss
    srt()
}

}

function ans03() {
a = document.getElementById('an03').innerHTML
b = ar[y][5]

if (a == b) {
    win = win + 1
    document.getElementById('wl').innerHTML = 'Correct: ' + win + ' <br> Wrong: ' + loss
    srt()
} else {
    loss = loss + 1
    document.getElementById('wl').innerHTML = 'Correct: ' + win + ' <br> Wrong: ' + loss
    srt()
}

}