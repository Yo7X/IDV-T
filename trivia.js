let ar = [
    ['What character got the first SS tier skin?', 'Skins', 'Perfumer', 'Priestess', 'Coordinator', 'Perfumer'],
    ['When was the golbal version of idv released', 'General', 'July 2018', 'May 2020', 'March 2017', 'July 2018'],
    ['The limited skin from season 10 belongs to what character?', 'Skins', 'Doctor', 'Grave keeper', 'Bloody queen', 'Grave keeper'],
    ['What is a primed cipher', 'Vocabulary', 'A cipher with no decoding progress', 'The last cipher', 'A cipher with 99% progress', 'A cipher with 99% progress'],
    ['The ripper can throw his foggy blade through thin walls', 'Game mechanics', 'Yes', 'No', 'Patched bug', 'Yes'],
    ['How many curse stacks can enchantress have at one time?', 'Game mechanics', '3', '5', 'No limit', '5'],
    ['What was the theem for COA I', 'Skins', 'Pirates', 'Raceing', 'Steam punk', 'Pirates'],
    ['When prospector skill "Attraction" is activated how much faster does he run?', 'Game mechanics', '10%', '20%', '50%', '50%'],
    ['How many 4 sided dice can be carried over from one season to another?', 'General', 'no limit', '100', '1000', '100'],
    ['The "Im stuck" ping is also used to imforme your team that you are', 'Vocabulary', 'lagging', 'In a bod kitting spot', 'Need suport urgently', 'lagging'],
    ['What is the max amount of persona points you can spend per page?', 'General', '100', '120', '150', '120'],
    ['What is the map with the most character spawn groups', 'obscure', 'Lakeside village', 'Moonlit river park', 'Leos memory', 'Leos memory'],
    //['question', 'catagory', 'answer1', 'answer2', 'answer3', 'right answer'],
    //['question', 'catagory', 'answer1', 'answer2', 'answer3', 'right answer'],
];

//catagorys
//Skins
//Vocabulary
//General
//Game mechanics
//obscure

win = 0
amount = 0

x = Math.floor(Math.random() * ar.length)
answer = ar[x][5]

document.getElementById('question').innerHTML = ar[x][0]
document.getElementById('cat').innerHTML = ar[x][1]
document.getElementById('ta1').innerHTML = ar[x][2]
document.getElementById('ta2').innerHTML = ar[x][3]
document.getElementById('ta3').innerHTML = ar[x][4]

ar.splice(x,1)

function reset() {
    if (ar.length == 0) {
        document.getElementById('question').innerHTML = 'No more available questions'
        document.getElementById('cat').innerHTML = 'Thanks for playing'
        document.getElementById('ta1').style.display = 'none'
        document.getElementById('ta2').style.display = 'none'
        document.getElementById('ta3').style.display = 'none'
    }
    
    x = Math.floor(Math.random() * ar.length)
    answer = ar[x][5]
    
    document.getElementById('question').innerHTML = ar[x][0]
    document.getElementById('cat').innerHTML = ar[x][1]
    document.getElementById('ta1').innerHTML = ar[x][2]
    document.getElementById('ta2').innerHTML = ar[x][3]
    document.getElementById('ta3').innerHTML = ar[x][4]

    ar.splice(x,1)
}

function ans01() {
    a = document.getElementById('ta1').innerHTML

    if (a == answer) {
        win++
        amount++
    } else {
        amount++
    }
    document.getElementById('wl').innerHTML = 'Correct ' + win + '/' + amount
    reset()
};

function ans02() {
    a = document.getElementById('ta2').innerHTML

    if (a == answer) {
        win++
        amount++
    } else {
        amount++
    }
    document.getElementById('wl').innerHTML = 'Correct ' + win + '/' + amount
    reset()
};

function ans03() {
    a = document.getElementById('ta3').innerHTML

    if (a == answer) {
        win++
        amount++
    } else {
        amount++
    }
    document.getElementById('wl').innerHTML = 'Correct ' + win + '/' + amount
    reset()
};

console.log("trivia loaded")