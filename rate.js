console.log('rate loaded')

let characterList = [
    `tierlist/Batter.png`,
    `tierlist/Antiquatian.png`
];

let ratedCharacterList = [];

let rating = null;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('rate_one').addEventListener('click', () => {
        rating = 1
        switchChar()
    });

    document.getElementById('rate_two').addEventListener('click', () => {
        rating = 2
        switchChar()
    });

    document.getElementById('rate_three').addEventListener('click', () => {
        rating = 3
        switchChar()
    });

    document.getElementById('rate_four').addEventListener('click', () => {
        rating = 4
        switchChar()
    });

    document.getElementById('rate_five').addEventListener('click', () => {
        rating = 5
        switchChar()
    });
});

function switchChar() {
    image = document.getElementById('rate_image')

    ratedCharacterList.push([image.src, rating])

    if (characterList.length != 0) {
        image.src = characterList[0]

        characterList.splice(0, 1)
    } else {
        alert('none left')
    }
};