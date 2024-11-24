// let promise = new Promise(function (resolve, reject) {
//     // функция исполнитель
// });

// promise.then(onfulfield, onrejected);

// функция, которая возвращает Promise, выполняющийся через 1 секунду и резолвит случайное число от 1 до 10. Если возникла ошибка при генерации числ, то Promise должен быть отклонён с сообщение об ошибке
// let generateRandomNumber = () => {
//     return new Promise((resolve, rejected) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * 10) + 1;
//             if (randomNumber) {
//                 resolve(randomNumber)
//             } else {
//                 rejected('Ошибка генерации случайного числа');
//             }
//         }, 1000)
//     });
// };

// generateRandomNumber()
//     .then((number) => {
//         console.log('Сгенерированное случайное число:', number);
//     })
//     .catch((error) => {
//         console.log('Ошибка', error);
//     });

// Возвращает Promise, выполняющий запрос данных по указанному URL. Если запрос завершается успешно, Promise должен резолвить полученные данные. В случае ошибки запроса, Promise должен быть отклонен с сообщением об ошибке.

// let fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((responce) => responce.json())
//             .then((data) => resolve(data))
//             .catch((error) => reject('Ошибка загрузки данных'));
//     });
// };
// // https://randombig.cat/roar.json

// fetchData('https://randombig.cat/roar.json')
//     .then((data) => {
//         console.log('Получены данные:', data);
//     })
//     .catch((error) => {
//         console.log('Ошибка:', error);
//     });

// Напишите функция, которая принимает имя файла в качестве аргумента и возвращает Promise, выполняющийся через 2 секунды, Promise должен резолвиться, если файл существует, и отклоянться, если файла нет.

// let checkIfFileExists = (file) => {

// };

// let checkFileExists = (file) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const fileExists = checkIfFileExists(file);
//             if (fileExists) {
//                 resolve('Файл существует')
//             } else {
//                 reject('Файл отсутствует')
//             }
//         }, 2000);
//     });
// };

// checkFileExists('example.txt')
//     .then((message) => {
//         console.log(message);
//     }).catch((err) => {
//         console.log('Ошибка:', err);
//     });

// функция, которая принимает 2 числа и возвращает промисом их сумму
// let calculateSum = (a, b) => {
//     return new Promise((resolve, reject) => {
//         const sum = a + b;
//         resolve(sum);
//     });
// };

// calculateSum('3', 7) // без проверки будет некорректно
//     .then((result) => {
//         console.log('Сумма чисел:', result);
//     })

// функция которая берём 2 числа в качестве аргумента и возвращает промис. Деление производится первого числа на второе, второе число не должно быть 0, иначе промис выдаёт сообщение о невозможности делить на 0.

// let divideNumers = (a, b) => {
//     return new Promise((resolve, reject) => {
//         if (b === 0) {
//             reject('Невозможно делить на 0')
//         } else {
//             resolve(a / b);
//         }
//     });
// };

// divideNumers(10, 'asd')
//     .then((result) => {
//         console.log('Результат деления:', result);
//     }).catch((err) => {
//         console.log('Ошибка:', err);
//     });

// // цепочка промисов
// new Promise(function (resolve) {
//     setTimeout(() => resolve(1), 1000);
// }).then(function (result) {
//     console.log(result);
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(result * 2), 1000);;
//     });
// }).then(function (result) {
//     console.log(result);
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(result * 2), 1000);;
//     });
// }).then(function (result) {
//     console.log(result);
// });

// // finally, можно использовать для обозначения что какой-то промис выполнился

// let processData = (data) => {

// };

// let perfomeOperation = (data) => {
//     return new Promise((resolve, reject) => {
//         let result = processData(data);
//         if (result) {
//             resolve(result)
//         } else {
//             reject('Ошибка операции')
//         }
//     }).finally(() => {
//         console.log('Операция завершена');
//     });
// };

// perfomeOperation('example')
//     .then((result) => {
//         console.log('Результат операции:', result);
//     })
//     .catch((err) => {
//         console.log('Ошибка:', err);
//     });

//
// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ])
//     .then(console.log)
//     .catch(console.log);

// Приложение, которое отправляет запросы на разные серверы и хотите определить кто отвечает быстрее, промис выполнит с адресом, который быстрее всех ответит
// let checkServerResponse = (urls) => {
//     let promises = urls.map((url) => fetch(url));
//     return Promise.race(promises)
//         .then((response) => {
//             return response.url;
//         });
// };

// let urls = [
//     'https://api.example.com/server1',
//     'https://api.example.com/server2',
//     'https://api.example.com/server3'
// ];

// checkServerResponse(urls)
//     .then((fastestServer) => {
//         console.log(('Самый быстрый сверве:', fastestServer));
//     })
//     .catch((err) => {
//         console.log('Ошибка:', err);
//     });

