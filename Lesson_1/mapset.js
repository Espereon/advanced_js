// Пример 1

// let map = new Map();

// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1');

// console.log(map);
// console.log(map.get('1'));
// console.log(map.get(1));
// console.log(map.size);

// Пример 2
// let map = new Map();
// map.set('1', 'we').set(1, 'likes').set(true, 'JS');
// console.log(map);

// пример 3
// let recipeMap = new Map([
//     ['огурец', 500],
//     ['помидор', 350],
//     ['лук', 50],
// ]);
// console.log(recipeMap);
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable);
// };

// for (let price of recipeMap.values()) {
//     console.log(price);
// };

// for (let entire of recipeMap) {
//     console.log(entire);
// };

// recipeMap.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`);
// });

// // Пример 4
// let map = new Map(Object.entries(obj));
// let obj = Object.fromEntries(map);

let buddies = [
    'Жучка',
    'Тузик',
    'Булька',
    'Тузик',
    'Бобик',
    'Жучка',
    'Валера',
    'Жучка',
    'Тузик',
    'Манька',
];

let uniqueBuddies = new Set(buddies);
console.log(uniqueBuddies);

let arr = Array.from(uniqueBuddies);
console.log(arr);