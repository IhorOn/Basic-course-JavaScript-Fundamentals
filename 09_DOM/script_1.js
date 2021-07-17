const documentBody = document.body;
const arrayElem = [];

const navElem = documentBody.firstElementChild; //1
arrayElem.push(navElem);

const nextSiblingNav = navElem.nextElementSibling; //2
arrayElem.push(nextSiblingNav);

arrayElem.push(navElem.firstElementChild.children[2]); //3

arrayElem.push(nextSiblingNav.parentElement); //4

const tablePricing = documentBody.querySelectorAll('.pricing__cell'); //5
for (let cell of tablePricing) {
    arrayElem.push(cell)
};

console.log(arrayElem);


