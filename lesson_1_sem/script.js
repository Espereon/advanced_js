// Задача № 1

// функция добавления матеданных к объектам
// function addMetadate(book, metadataType, data) {
//     if (book[metadataType]) {
//         book[metadataType].push(data)
//     } else {
//         book[metadataType] = [data]
//     }
// };

// // функция для извлечения метаданных из объекта
// function getMetadata(book, metadataType) {
//     return book[metadataType];
// };

// const book = {
//     title: "1984",
//     author: 'George Orwell'
// };

// const reviewSymbol = Symbol('review');
// const ratingSymbol = Symbol('rating');
// const tagsSymbol = Symbol('tags');

// addMetadate(book, reviewSymbol, 'Отличная книга');
// addMetadate(book, ratingSymbol, 5);
// addMetadate(book, tagsSymbol, 'dystopiya');

// console.log(getMetadata(book, reviewSymbol));
// console.log(getMetadata(book, ratingSymbol));
// console.log(getMetadata(book, tagsSymbol));

// Задача № 2

// const books = [
//     { title: "1984", author: "George Orwell" },
//     { title: "Brawe New World", author: "Aldous Huxley" },
//     { title: "Fahrenheit 451", author: "Ray Bradbury" }
// ];

// books[Symbol.iterator] = function () {
//     return {
//         current: 0,
//         to: this.length,
//         next() {
//             return this.current < this.to
//                 ? { done: false, value: books[this.current++] }
//                 : { done: true };
//         }
//     }
// };

// for (let book of books) {
//     console.log(`Название: ${book.title}, автор: ${book.author}`);
// };

// Задание № 3
// const divElements = Array.from(document.querySelectorAll('div'));

// const activeDivs = divElements.filter(element => element.hasAttribute('data-active'));
// activeDivs.forEach(element => {
//     console.log(element);
// });

// Задание № 4

const lessons = new Map();
lessons.set('Математика', 'Смирнов');
lessons.set('История', 'Иванова');

const ivanLessons = new Set().add('Математика').add('История');

const students = new Map();
students.set('Иван', ivanLessons);

console.log(`Преподаватель по математике: ${lessons.get('Математика')}`);
console.log(`Уроки Ивана: ${[...students.get('Иван')]}`);