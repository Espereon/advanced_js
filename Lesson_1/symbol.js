// Пример 1
// const symbol = Symbol(); //объявление

// const dogID = Symbol('dog');

// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog')

// console.log(dog1);
// console.log(dog2);

// console.log(dog1 === dog2);

// Пример 2
// const dogID = Symbol('super dog');
// // alert(dogID); c эти будет ошибка вывода
// console.log(dogID);

// console.log(dogID.description);

// Пример 3
// let id = Symbol('dogID');
// let id = Symbol('id');
// let buddy = {
//     [id]: 'Жучка'
// };
// console.log(buddy[id]);

// buddy[id] = 'Бобик';
// console.log(buddy[id]);

//Пример 4
// let buddy = { name: 'Тузик' };
// buddy.id = 'Наш идентификатор';
// buddy.id = 'Их идентификатор';
// console.log(buddy.id);

// Решение проблемы
// let buddies = {
//     [Symbol('Жучка')]: 'Жучка',
//     [Symbol('Мурка')]: 'Мурка',
//     [Symbol('Таракашка')]: 'Таракашка',
//     elephant: 'Слон'
// };
// console.log(buddies);

// let newBuddies = {};
// Object.assign(newBuddies, buddies);
// buddies.cat = 'Барсик'
// console.log(newBuddies);
// console.log(buddies);

//Пример 4
// let id = Symbol.for('id'); // читаем символ из глобального реестра и записываем его в переменную, если символа не существует, он будет создан

// let idAgain = Symbol.for('id'); // читаем его снова и записываем в другую переменную (возможно из другого места кода

// alert(id === idAgain);

let sym = Symbol.for('name');
let sym2 = Symbol.for('id');

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));
