const circle = document.querySelector('.content__circle');
const circleStyle = window.getComputedStyle(circle);
const counter = document.querySelector('.circle__counter');

const circleState = {
    counter: 1,
};

randomMove();

function moveCircle(x, y) {
    const time = 1000;
    const n = time / 5;
    const coordinates = {
        x: parseInt(circleStyle.getPropertyValue('left')),
        y: parseInt(circleStyle.getPropertyValue('top'))
    };

    const steps = {
        x: (x - coordinates.x) / n,
        y: (y - coordinates.y) / n,
        counter: 0,
    };

    const stopInterval = setInterval(() => {
        steps.counter++;

        coordinates.x += steps.x;
        coordinates.y += steps.y;
        circle.style.left = Math.round(coordinates.x) + 'px';
        circle.style.top = Math.round(coordinates.y) + 'px';

        if (steps.counter < n) return;
            
        touchCircle();
        clearInterval(stopInterval); 
    }, 5);
}

function touchCircle() {
    circleState.counter++
    counter.innerHTML = circleState.counter;

    circle.style.background = (circle.style.background === 'blue') ? 'red' : 'blue';
}

function randomMove() {

    setInterval(() => {
        const random = {
            corner: getRandomNumber(0, 1),
            side: getRandomNumber(0,2),
            position: getRandomNumber(0, 400),
        };

        const coordinates = {
            x: parseInt(circleStyle.getPropertyValue('left')),
            y: parseInt(circleStyle.getPropertyValue('top'))
        };

        const touchedSides = {
            left: coordinates.x === 0,
            top: coordinates.y === 0,
            right: coordinates.x === 400,
            bottom: coordinates.y === 400,
        };

        const noContactSides = [];

        function destinationSide() {

            for (let key in touchedSides) {
                if (touchedSides[key] === false) noContactSides.push(key);
            };

            return destinationSide;
        }

        destinationSide();

        const randomSide = (noContactSides.length === 2) ?
            noContactSides[random.corner] :
            noContactSides[random.side];
        
        switch (true) {
            case touchedSides.left:
                if (randomSide === 'top') {
                    moveCircle(random.position, 0);
                } else if (randomSide === 'right') {
                    moveCircle(400, random.position);
                } else {
                    moveCircle(random.position, 400);
                }
                break;
            
            case touchedSides.top:
                if (randomSide === 'right') {
                    moveCircle(400, random.position);
                } else if (randomSide === 'bottom') {
                    moveCircle(random.position, 400);
                } else {
                    moveCircle(0, random.position);
                }
                break;
            
            case touchedSides.right:
                if (randomSide === 'top') {
                    moveCircle(random.position, 0);
                } else if (randomSide === 'left') {
                    moveCircle(0, random.position);
                } else {
                    moveCircle(random.position, 400);
                }
                break;
            
            case touchedSides.bottom:
                if (randomSide === 'left') {
                    moveCircle(0, random.position);
                } else if (randomSide === 'top') {
                    moveCircle(random.position, 0);
                } else {
                    moveCircle(400, random.position);
                }
                break;
        }
    }, 100);
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

