// Задание № 1
/* посмотрите, пожалуйста, метод проверки на дубликаты при удалении, я не смог придумать иное, можете подсказать как иначе и может быть короче можно было сделать? */

class library {
    // инициализация пустого массива класса books с приватным свойством
    #books = [];
    // в конструкторе принимаем массив и проверяем на дубликаты
    constructor(arr) {
        for (const title of arr) {
            if (this.#books.includes(title)) {
                throw new Error(`Найден дубликат книги "${title}"`);
            }
            this.#books.push(title);
        }
    }
    // геттер на возвращение текущешо списка книг
    get allBooks() {
        return this.#books.slice();
    }
    // метод на добавление книги
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error('Данная книга уже существует');
        }
        this.#books.push(title);
        console.log(`Книга ${title} добавлена`);
        return this.#books;
    }
    // метод на удаление книги  (z)
    revomeBook(title) {
        const index = this.#books.indexOf(title);
        if (this.#books.includes(title)) {
            console.log(`Книга ${title} удалена`);
        } else {
            throw new Error('Данной книги нет в списке')
        }
        this.#books.splice(index, 1);
        return this.#books;
    }
    // метод на проверку книги в списке
    hasBook(title) {
        return this.#books.includes(title);
    }
};


//создадим массивы с книгами

const arr1 = ['Гарри поттер 1', 'Гарри поттер 2', 'Гарри поттер 3', 'Гарри поттер 4', 'Гарри поттер 5'];

let arr = new library(arr1);
// console.log(arr.allBooks); // выдаст весь список книг

// arr.addBook('Гарри поттер 6');
//console.log(arr.allBooks); // выведет с добавленной 6 книгой поттера

// arr.addBook('Гарри поттер 1') // проверка на добавление дубликата

// arr.revomeBook('Гарри поттер 2'); // удаление книги
// console.log(arr.allBooks); // перепроверяем удаление

// arr.revomeBook('Гарри поттер 2') // проверка на несуществующей книги

// console.log(arr.hasBook('Гарри поттер 1')); // проверка существующей книги
// console.log(arr.hasBook('Гарри поттер 7')); // проверка несущсвтуеющей книги


// Задание № 2
const text = document.querySelector('.input');
const btn = document.querySelector('.btn');
const comments = document.querySelector('.comments_list')
// вытаскиваем данные из data.js
initialData.forEach(product => {
    product.reviews.forEach(review => {
        const li = document.createElement('li');
        li.textContent = review.text;
        comments.appendChild(li);
    });
});
// событие на клик в котором функции на проврку и добавлние в поле отзывов
btn.addEventListener('click', function (e) {
    const inputText = text.value;
    try {
        validateLength(inputText);
        addComment(inputText);
    } catch (error) {
        console.error(error);
    }
});
// проверка на длинну отзыва
function validateLength(value) {
    if (value.length > 5 && value.length < 50) { // поставил 5 и 50 для лёгкой проверки
        return value;
    } else {
        throw new Error('Комментарий должен быть от 50 до 500 символов')
    }
}
// функция для добавления комментария
function addComment(value) {
    const li = document.createElement('li');
    li.classList.add('comment');
    li.textContent = value;
    comments.appendChild(li);
}


