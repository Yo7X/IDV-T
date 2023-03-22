let sum

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
    `Hermit`,
    `night watch`
];

let trait = [
    `Listen`,
    `Abnormal`,
    `Excitement`,
    `Patroller`,
    `Teleport`,
    `Peepers`,
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

main_traits = [
    `Broken windows`,
    `Borrowed time`,
    `Tide turner`,
    'Fly wheel'
]

side_taits = [
    ['Survivors instinct', '1 air walk', '2 air walk', '3 air walk', 'Survivors instinct', '1 heal', '2 heal', '3 heal'],
    ['Prisoners delema', '1 will to survive', '2 will to survive', '3 will to survive', 'Prisoners delema', '1 great power', '2 great power', '3 great power'],
    ['Sneak', '1 shelter', '2 shelter', '3 shelter', 'Sneak', '1 doctor', '2 doctor', '3 doctor'],
    ['Distraction', '1 snooze', '2 snooze', '3 snooze', 'Distraction', '1 self deception', '2 self deception', '3 self deception']
]

minor_traits = [
    [`mutual support`, `sybiotic effect`],
    [`exit path`, `brewing effect`],
    [`cold`, `Mech elite`],
    [`telepathy`, `companion effect`],
]

function randomS3() {
    sum = ``

    x = Math.floor(Math.random() * main_traits.length)
    sum+= main_traits[x] += `<br>`
    main_traits.splice(x,1)

    y = Math.floor(Math.random() * main_traits.length)
    sum+= main_traits[y] += `<br>`

    swtch = Math.floor(Math.random() * 2)
    r = 0

    if (swtch == 1) {
        r = 4
    }

    z = Math.floor(Math.random() * side_taits.length)
    x = Math.floor(Math.random() * 4) + r
    sum+= '<br>' + side_taits[z][x]

    side_taits.splice(z,1)

    swtch = Math.floor(Math.random() * 2)
    r = 0

    if (swtch == 1) {
        r = 4
    }

    z = Math.floor(Math.random() * side_taits.length)
    x = Math.floor(Math.random() * 4) + r
    sum+= '<br>' + side_taits[z][x]


    z = Math.floor(Math.random() * minor_traits.length)
    x = Math.floor(Math.random() * 2)
    sum+= '<br><br>' + minor_traits[z][x]

    sum+= '<br> <h5> As of right now some imposible webs are generated I will fix this soon </h5>'


    document.getElementById('rndm_result').innerHTML = 'Your persona is <br><br>' + '<h3>' + sum + '</h3>'

    //Reset arrays
    main_traits = [`Broken windows`,`Borrowed time`,`Tide turner`,'Fly wheel']

    side_taits = [
        ['Survivors instinct', '1 air walk', '2 air walk', '3 air walk', 'Survivors instinct', '1 heal', '2 heal', '3 heal'],
        ['Prisoners delema', '1 will to survive', '2 will to survive', '3 will to survive', 'Prisoners delema', '1 great power', '2 great power', '3 great power'],
        ['Sneak', '1 shelter', '2 shelter', '3 shelter', 'Sneak', '1 doctor', '2 doctor', '3 doctor'],
        ['Distraction', '1 snooze', '2 snooze', '3 snooze', 'Distraction', '1 self deception', '2 self deception', '3 self deception']
    ]
}

function randomS4() {
    let random = survivors[Math.floor(Math.random() * survivors.length)]
    let random2 = survivors[Math.floor(Math.random() * survivors.length)]
    let random3 = survivors[Math.floor(Math.random() * survivors.length)]
    let random4 = survivors[Math.floor(Math.random() * survivors.length)]
    randomS3()

    document.getElementById('rndm_result').innerHTML = '<h2>' + random + '</h2> <h3> ' + random2 + ', ' + random3 + ', ' + random4 + `</h3>` + sum

}

function randomH1() {
    let random = hunter[Math.floor(Math.random() * hunter.length)]

    document.getElementById('rndm_result').innerHTML = `Your random hunter is <br> <h1>` + random + `</h1>`
}

function randomH2() {
    let random = trait[Math.floor(Math.random() * trait.length)]

    document.getElementById('rndm_result').innerHTML = `Your random trait is <br> <h1>` + random + `</h1>`
}

main_traitsH = [
    `Confined space`,
    `Insolence`,
    `Detention`,
    'Trump card'
]

side_taitsH = [
    ['Panic', '1 beserker', '2 beserker', '3 beserker', 'Panic', '1 rage', '2 rage', '3 rage',],
    ['exhibitionist', '1 street sweeper', '2 street sweeper', '3 street sweeper','exhibitionist', '1 hunt', '2 hunt', '3 hunt',],
    ['quenching effect', '1 controle freak', '2 controle freak', '3 controle freak', 'quenching effect', '1 giant claw', '2 giant claw', '3 giant claw',],
    ['annoucement', '1 wanted order', '1 wanted order', '1 wanted order', 'annoucement', '1 impact', '1 impact', '1 impact',]
]

minor_traitsH = [
    [`nostalgic`, `mischivious`],
    [`controle freak`, `clostrophobia`],
    [`no survivors`, `impulsive`],
    [`deperate fight`, `addiction`],
]

function randomH3() {
    sum = ``

    x = Math.floor(Math.random() * main_traitsH.length)
    sum+= main_traitsH[x] += `<br>`
    main_traitsH.splice(x,1)

    y = Math.floor(Math.random() * main_traitsH.length)
    sum+= main_traitsH[y] += `<br>`

    swtch = Math.floor(Math.random() * 2)
    r = 0

    if (swtch == 1) {
        r = 4
    }

    z = Math.floor(Math.random() * side_taitsH.length)
    x = Math.floor(Math.random() * 4) + r
    sum+= '<br>' + side_taitsH[z][x]

    side_taitsH.splice(z,1)

    swtch = Math.floor(Math.random() * 2)
    r = 0

    if (swtch == 1) {
        r = 4
    }

    z = Math.floor(Math.random() * side_taitsH.length)
    x = Math.floor(Math.random() * 4) + r
    sum+= '<br>' + side_taitsH[z][x]


    z = Math.floor(Math.random() * minor_traitsH.length)
    x = Math.floor(Math.random() * 2)
    sum+= '<br><br>' + minor_traitsH[z][x]

    sum+= '<br> <h5> As of right now some imposible webs are generated I will fix this soon </h5>'


    document.getElementById('rndm_result').innerHTML = 'Your persona is <br><br>' + '<h3>' + sum + '</h3>'

    //Reset arrays
    main_traitsH = [`Confined space`,`Insolence`,`Detention`,'Trump card']

    side_taitsH = [
        ['Panic', '1 beserker', '2 beserker', '3 beserker', 'Panic', '1 rage', '2 rage', '3 rage',],
        ['exhibitionist', '1 street sweeper', '2 street sweeper', '3 street sweeper','exhibitionist', '1 hunt', '2 hunt', '3 hunt',],
        ['quenching effect', '1 controle freak', '2 controle freak', '3 controle freak', 'quenching effect', '1 giant claw', '2 giant claw', '3 giant claw',],
        ['annoucement', '1 wanted order', '1 wanted order', '1 wanted order', 'annoucement', '1 impact', '1 impact', '1 impact',]
    ]
}

function randomH4() {
    let random = hunter[Math.floor(Math.random() * hunter.length)]
    let random2 = trait[Math.floor(Math.random() * trait.length)]
    randomH3()

    document.getElementById('rndm_result').innerHTML = '<h2>' + random + '</h2> <h3>' + random2 + '</h3><h4>' + sum + '</h4>'
}
