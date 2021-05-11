const list = {
    1: 'Breaking Bad',
    2: 'Game of Thrones',
    3: 'Lost',

    push() {
        this[4] = 'Eight Sense';
    },
    pop() {
        delete this[4];
     },
    shift() {
        delete this[1];
    },
    unshift() {
        this[1] = 'Babylon 5'
     },
};
