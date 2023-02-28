//Why is this not updating

let ar = [
    ['What character got the first SS tier skin?', 'Skins', 'Perfumer', 'Priestess', 'Coordinator', 'Perfumer'],
    ['When was the golbal version of idv released', 'General', 'July 2018', 'May 2020', 'March 2017', 'July 2018'],
    ['The limited skin from season 10 belongs to what character?', 'Skins', 'Doctor', 'Grave keeper', 'Bloody queen', 'Grave keeper'],
    ['What is a primed cipher', 'Vocabulary', 'A cipher with no decoding progress', 'The last cipher', 'A cipher with 99% progress', 'A cipher with 99% progress'],
    ['The ripper can throw his foggy blade through thisn walls', 'Game mechanics', 'Yes', 'No', 'Patched bug', 'Yes'],
    ['How many curse stacks can enchantress have at one time?', 'Game mechanics', '3', '5', 'No limit', '5'],
    ['What was the theem for COA I', 'Skins', 'Pirates', 'Raceing', 'Steam punk', 'Pirates'],
    ['When prospector skill "Attraction" is activated how much faster does he run?', 'Game mechanics', '10%', '20%', '50%', '50%'],
    ['How many 4 sided dice can be carried over from one season to another?', 'General', 'no limit', '100', '1000', '100'],
    ['The "Im stuck" ping is also used to imforme your team that you are', 'Vocabulary', 'lagging', 'In a bod kitting spot', 'Need suport urgently', 'lagging'],
    ['Have you subscribed to yo7 on YouTube', 'self promotion', '7', '7', '7', '7'],
    ['What is the max amount of persona points you can spend per page?', 'General', '100', '120', '150', '120'],
];

x = 0
win = 0
amount = 0
arraynum = ar.length

function srt() {
setTimeout(() => {
    x = Math.floor(Math.random() * arraynum)

    document.getElementById('question').innerHTML = ar[x][0]
    document.getElementById('cat').innerHTML = ar[x][1]
    document.getElementById('an01').innerHTML = ar[x][2]
    document.getElementById('an02').innerHTML = ar[x][3]
    document.getElementById('an03').innerHTML = ar[x][4]
}, 1000);
}

function reset() {
    if (arraynum === 0) {
        document.getElementById('question').innerHTML = 'No more available questions'
        document.getElementById('cat').innerHTML = 'Thanks for playing'
        document.getElementById('an01').innerHTML = '7'
        document.getElementById('an02').innerHTML = '7'
        document.getElementById('an03').innerHTML = '7'
    }
        x = Math.floor(Math.random() * arraynum)
    
        document.getElementById('question').innerHTML = ar[x][0]
        document.getElementById('cat').innerHTML = ar[x][1]
        document.getElementById('an01').innerHTML = ar[x][2]
        document.getElementById('an02').innerHTML = ar[x][3]
        document.getElementById('an03').innerHTML = ar[x][4]
    }

function ans01() {
    a = document.getElementById('an01').innerHTML
    b = ar[x][5]

    if (a === b) {
        win++
        amount++
    } else {
        amount++
    }
    ar.splice(x,1)
    arraynum--
    document.getElementById('wl').innerHTML = 'Correct ' + win + '/' + amount
    reset()
};

function ans02() {
    a = document.getElementById('an02').innerHTML
    b = ar[x][5]

    if (a === b) {
        win++
        amount++
    } else {
        amount++
    }
    ar.splice(x,1)
    arraynum--
    document.getElementById('wl').innerHTML = 'Correct ' + win + '/' + amount
    reset()
};

function ans03() {
    a = document.getElementById('an03').innerHTML
    b = ar[x][5]

    if (a === b) {
        win++
        amount++
    } else {
        amount++
    }
    ar.splice(x,1)
    arraynum--
    document.getElementById('wl').innerHTML = 'Correct ' + win + '/' + amount
    reset()
};
