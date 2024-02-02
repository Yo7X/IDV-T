document.getElementById('addMapSize').addEventListener('click', function () {
    document.getElementById('canvas_dis').height = document.getElementById('canvas_dis').height + 25
    document.getElementById('canvas_dis').width = document.getElementById('canvas_dis').width + 25
    clear_map()

    if (document.getElementById('canvas_dis').width > 500) {
        document.getElementById('cavasDisplayContainer').style.display = 'flex'
        document.getElementById('cavasDisplayContainer').style.marginLeft = '15px'
    }
})

document.getElementById('subtractMapSize').addEventListener('click', function () {
    document.getElementById('canvas_dis').height = document.getElementById('canvas_dis').height - 25
    document.getElementById('canvas_dis').width = document.getElementById('canvas_dis').width - 25
    clear_map()

    if (document.getElementById('canvas_dis').width <= 500) {
        document.getElementById('cavasDisplayContainer').style.display = 'inline-block'
        document.getElementById('cavasDisplayContainer').style.marginLeft = '0px'
    }
})




const canvas = document.getElementById("canvas_dis");
const ctx = canvas.getContext("2d");

const imagePaths = [
    "map_parts/Arms_factory.png",
    "map_parts/Red_church.png",
    "map_parts/Sacred_heart_hospital.png",
    "map_parts/Lakeside_village.png",
    "map_parts/Moonlit_river_park.png",
    "map_parts/Leos_memory.png",
    "map_parts/Eversleeping_town.png",
    "map_parts/China_town.png",

    "map_parts/Survivor.png",
    "map_parts/Hunter.png",
    "map_parts/Dungeon.png",
    "map_parts/Cipher.png"
];

const images = {};

function preloadImages() {
    for (const imagePath of imagePaths) {
        const img = new Image();
        img.src = imagePath;
        images[getImageName(imagePath)] = img;
    }
}

function getImageName(path) {
    return path.split("/").pop().split(".")[0];
}

preloadImages();

var icon = images["Survivor"]
var iconSize = 25
var selectedIconSize = 5
var selectedMap = images["Arms_factory"]
var selectedIcon = images["Survivor"]
var selectedColor = "Red"
var selectedDrawSize = "1"
var freedrawSize = 2
var freedraw = false
var freedrawColor = "red"

let drawing
let clock

//Draw icons onclick
canvas.addEventListener("mousedown", function (evt) {
    var rect = canvas.getBoundingClientRect();
    if (freedraw == false) {
        ctx.drawImage(icon, evt.clientX - rect.left - 10, evt.clientY - rect.top - 10, iconSize, iconSize);
    } else {
        drawing = true
    }
});

canvas.addEventListener("mousemove", function (evt) {
    if (drawing == true) {
        var rect = canvas.getBoundingClientRect();
        ctx.beginPath();
        ctx.arc(evt.clientX - rect.left, evt.clientY - rect.top, freedrawSize, 0, 2 * Math.PI);
        ctx.fillStyle = freedrawColor;
        ctx.fill();
    }
});



canvas.addEventListener("mouseup", function () {
    drawing = false;
    clearInterval(clock)
});


//Draw selected map
function draw_map(selectElement) {
    selectedMap = selectElement.options[selectElement.selectedIndex].textContent;

    switch (selectedMap) {
        case "Arms factory":
            ctx.drawImage(images["Arms_factory"], 0, 0, canvas.width, canvas.height);
            break;
        case "Red church":
            ctx.drawImage(images["Red_church"], 0, 0, canvas.width, canvas.height);
            break;
        case "Sacred heart hospital":
            ctx.drawImage(images["Sacred_heart_hospital"], 0, 0, canvas.width, canvas.height);
            break;
        case "Lakeside village":
            ctx.drawImage(images["Lakeside_village"], 0, 0, canvas.width, canvas.height);
            break;
        case "Moonlit river park":
            ctx.drawImage(images["Moonlit_river_park"], 0, 0, canvas.width, canvas.height);
            break;
        case "Leos memory":
            ctx.drawImage(images["Leos_memory"], 0, 0, canvas.width, canvas.height);
            break;
        case "Eversleeping town":
            ctx.drawImage(images["Eversleeping_town"], 0, 0, canvas.width, canvas.height);
            break;
        case "China town":
            ctx.drawImage(images["China_town"], 0, 0, canvas.width, canvas.height);
            break;
    }
}

function first_draw() {
    console.log('First draw run')
    ctx.drawImage(images["Arms_factory"], 0, 0, canvas.width, canvas.height);
}

function clear_map() {
    switch (selectedMap) {
        case "Arms factory":
            ctx.drawImage(images["Arms_factory"], 0, 0, canvas.width, canvas.height);
            break;
        case "Red church":
            ctx.drawImage(images["Red_church"], 0, 0, canvas.width, canvas.height);
            break;
        case "Sacred heart hospital":
            ctx.drawImage(images["Sacred_heart_hospital"], 0, 0, canvas.width, canvas.height);
            break;
        case "Lakeside village":
            ctx.drawImage(images["Lakeside_village"], 0, 0, canvas.width, canvas.height);
            break;
        case "Moonlit river park":
            ctx.drawImage(images["Moonlit_river_park"], 0, 0, canvas.width, canvas.height);
            break;
        case "Leos memory":
            ctx.drawImage(images["Leos_memory"], 0, 0, canvas.width, canvas.height);
            break;
        case "Eversleeping town":
            ctx.drawImage(images["Eversleeping_town"], 0, 0, canvas.width, canvas.height);
            break;
        case "China town":
            ctx.drawImage(images["China_town"], 0, 0, canvas.width, canvas.height);
            break;
        default:
            ctx.drawImage(images["Arms_factory"], 0, 0, canvas.width, canvas.height);
            break;
    }
}

function draw_icon(selectElement) {
    selectedIcon = selectElement.options[selectElement.selectedIndex].textContent;

    switch (selectedIcon) {
        case "Survivor":
            icon = images["Survivor"];
            freedraw = false
            break;
        case "Hunter":
            icon = images["Hunter"];
            freedraw = false
            break;
        case "Cipher":
            icon = images["Cipher"];
            freedraw = false
            break;
        case "Dungeon":
            icon = images["Dungeon"];
            freedraw = false
            break;
        case "Freedraw":
            freedraw = true
            break;
    }
}

function resize_icon(selectElement) {
    selectedIcon = selectElement.options[selectElement.selectedIndex].textContent;

    switch(selectedIcon) {
        case "1":
            iconSize = 25
        break;
        case "2":
            iconSize = 40
        break;
        case "3":
            iconSize = 60
        break;
        case "4":
            iconSize = 80
        break;
        case "5":
            iconSize = 100
        break;
    }
}

function resize_freedraw(selectElement) {
    selectedDrawSize = selectElement.options[selectElement.selectedIndex].textContent;

    switch(selectedDrawSize) {
        case "1":
            freedrawSize = 2
        break;
        case "2":
            freedrawSize = 5
        break;
        case "3":
            freedrawSize = 8
        break;
        case "4":
            freedrawSize = 10
        break;
        case "5":
            freedrawSize = 15
        break;
    }
}


function change_draw_color(selectElement) {
    selectedColor = selectElement.options[selectElement.selectedIndex].textContent;

    switch(selectedColor) {
        case "Red":
            freedrawColor = "red"
        break;
        case "White":
            freedrawColor = "white"
        break;
        case "Black":
            freedrawColor = "black"
        break;
        case "Green":
            freedrawColor = "green"
        break;
    }
}
