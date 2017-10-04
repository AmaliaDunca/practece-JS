let char = document.querySelector("img.hero");
let shakeButton = document.querySelector("#shake");
shakeButton.addEventListener("click", makeShake);

function makeShake() {
    console.log("make shake");
    char.classList.toggle("shakeCSS");
};

/* jump character*/

let jumpButton = document.querySelector("#jump");
jumpButton.addEventListener("click", makeJump);

function makeJump() {
    console.log("make jump");
    char.classList.toggle("jumpCSS");
}
/*walk*/

let walkButton = document.querySelector("#walk");
walkButton.addEventListener("click", makeWalk);

function makeWalk() {
    console.log("make walk");
    char.classList.toggle("walkCSS");
}

/* kill it*/

let shootButton = document.querySelector("#shoot");
shootButton.addEventListener("click", makeDead);

function makeDead() {
    console.log("make dead");
    char.classList.toggle("deadCSS");
}

/* fade*/

let fadeButton = document.querySelector("#fade");
fadeButton.addEventListener("click", makeFade);

function makeFade() {
    console.log("make fade");
    char.classList.toggle("fadeCSS");

}

/* fly*/

let flyButton = document.querySelector("#fly");
flyButton.addEventListener("click", flyHigh);

function flyHigh () {
    console.log("fly high/low");
    char.classList.toggle("flyCSS");
}
 /* move30*/

let move30Button = document.querySelector("#move30");
move30Button.addEventListener("click", move);

function move () {
    console.log("move30");
    char.classList.toggle("move30CSS");
}

/* move from30*/

let movechar = document.querySelector("#moveOut");

movechar.addEventListener("click", moveFrom30);

function moveFrom30() {
    console.log("moveFrom30");
    char.classList.toggle("moveFrom");

}

/*play jumping*/

let jumping = document.querySelector("#play");

jumping.addEventListener("click", jumpBackFourth);

function jumpBackFourth() {
    console.log("jumpBackFourth");
    char.classList.toggle("playCSS");

}

/*glow*/

let glowing = document.querySelector("#glow");

glowing.addEventListener("click", glowIt);

function glowIt() {
    console.log("glow it baby");
    char.classList.toggle("glowCSS");

}




