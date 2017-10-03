let char = document.querySelector("img.hero");
let shakeButton = document.querySelector("#shake");
shakeButton.addEventListener("click", makeShake);

function makeShake(){
    console.log("make shake");
    char.classList.toggle("shakeCSS");
};
