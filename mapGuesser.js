document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('mg_easy').addEventListener("click", function() {
        document.getElementById('mg_dificultyContainer').style.display = "none";
        document.getElementById('mg_gameContainer').style.display = "block";
        dificulty = 'easy';
        rollMap()
    });

    document.getElementById('mg_medium').addEventListener("click", function () {
        document.getElementById('mg_dificultyContainer').style.display = "none";
        document.getElementById('mg_gameContainer').style.display = "block";
        dificulty = 'med';
        rollMap()
    });

    document.getElementById('mg_hard').addEventListener("click", function () {
        document.getElementById('mg_dificultyContainer').style.display = "none";
        document.getElementById('mg_gameContainer').style.display = "block";
        dificulty = 'hard';
        rollMap()
    });

    document.getElementById('mg_return').addEventListener('click', function() {
        mg_replay();
    });




    
    document.getElementById('mg_button01').addEventListener("click", function () {
        switch (dificulty) {
            case "easy":
                if (easyQuestions[x][4] == document.getElementById('mg_button01').innerHTML) {
                    score++
                }
            break;
            case "med":
                if (medQuestions[x][4] == document.getElementById('mg_button01').innerHTML) {
                    score++
                }
            break;
            case "hard":
                if (hardQuestions[x][4] == document.getElementById('mg_button01').innerHTML) {
                    score++
                }
            break;
        }
        

        calculate()
    });

    document.getElementById('mg_button02').addEventListener("click", function () {
        switch (dificulty) {
            case "easy":
                if (easyQuestions[x][4] == document.getElementById('mg_button02').innerHTML) {
                    score++
                }
                break;
            case "med":
                if (medQuestions[x][4] == document.getElementById('mg_button02').innerHTML) {
                    score++
                }
                break;
            case "hard":
                if (hardQuestions[x][4] == document.getElementById('mg_button02').innerHTML) {
                    score++
                }
                break;
        }

        calculate()
    });

    document.getElementById('mg_button03').addEventListener("click", function () {
        switch (dificulty) {
            case "easy":
                if (easyQuestions[x][4] == document.getElementById('mg_button03').innerHTML) {
                    score++
                }
                break;
            case "med":
                if (medQuestions[x][4] == document.getElementById('mg_button03').innerHTML) {
                    score++
                }
                break;
            case "hard":
                if (hardQuestions[x][4] == document.getElementById('mg_button03').innerHTML) {
                    score++
                }
                break;
        }

        calculate()
    });



    function calculate() {
        attempts++
        document.getElementById("mg_score").innerHTML = `Score ${score}/${attempts}`
        switch (dificulty) {
            case "easy":
                easyQuestions.splice(x, 1)
            break;
            case "med":
                medQuestions.splice(x, 1)
            break;
            case "hard":
                hardQuestions.splice(x, 1)
            break;
        }
        rollMap()
    }
});


let dificulty;
let score = 0;
let attempts = 0;
let x;

const easyQuestions = [
    ['mapPictures/arms_easy00.png', 'Arms factory', 'Lakeside village', 'China town', 'Arms factory'],
    ['mapPictures/lakeside_easy00.png', 'Red church', 'Golden cave', 'Lakeside village', 'Lakeside village'],
    ['mapPictures/LeosMemory_easy00.png', 'Sacred heart hospital', 'Leos memory', 'Moonlit river park', 'Leos memory'],
    ['mapPictures/leosMemory_easy01.png', 'Leos memory', 'Arms factory', 'Lakeside village', 'Leos memory']

    //['tierlist/B.png', 'response 1', 'responce 2', 'responce 3', 'correct answer']
];

const medQuestions = [
    ['mapPictures/arms_medium00.png', 'Red church', 'Arms factory', 'China town', 'Arms factory'],
    ['mapPictures/lakeside_medium00.png', 'China town', 'Golden cave', 'Lakeside village', 'Lakeside village'],
    ['mapPictures/LeosMemory_medium00.png', 'Eversleeping town', 'Leos memory', 'Arms factory', 'Leos memory'],
];

const hardQuestions = [
    ['mapPictures/arms_hard00.png', 'China town', 'Golden cave', 'Arms factory', 'Arms factory'],
    ['mapPictures/arms_hard01.png', 'Arms factory', 'Red church', 'Eversleeping town', 'Arms factory'],
    ['mapPictures/lakeside_hard00.png', 'Moonlit river park', 'Arms factory', 'Lakeside village', 'Lakeside village'],
    ['mapPictures/lakeside_hard01.png', 'Leos memory', 'Lakeside village', 'Arms factory', 'Lakeside village'],
    ['mapPictures/LeosMemory_hard00.png', 'Eversleeping town', 'Leos memory', 'Arms factory', 'Leos memory'],
    ['mapPictures/LeosMemory_hard01.png', 'Leos memory', 'Sacred heart hospital', 'Lakeside village', 'Leos memory'],
];

function rollMap() {
    switch (dificulty) {
        case "easy":
            if (easyQuestions.length != 0) {
                x = Math.floor(Math.random() * easyQuestions.length);

                document.getElementById('mg_map').src = easyQuestions[x][0]

                document.getElementById('mg_button01').innerHTML = easyQuestions[x][1]
                document.getElementById('mg_button02').innerHTML = easyQuestions[x][2]
                document.getElementById('mg_button03').innerHTML = easyQuestions[x][3]
            } else {
                alert('No more easy maps \nSee \"Page updates\" for more details')
                mg_replay()
            }
        break;
        case "med":
            if (medQuestions.length != 0) {
                x = Math.floor(Math.random() * medQuestions.length);

                document.getElementById('mg_map').src = medQuestions[x][0]

                document.getElementById('mg_button01').innerHTML = medQuestions[x][1]
                document.getElementById('mg_button02').innerHTML = medQuestions[x][2]
                document.getElementById('mg_button03').innerHTML = medQuestions[x][3]
            } else {
                alert('No more medium maps \nSee \"Page updates\" for more details')
                mg_replay()
            }
        break;
        case "hard":
            if (hardQuestions.length != 0) {
                x = Math.floor(Math.random() * hardQuestions.length);

                document.getElementById('mg_map').src = hardQuestions[x][0]

                document.getElementById('mg_button01').innerHTML = hardQuestions[x][1]
                document.getElementById('mg_button02').innerHTML = hardQuestions[x][2]
                document.getElementById('mg_button03').innerHTML = hardQuestions[x][3]
            } else {
                alert('No more hard maps \nSee \"Page updates\" for more details')
                mg_replay()
            }
        break;
    }
}

function mg_replay() {
    document.getElementById('mg_dificultyContainer').style.display = "block";
    document.getElementById('mg_gameContainer').style.display = "none";
};

console.log("map guesser loaded")