let essence001 = [
    [`Goldsmith`, `1`, `S`],

    [`Spring Hand`, `1`, `A`],
    [`Punk`, `1`, `A`],

    [`Barber`, `1`, `B`],
    [`Distiller`, `1`, `B`],
    [`Harley Rider`, `1`, `B`],
    [`Lasso`, `1`, `B`],
    [`Party Host`, `1`, `B`]
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

let ownedskins = [];

function skinivn() {
    document.getElementById("skinstorage").innerHTML = ownedskins
}

function pull() {
    let essencenum = document.getElementById("sel02").value

    if (essencenum == 'a') {
        x = Math.floor(Math.random() * essence001.length)

        let found = false;
        for (let i = 0; i < ownedskins.length; i++) {
            if(essence001[x][0] == ownedskins[i][0]) {
                found = true;
                break;
            }
        }

        if (found) {
            document.getElementById("skinstorage").innerHTML = 'You got shards'
        } else {
            ownedskins.push(essence001[x])
            document.getElementById("skinstorage").innerHTML = 'You unlocked ' + essence001[x][0]
        }
    }

    if (essencenum == 'b') {
        alert('nah')
    }
}
