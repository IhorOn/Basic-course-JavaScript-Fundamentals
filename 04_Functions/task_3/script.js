let infoUser = function(name, age) {
    name = prompt('Ваше Имя?');
    age = +prompt('Ваш возраст?');

    if (age < 18) {
        return console.log(`Привет ${name}! Иди учить уроки.`);
    } else {
        return console.log(`Привет ${name}! Добро пожаловать, наслаждайся контенотом.`);
    };
};

infoUser();


