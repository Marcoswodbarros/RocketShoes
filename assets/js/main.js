let firstShoes = document.querySelector('.shoes__pictures--one');
let secondShoes = document.querySelector('.shoes__pictures--two');
let thirdShoes = document.querySelector('.shoes__pictures--three');

let x = document.querySelector('.fa-circle-xmark');
let bigger = document.querySelector('.big__shoes');

let firstBig = document.querySelector('.pictures__one--big');
let secondBig = document.querySelector('.pictures__two--big');
let thirdBig = document.querySelector('.pictures__three--big');


firstShoes.addEventListener("click", () => {
    x.style.display = "inline";
    x.style.color = "black";
    bigger.style.display = "none";
    firstBig.style.display = "block";
    secondBig.style.display = "none";
    thirdBig.style.display = "none";
});

secondShoes.addEventListener("click", () => {
    x.style.display = "inline";
    x.style.color = "black";
    bigger.style.display = "none";
    firstBig.style.display = "none";
    secondBig.style.display = "block";
    thirdBig.style.display = "none";
});

thirdShoes.addEventListener("click", () => {
    x.style.display = "inline";
    x.style.color = "white";
    bigger.style.display = "none";
    firstBig.style.display = "none";
    secondBig.style.display = "none";
    thirdBig.style.display = "block";
});

x.addEventListener("click", () => {
    x.style.display = "none";
    bigger.style.display = "block";
    firstBig.style.display = "none";
    secondBig.style.display = "none";
    thirdBig.style.display = "none";
})