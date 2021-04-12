'use strict';

let month = prompt('Введите месяц');

switch (month) {
    case 'Декабрь':
    case 'Январь':
    case 'Февраль':
        alert('Зима');
        break;
    
    case 'Март':
    case 'Апрель':
    case 'Май':
        alert('Весна');
        break;
    
    case 'Июнь':
    case 'Июль':
    case 'Август':
        alert('Лето');
        break;
    
    case 'Сентябрь':
    case 'Октябрь':
    case 'Ноябрь':
        alert('Осень');
        break;
    
    default:
        alert('Нету такого месяца')
}
