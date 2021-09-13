const circle = document.querySelector('.content__circle');
const circleStyle = window.getComputedStyle(circle);
const counter = document.querySelector('.circle__counter');

const circleState = {
    bool: true,
    counter: 1,
    red: 'red',
    blue: 'blue',
};

randomMove();

function moveCircle(x, y) {
    let time = 1000;
    let n = time / 5;
    const coordinate = {
        x: parseInt(circleStyle.getPropertyValue('left')),
        y: parseInt(circleStyle.getPropertyValue('top'))
    }

    const step = {
        x: (x - coordinate.x) / n,
        y: (y - coordinate.y) / n,
        i: 0,
    }
    
    const stopInterval = setInterval(() => {
        step.i++;

        coordinate.x += step.x;
        coordinate.y += step.y;
        circle.style.left = Math.round(coordinate.x) + 'px';
        circle.style.top = Math.round(coordinate.y) + 'px';

        if (step.i < n) return;
            
        touchCircle();
        clearInterval(stopInterval); 
    }, 5);
}

function touchCircle() {
    circleState.counter++;
    counter.innerHTML = circleState.counter;
    circleState.bool = !circleState.bool;

    circle.style.background = (circleState.bool) ? circleState.red : circleState.blue;
}

function randomMove() {

    setInterval(() => {
        const random = {
            bool: getRandomNumber(0, 1),
            next: getRandomNumber(0, 2),
            position: getRandomNumber(0,400),
        }

        const coordinate = {
            x: parseInt(circleStyle.getPropertyValue('left')),
            y: parseInt(circleStyle.getPropertyValue('top'))
        }

        const side = {
            left: coordinate.x == 0,
            top: coordinate.y == 0,
            right: coordinate.x == 400,
            bottom: coordinate.y == 400,
        }
    
        // switch (true) {
        //     case side.left:
        //     case side.top:
        //         if (random.bool == 0) {
        //             moveCircle(400, random.position);
        //         } else {
        //             moveCircle(random.position, 400);
        //         }
        //         break;
            
        //     case side.left:
        //     case side.bottom:
        //         if (random.bool == 0) {
        //             moveCircle(random.position, 0);
        //         } else {
        //             moveCircle(400, random.position);
        //         }
        //         break;
            
        //     case side.right:
        //     case side.top:
        //         if (random.bool == 0) {
        //             moveCircle(0, random.position);
        //         } else {
        //             moveCircle(random.position, 400);
        //         }
        //         break;
            
        //     case side.right:
        //     case side.bottom:
        //         if (random.bool == 0) {
        //             moveCircle(0, random.position);
        //         } else {
        //             moveCircle(random.position, 0);
        //         }
        //         break;
            
        //     case side.right:
        //         if (random.next == 0) {
        //             moveCircle(random.position, 0);
        //         } else if (random.next == 1) {
        //             moveCircle(0, random.position);
        //         } else {
        //             moveCircle(random.position, 400);
        //         }
        //         break;
            
        //     case side.bottom:
        //         if (random.next == 0) {
        //             moveCircle(0, random.position);
        //         } else if (random.next == 1) {
        //             moveCircle(random.position, 0);
        //         } else {
        //             moveCircle(400, random.position);
        //         }
        //         break;
            
        //     case side.left:
        //         if (random.next == 0) {
        //             moveCircle(random.position, 0);
        //         } else if (random.next == 1) {
        //             moveCircle(400, random.position);
        //         } else {
        //             moveCircle(random.position, 400);
        //         }
        //         break;
            
        //     case side.top:
        //         if (random.next == 0) {
        //             moveCircle(400, random.position);
        //         } else if (random.next == 1) {
        //             moveCircle(random.position, 400);
        //         } else {
        //             moveCircle(0, random.position);
        //         }
        //         break;
        // }
        
        if (side.left && side.top ) {
            if (random.bool == 0) {
                moveCircle(400, random.position);
            } else {
                moveCircle(random.position, 400);
            }
        } else if (side.left && side.bottom) {
            if (random.bool == 0) {
                moveCircle(random.position, 0);
            } else {
                moveCircle(400, random.position);
            }
        } else if (side.right && side.top) {
            if (random.bool == 0) {
                moveCircle(0, random.position);
            } else {
                moveCircle(random.position, 400);
            }
        } else if (side.right && side.bottom) {
            if (random.bool == 0) {
                moveCircle(0, random.position);
            } else {
                moveCircle(random.position, 0);
            }
        } else if (side.right) {
            if (random.next == 0) {
                moveCircle(random.position, 0);
            } else if (random.next == 1) {
                moveCircle(0, random.position);
            } else {
                moveCircle(random.position, 400);
            }
        } else if (side.bottom) {
            if (random.next == 0) {
                moveCircle(0, random.position);
            } else if (random.next == 1) {
                moveCircle(random.position, 0);
            } else {
                moveCircle(400, random.position);
            }
        } else if (side.left) {
            if (random.next == 0) {
                moveCircle(random.position, 0);
            } else if (random.next == 1) {
                moveCircle(400, random.position);
            } else {
                moveCircle(random.position, 400);
            }
        } else if (side.top) {
            if (random.next == 0) {
                moveCircle(400, random.position);
            } else if (random.next == 1) {
                moveCircle(random.position, 400);
            } else {
                moveCircle(0, random.position);
            }
        }
    }, 30);
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

