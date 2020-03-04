/*const username = document.querySelector("#userName");
let isBig = false;
const usernameEntered = prompt("Please Provide Your User Name");

username.innerText = usernameEntered;
let numberOfCookies = 0;
let scoreHolder = document.querySelector("#score");
const picture = document.querySelector("#pic");
const cookieHolder = document.querySelector("#cookie");
const clickSound = document.querySelector("#audio");


picture.addEventListener("click", function() {


    if (isBig == false) {
        this.style.transform = "scale(1.2)";


        this.style.transition = "transform 100ms linear";
    } else {
        this.style.transform = "scale(1)";

        this.style.transition = "transform 100ms linear";
    }
    isBig = !isBig;

    numberOfCookies++;
    scoreHolder.innerText = numberOfCookies;
    cookieHolder.innerText = numberOfCookies > 1 ? "Cookies" : "Cookie";
    clickSound.volume = 3;
    clickSound.play();
});*/