const circle = document.querySelector('.content__circle');
const circleStyle = window.getComputedStyle(circle);
const counter = document.querySelector('.circle__counter');

const circleState = {
    counter: 1,
    color: 'red',
};

randomMove();

function moveCircle(x, y) {
    const time = 1000;
    const n = time / 5;
    const coordinates = {
        x: parseInt(circleStyle.getPropertyValue('left')),
        y: parseInt(circleStyle.getPropertyValue('top'))
    };

    const step = {
        x: (x - coordinates.x) / n,
        y: (y - coordinates.y) / n,
        counter: 0,
    };
    
    const stopInterval = setInterval(() => {
        step.counter++;

        coordinates.x += step.x;
        coordinates.y += step.y;
        circle.style.left = Math.round(coordinates.x) + 'px';
        circle.style.top = Math.round(coordinates.y) + 'px';

        if (step.counter < n) return;
            
        touchCircle();
        clearInterval(stopInterval); 
    }, 5);
}

function touchCircle() {
    circleState.counter++;
    counter.innerHTML = circleState.counter;

    circle.style.background = (circle.style.background === 'blue') ? 'red' : 'blue';
}

function randomMove() {

    setInterval(() => {
        const random = {
            bool: getRandomNumber(0, 1),
            next: getRandomNumber(0, 2),
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

        const destinationSide = () => {
            const arr = [];

            for (let key in touchedSides) {
                if (touchedSides[key] === false) {
                    arr.push(key)
                }
            }
            
            console.log(arr[random.next])
            return destinationSide;
        }
        destinationSide();

        if (touchedSides.left && touchedSides.top) {
            if (random.bool == 0) {
                moveCircle(400, random.position);
            } else {
                moveCircle(random.position, 400);
            }
        } else if (touchedSides.left && touchedSides.bottom) {
            if (random.bool == 0) {
                moveCircle(random.position, 0);
            } else {
                moveCircle(400, random.position);
            }
        } else if (touchedSides.right && touchedSides.top) {
            if (random.bool == 0) {
                moveCircle(0, random.position);
            } else {
                moveCircle(random.position, 400);
            }
        } else if (touchedSides.right && touchedSides.bottom) {
            if (random.bool == 0) {
                moveCircle(0, random.position);
            } else {
                moveCircle(random.position, 0);
            }
        } else if (touchedSides.right) {
            if (random.next == 0) {
                moveCircle(random.position, 0);
            } else if (random.next == 1) {
                moveCircle(0, random.position);
            } else {
                moveCircle(random.position, 400);
            }
        } else if (touchedSides.bottom) {
            if (random.next == 0) {
                moveCircle(0, random.position);
            } else if (random.next == 1) {
                moveCircle(random.position, 0);
            } else {
                moveCircle(400, random.position);
            }
        } else if (touchedSides.left) {
            if (random.next == 0) {
                moveCircle(random.position, 0);
            } else if (random.next == 1) {
                moveCircle(400, random.position);
            } else {
                moveCircle(random.position, 400);
            }
        } else if (touchedSides.top) {
            if (random.next == 0) {
                moveCircle(400, random.position);
            } else if (random.next == 1) {
                moveCircle(random.position, 400);
            } else {
                moveCircle(0, random.position);
            }
        }
    }, 1500);
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

