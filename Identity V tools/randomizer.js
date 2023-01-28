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

function randomS1() {
    let random = survivors[Math.floor(Math.random() * survivors.length)]

    document.getElementById('rndm_result').innerHTML = random
}

function randomS2() {
    let random = survivors[Math.floor(Math.random() * survivors.length)]
    let random2 = survivors[Math.floor(Math.random() * survivors.length)]
    let random3 = survivors[Math.floor(Math.random() * survivors.length)]
    let random4 = survivors[Math.floor(Math.random() * survivors.length)]

    document.getElementById('rndm_result').innerHTML = random + ', ' + random2 + ', ' + random3 + ', ' + random4
}

function randomS3() {
        alert(`I'm still working on this one`)
}

function randomH1() {
    let random = hunter[Math.floor(Math.random() * hunter.length)]

    document.getElementById('rndm_result').innerHTML = random
}

function randomH2() {
        alert(`I'm still working on this one`)
}

function randomH3() {
        alert(`I'm still working on this one`)
}

function randomH4() {
        alert(`I'm still working on this one`)
}