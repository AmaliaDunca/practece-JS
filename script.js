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
    char.classList.toggle("fadeCSS")

};





