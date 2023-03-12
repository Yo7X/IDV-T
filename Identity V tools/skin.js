let essence001 = [
    `Goldsmith`,

    `Spring Hand`,
    `Punk`,

    `Barber`,
    `Distiller`,
    `Harley Rider`,
    `Lasso`,
    `Party Host`
];

let essence002 = [
    [`Goldsmith`, `1`, `S`],

    [`Spring Hand`, `1`, `A`],
    [`Punk`, `1`, `A`],

    [`Barber`, `1`, `B`],
    [`Distiller`, `1`, `B`],
    [`Harley Rider`, `1`, `B`],
    [`Lasso`, `1`, `B`],
    [`Party Host`, `1`, `B`]
];

let x

function pull() {
    let e1 = document.getElementById("sel02").value

    if (e1 == 'a') {
        x = Math.floor(Math.random() * essence001.length)
        if (essence001 == 0) {
            alert('You have all the skins')
        } else {
        document.getElementById("skinstorage").innerHTML += essence001[x] + '<br>'
        essence001.splice(x, 1)
        }
        console.log(x)
    }

    if (e1 == 'b') {
        x = Math.floor(Math.random() * essence002.length)
        if (essence002 == 0) {
            alert('You have all the skins')
        } else {
            document.getElementById("skinstorage").innerHTML += essence002[x] + '<br>'
            essence002.splice(x, 1)
        }
    }
}

function test() {
    for (let i = 0; i < 100; i++){
        y++
        z = 20
        essence001.push([y, 20])
    }
    console.log(essence001)
}
