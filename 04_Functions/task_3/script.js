let infoUser = function() {
    let name = prompt('Ваше Имя?');
    let age = +prompt('Ваш возраст?');

    const moreAge = `Привет ${name}! Иди учить уроки.`;
    const lessAge = `Привет ${name}! Добро пожаловать, наслаждайся контенотом.`;

    let message = (age < 18) ? moreAge : lessAge;
    
    console.log(message);
}

infoUser();


