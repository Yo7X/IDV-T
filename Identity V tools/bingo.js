var myArray = [];
var randomNumbers = [];
var ids = 1;

function scramble(){

    randomNumbers = [];
    ids = 1;
    cut = 0;

    myArray = [
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

for (var i = 0; i < 17; i++) {
    var randomIndex = Math.floor(Math.random() * myArray.length);
    randomNumbers.push(myArray[randomIndex]);
    myArray.splice(randomIndex, 1);

    x = 'card_' + ids
    document.getElementById(x).style.backgroundColor = 'rgba(20, 14, 82, 0.582)'
    document.getElementById(x).innerHTML = randomNumbers[cut]
    ids++
    cut++
}
}