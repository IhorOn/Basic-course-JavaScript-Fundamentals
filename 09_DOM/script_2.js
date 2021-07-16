// task 2
const documentBody = document.body;
const arrayElem = [];

arrayElem.push(documentBody.firstElementChild); //1

const elemAboutUs = document.getElementById('about-us'); //2
arrayElem.push(elemAboutUs); 
// or
// arrayElem.push(documentBody.querySelector('#about-us'));

const elemUl = documentBody.querySelectorAll('ul'); //3
for (let ul of elemUl) {
    arrayElem.push(ul)
};

const elemActive = elemAboutUs.querySelector('.active').closest('.navigation-element'); //4
arrayElem.push(elemActive);

console.log(arrayElem);

// task 3

const elemFooter = documentBody.querySelector('footer'); //1
const elemMainMenu = documentBody.querySelector('.main-menu')
elemFooter.innerHTML = elemMainMenu.innerHTML;

elemFooter.hidden = true; //2 

const collectElem = documentBody.querySelectorAll('.employees_cell'); //3
console.log(collectElem.length)











