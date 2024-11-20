// try {
//     undefined = 1;
// }

// catch {
//     console.log('Что-то произошло');
// }

// finally {
//     console.log('Отличный результат');
// }

// пример с делением чисел

// function divideNumbers(a, b) {
//     try {
//         const result = a / b;
//         if (isNaN(result)) {
//             throw new Error('Результат является не числом')
//         }
//         console.log('Результат деления:', result);
//     } catch (error) {
//         conseol.error('Ошибка деления:', error);
//     } finally {
//         console.log('Операция деления завершена');
//     }
// };

// divideNumbers(10, 2);
// divideNumbers(10, 0);

// Пользовательские ошибки
// создание пользовательской ошибки
class CustomError extends Error {
    constructor(message) {
        super(message); // вызов конструктора родительского класса (Error) с переданным сообщением
        this.name = 'CustomError'; // Установка имени ошибки
    }
}

function validateNumber(value) {
    if (typeof value !== 'number') {
        throw new CustomError('Значение должно быть числом'); // Выбрасывание пользовательской ошибки с сообщением
    }
    console.log('Валидация успешна');
}

try {
    validateNumber(42); // проверка на число с передачей строки вместо числа 
} catch (error) {
    if (error instanceof CustomError) { // проверка, является ли ошибка экземпляром пользоватенльской ошибки
        console.error('Ошибка:', error.message); // выводит сообщение об ошибке
        console.log('Тип ошибки:', error.name); // вывод имени ошибки 
    } else {
        console.error('Произошла ошибка:', error); // вывод сообщения об ошибке по умолчанию
    }
}