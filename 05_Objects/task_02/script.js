const list = {
    1: 'Breaking Bad',
    2: 'Game of Thrones',
    3: 'Lost',
    length: 3,

    push() {
        this[4] = 'Eight Sense';
    },

    pop() {
        delete this[4];
    },

    shift() {
        const shiftElem = this[1];

        for (let i = 1; i < this.length; i++) {
            this[i] = this[i + 1];
        }

        delete this[this.length];
        this.length--;

        return shiftElem;
    },

    unshift() {
        this[1] = 'Babylon 5'
    },
};

console.log(list);

list.shift();
console.log(list);

