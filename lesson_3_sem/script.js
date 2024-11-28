const input = document.getElementById('input-text');
const addB = document.getElementById('save-btn');
const loadB = document.getElementById('load-btn');
const delB = document.getElementById('clear-btn');
const text = document.getElementById('saved-text');
let textList = JSON.parse(localStorage.getItem('textList')) || [];

document.getElementById('save-btn').addEventListener('click', () => {
    const input = document.getElementById('input-text').value;
    if (input !== '') {
        localStorage.setItem('savedText', input);
        alert('Текст сохранен!');
    } else {
        alert('Введите текст')
    }
});

document.getElementById('load-btn').addEventListener('click', () => {
    // получить из localstorage значение
    const savedText = localStorage.getItem('savedText');
    // текстконтентом записать значение из localstorage
    document.getElementById('saved-text').textContent = savedText ? savedText : 'Введите текст!';
});

document.getElementById('clear-btn').addEventListener('click', () => {
    // удалить из localstorage значения
    localStorage.removeItem('savedText');
    document.getElementById('saved-text').textContent = 'Текст очищен!';
});