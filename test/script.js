// let clearInt = setInterval(moveCircle, 5, 390,112);

function moveCircle(x, y) {
    let currentX = 0;
    let currentY = 0;
    let stepX = x / n;
    let stepY = y / n;
    let n = time / 5;
    
    setInterval(() => {
        currentX += stepX;
        currentY += stepY;
    }, 5);

    if (x == 400 || y == 400) {
        clearInterval(clearInt);
        circle.style.background = 'blue';
        counter.innerHTML = 2;
    } else {
        stepX++
        stepY++
        circle.style.top = stepY + 'px';
        circle.style.left = stepX + 'px';
    }
}

// circle.style.top = random + 'px';
// circle.style.left = '400px'