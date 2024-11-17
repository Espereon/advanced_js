// Пример 1
// const string = 'Hello!';
// console.log(string[2]);
// console.log(string.length);

// for (let str of string) {
//     console.log(str);
// }

// Пример 2
let range = {
    from: 1,
    to: 17
};
// console.log(range);

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            return this.current <= this.last ? { done: false, value: this.current++ } :
                { done: true };
        }
    };
};

for (let number of range) {
    console.log(number);
}

// сокращённый пример 2 но this будет общий
// let range = {
//     from: 1,
//     to: 17,
//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },
//     next() {
//         return this.current <= this.to ? { done: false, value: this.current++ } : { done: true };
//     }
// };
// for (let number of range) {
//     console.log(number);
// }

// Пример 3 (Arrаy.from)
// let pseudo = {
//     0: 'first',
//     1: 'second',
//     2: 'new elem',
//     length: 3
// };

// let array = Array.from(pseudo);
// // console.log(array);
// // console.log(array.pop());

// let pseudo2 = 'It`s Array like';
// let array2 = Array.from(pseudo2);
// console.log(array2);