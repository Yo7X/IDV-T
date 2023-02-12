let survivors = [
    'Lucky guy',
    `Doctor`, 
    'Lawyer', 
    'Thief',
    `Gardener`,
    `Magician`,
    `Explorer`,
    `Mercenary`,
    `Coordinator`,
    `Mechanic`,
    `Forward`,
    `Mind's Eye`,
    `Priestess`,
    `Perfumer`,
    `Cowboy`,
    `Female Dancer`,
    `Seer`,
    `Embalmer`,
    `Prospector`,
    `Enchantress`,
    `Wildling`,
    `Acrobat`,
    `First Officer`,
    `Barmaid`,
    `Postman`,
    `Grave Keeper`,
    `Prisoner`,
    `Entomologist`,
    `Painter`,
    `Batter`,
    `Toy Merchant`,
    `Patient`,
    `Psychologist`,
    `Novelist`,
    `Little Girl`,
    `Weeping Clown`,
    `Professor`,
    `Antiquarian`
];

let hunter = [
    'Hell Ember',
    `Smiley Face`, 
    'The Ripper', 
    'Gamekeeper',
    `Soul Weaver`,
    `Geisha`,
    `Feaster`,
    `Wu Chang`,
    `Photographer`,
    `Mad Eyes`,
    `Dream Witch`,
    `Axe Boy`,
    `Evil Reptilian`,
    `Bloody Queen`,
    `Guard 26`,
    `Disciple`,
    `Violinist`,
    `Sculptor`,
    `Undead`,
    `Breaking Wheel`,
    `Naiad`,
    `Wax Artis`,
    `Nightmare`,
    `Clerk`,
    `Hermit`
];

let trait = [
    `Listen`,
    `Abnormal`,
    `Excitement`,
    `Patroller`,
    `Teleport`,
    `Peeper`,
    `Blink`
];

function randomS1() {
    let random = survivors[Math.floor(Math.random() * survivors.length)]

    document.getElementById('rndm_result').innerHTML = `Your random survivor is <br> <h1>` + random + `</h1>`
}

function randomS2() {
    let random = survivors[Math.floor(Math.random() * survivors.length)]
    let random2 = survivors[Math.floor(Math.random() * survivors.length)]
    let random3 = survivors[Math.floor(Math.random() * survivors.length)]
    let random4 = survivors[Math.floor(Math.random() * survivors.length)]

    document.getElementById('rndm_result').innerHTML = `Your random survivors are <br> <h2>` + random + ', ' + random2 + ', ' + random3 + ', ' + random4 + `</h2>`
}

let right = [
    `Borrowed time`,
    `1 Compesate`,
    `2 Compesate`,
    `3 Compesate`,
    `1 Escape`,
    `2 Escape`,
    `3 Escape`,
    `Curiosity`,
]

function randomS3() {
}

function randomH1() {
    let random = hunter[Math.floor(Math.random() * hunter.length)]

    document.getElementById('rndm_result').innerHTML = `Your random hunter is <br> <h1>` + random + `</h1>`
}

function randomH2() {
    let random = trait[Math.floor(Math.random() * trait.length)]

    document.getElementById('rndm_result').innerHTML = `Your random trait is <br> <h1>` + random + `</h1>`
}

function randomH3() {
        alert(`I'm still working on this one`)
}

function randomH4() {
        alert(`I'm still working on this one`)
}
