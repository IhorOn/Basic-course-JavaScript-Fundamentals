'use strict';

let num = +prompt('Задайте число чтобы проверить его делимость на 3 и 5')

if (num % 3 === 0) {
    alert('Fitz');
} else if (num % 5 === 0) {
    alert('Butz');
} else if ((num % 3 === 0) && (num % 5 === 0)) {
    alert('Fitz Butz');
};
