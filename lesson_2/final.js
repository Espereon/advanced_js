// Глобальный объект
const App = {};

// защищённые свойства класса
class User {
    #_name;
    constructor(name) {
        this.#_name = name;
    }
    getName() {
        return this.#_name;
    }
};
// функция регистрации пользователя
App.registerUser = (name, email, password) => {
    try {
        // проверка введённых данных
        if (!name || !email || !password) {
            throw new Error('Не все данные были введены');
        }

        // создание экземпляра класса user
        const user = new User(name);

        // дополнительная обработка и сохранение пользователя
        const userData = {
            name: user.getName(),
            email,
            password
        };
        // здесь можно добавить логику сохранения пользователя в базу данных или отправку данных на сервер
        console.log('Пользователь успешно зарегестрировался:', user.getName());
        console.log('Дополнительные данные пользователя:', userData);
    } catch (error) {
        console.error('Ошибка регистрации пользователя', error.message);
    } finally {
        console.log('Завершение регистрации пользователя');
    }
};

// вызов функции регистрации пользователя

App.registerUser('John Doe', 'jhon@example.com', 'password123');
App.registerUser('John Doe', '', 'password123');