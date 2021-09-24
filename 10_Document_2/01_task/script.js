const circle = document.querySelector('.content__circle');
const circleStyle = window.getComputedStyle(circle);
const counter = document.querySelector('.circle__counter');

const circleProperties = {
    counter: 1,
    x: parseInt(circleStyle.getPropertyValue('left')),
    y: parseInt(circleStyle.getPropertyValue('top')),
};

randomMove(); 

function moveCircle(x, y) {
    const k = 5;
    // const time = 500;
    let time = Math.sqrt((x - circleProperties.x) ** 2 + (y - circleProperties.y) ** 2);
    let n = Math.round(time / k);
    
    const steps = {
        x: (x - circleProperties.x) / n,
        y: (y - circleProperties.y) / n,
        counter: 0,
    };
    console.log(time, n)
    // console.log(circleProperties.x, circleProperties.y)

    const stopInterval = setInterval(() => {
        steps.counter++;

        circleProperties.x += steps.x;
        circleProperties.y += steps.y;
        circle.style.left = circleProperties.x + 'px';
        circle.style.top = circleProperties.y + 'px';

        if (steps.counter === n) {
            circleProperties.x = Math.round(circleProperties.x);
            circleProperties.y = Math.round(circleProperties.y);
        }
        if (steps.counter < n) return;
            
        touchCircle();
        clearInterval(stopInterval); 
    }, 5);
}

function touchCircle() {
    circleProperties.counter++
    counter.innerHTML = circleProperties.counter;

    circle.style.background = (circle.style.background === 'blue') ? 'red' : 'blue';
}

function randomMove() {

    setInterval(() => {
        const random = {
            corner: getRandomNumber(0, 1),
            side: getRandomNumber(0,2),
            position: getRandomNumber(0, 400),
        };

        const movingCoordinates = {};

        const touchedSides = {
            left: circleProperties.x === 0,
            top: circleProperties.y === 0,
            right: circleProperties.x === 400,
            bottom: circleProperties.y === 400,
        };

        function getDestinationSide() {
            const noContactSides = [];
            let movingSide;

            for (let key in touchedSides) {
                if (touchedSides[key] === false) noContactSides.push(key);
            };
            
            console.log(noContactSides);

            movingSide = (noContactSides.length === 2) ?
            noContactSides[random.corner] :
            noContactSides[random.side];
            
            console.log(movingSide);

            return movingSide;
        }

        const destinationSide = getDestinationSide();

        switch (destinationSide) {
            case 'left':
                movingCoordinates.x = 0;
                movingCoordinates.y = random.position;
                break;
            
            case 'top':
                movingCoordinates.x = random.position;
                movingCoordinates.y = 0;
                break;
            
            case 'right':
                movingCoordinates.x = 400;
                movingCoordinates.y = random.position;
                break;
            
            case 'bottom':
                movingCoordinates.x = random.position;
                movingCoordinates.y = 400;
                break;
        }
        moveCircle(movingCoordinates.x, movingCoordinates.y);

    }, 600);
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

