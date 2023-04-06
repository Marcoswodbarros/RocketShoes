let firstShoes = document.querySelector('.shoes__pictures--one');
let secondShoes = document.querySelector('.shoes__pictures--two');
let thirdShoes = document.querySelector('.shoes__pictures--three');

let bigger = document.querySelector('.big__shoes');

let firstBig = document.querySelector('.pictures__one--big');
let secondBig = document.querySelector('.pictures__two--big');
let thirdBig = document.querySelector('.pictures__three--big');


firstShoes.addEventListener("click", () => {
    bigger.style.display = "none";
    firstBig.style.display = "block";
    secondBig.style.display = "none";
    thirdBig.style.display = "none";
});

secondShoes.addEventListener("click", () => {
    bigger.style.display = "none";
    firstBig.style.display = "none";
    secondBig.style.display = "block";
    thirdBig.style.display = "none";
});

thirdShoes.addEventListener("click", () => {
    bigger.style.display = "none";
    firstBig.style.display = "none";
    secondBig.style.display = "none";
    thirdBig.style.display = "block";
});