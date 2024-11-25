// функция, которая устанавливает cookie с указанными именем, значением и сроком действия в днях.

let setCookies = (name, value, days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    let cookieValue = encodeURIComponent(value) + '; expires =' + expirationDate.toUTCString();
    document.cookie = name + '=' + cookieValue;
};

setCookies('username', 'John Doe', 7);
setCookies('username', 'Mister', 5);
setCookies('username', 'Mister2', 55);

// функция которая забирает куки и выводит их в консоль
let getCookie = (name) => {
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};

let username = getCookie('username');
console.log('Значение cookie username:', username);

// функция, которая удаляет cookie с указанным именем

let deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

deleteCookie('username')