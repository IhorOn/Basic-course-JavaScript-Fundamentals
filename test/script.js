if (circleX == 0 && circleY == 0) {
    if (randomBool == 0) {
        moveCircle(400, randomPositoin);
    } else {
        moveCircle(randomPositoin, 400);
    }
} else if (circleX == 0 && circleY == 400) {
    if (randomBool == 0) {
        moveCircle(randomPositoin, 0);
    } else {
        moveCircle(400, randomPositoin);
    }
} else if (circleX == 400 && circleY == 0) {
    if (randomBool == 0) {
        moveCircle(0, randomPositoin);
    } else {
        moveCircle(randomPositoin, 400);
    }
} else if (circleX == 400 && circleY == 400) {
    if (randomBool == 0) {
        moveCircle(0, randomPositoin);
    } else {
        moveCircle(randomPositoin, 0);
    }
} else if (circleX == 400) {
    if (randomNext == 0) {
        moveCircle(randomPositoin, 0);
    } else if (randomNext == 1) {
        moveCircle(0, randomPositoin);
    } else {
        moveCircle(randomPositoin, 400);
    }
} else if (circleY == 400) {
    if (randomNext == 0) {
        moveCircle(0, randomPositoin);
    } else if (randomNext == 1) {
        moveCircle(randomPositoin, 0);
    } else {
        moveCircle(400, randomPositoin);
    }
} else if (circleX == 0) {
    if (randomNext == 0) {
        moveCircle(randomPositoin, 0);
    } else if (randomNext == 1) {
        moveCircle(400, randomPositoin);
    } else {
        moveCircle(randomPositoin, 400);
    }
} else if (circleY == 0) {
    if (randomNext == 0) {
        moveCircle(400, randomPositoin);
    } else if (randomNext == 1) {
        moveCircle(randomPositoin, 400);
    } else {
        moveCircle(0, randomPositoin);
    }
}