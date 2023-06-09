// Variables
let firstShoes = document.querySelector('.shoes__pictures--one');
let secondShoes = document.querySelector('.shoes__pictures--two');
let thirdShoes = document.querySelector('.shoes__pictures--three');

let x = document.querySelector('.fa-circle-xmark');
let bigger = document.querySelector('.big__shoes');
let firstBig = document.querySelector('.pictures__one--big');
let secondBig = document.querySelector('.pictures__two--big');
let thirdBig = document.querySelector('.pictures__three--big');

let laptop = window.matchMedia("(min-width:1024px)");


// Events
x.addEventListener("click", noX);
firstShoes.addEventListener("click", firstShoesOn);
secondShoes.addEventListener("click", secondShoesOn);
thirdShoes.addEventListener("click", thirdShoesOn);
laptop.addEventListener('change', biggerOn, firstShoesOn, secondShoesOn, thirdShoesOn);


// Functions

function biggerOn() {
    if (window.matchMedia("(min-width:1024px)").matches) {
        x.style.display = "none";
        x.style.color = "black";
        bigger.style.display = "block";
        firstBig.style.display = "none";
        secondBig.style.display = "none";
        thirdBig.style.display = "none";
    }

    else {
        x.style.display = "none";
        x.style.color = "black";
        bigger.style.display = "none";
        firstBig.style.display = "none";
        secondBig.style.display = "none";
        thirdBig.style.display = "none";
    }
}    

function firstShoesOn() {
    if (window.matchMedia("(min-width:1024px)").matches) {
        x.style.display = "inline";
        x.style.color = "black";
        bigger.style.display = "none";
        firstBig.style.display = "block";
        secondBig.style.display = "none";
        thirdBig.style.display = "none";
    }

    else {
        x.style.display = "none";
        bigger.style.display = "none";
        firstBig.style.display = "none";
        secondBig.style.display = "none";
        thirdBig.style.display = "none";
    }
}

function secondShoesOn() {
    if (window.matchMedia("(min-width:1024px)").matches) {
        x.style.display = "inline";
        x.style.color = "black";
        bigger.style.display = "none";
        firstBig.style.display = "none";
        secondBig.style.display = "block";
        thirdBig.style.display = "none";
    }

    else {
        x.style.display = "none";
        bigger.style.display = "none";
        firstBig.style.display = "none";
        secondBig.style.display = "none";
        thirdBig.style.display = "none";
    }
}

function thirdShoesOn() {
    if (window.matchMedia("(min-width:1024px)").matches) {
        x.style.display = "inline";
        x.style.color = "white";
        bigger.style.display = "none";
        firstBig.style.display = "none";
        secondBig.style.display = "none";
        thirdBig.style.display = "block";
    }

    else {
        x.style.display = "none";
        bigger.style.display = "none";
        firstBig.style.display = "none";
        secondBig.style.display = "none";
        thirdBig.style.display = "none";
    }
}

function noX() {
    if (window.matchMedia("(min-width:1024px)").matches) {
        x.style.display = "none";
        bigger.style.display = "block";
        firstBig.style.display = "none";
        secondBig.style.display = "none";
        thirdBig.style.display = "none";
    }
}