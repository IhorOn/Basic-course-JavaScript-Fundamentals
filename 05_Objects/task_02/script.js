const list = {
    1: 'Breaking Bad',
    2: 'Game of Thrones',
    3: 'Lost',
    length: 3,

    push(item) {
        let { length } = this;
        length++;
        this[length] = item;
        this.length = length;
    },

    pop() {
        let { length } = this;
        delete this[length];
        length--;
        this.length = length;
    },

    shift() {
        const shiftElem = this[1];
        let length = this.length;

        for (let i = 1; i < length; i++) {
            this[i] = this[i + 1];
        }

        delete this[length];
        this.length--;

        return shiftElem;
    },

    unshift(item) {
        this[1] = item;
        this.length++;
    },
};

// console.log(list);

// list.push('Eight Sense');
// console.log(list);

// list.pop();
// console.log(list);

// list.shift();
// console.log(list);

// list.unshift('Babylon 5');
// console.log(list);





