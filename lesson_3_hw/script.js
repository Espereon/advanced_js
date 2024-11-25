// получаем ссылки на элементы страницы
const productField = document.getElementById('product-name');
const productReview = document.getElementById('product-review');
const addButton = document.getElementById('add-button')
const reviewLists = document.getElementById('review-list');

// получаем сохраненный список покупок из LocalStorage (Если есть)
let reviewList = JSON.parse(localStorage.getItem('reviewList')) || [];

// функция для обновления списка покупок на странице и сохранения его в LocalStorage
const updateReviewlist = () => {
    //Очищаем список покупок на страница
    reviewList.innerHTML = '';
    //Создаём новые элементы списка для каждого пункта
    reviewList.forEach((product, review) => {
        const nameProduct = document.createElement('li');
        const reviewProduct = document.createElement('p');
        nameProduct.textContent = product;
        reviewProduct.textContent = review;
        reviewLists.append(nameProduct);
        nameProduct.appendChild(reviewProduct);
    });
    // Сохраняем обновленный список покупок в localStorage
    localStorage.setItem('reviewList', JSON.stringify(reviewList));
};

// Обработчик события для кнопки "добавить"
addButton.addEventListener('click', () => {
    const newProduct = productField.value.trim();
    const newReview = productReview.value.trim();
    if (newProduct !== '' || newReview !== '') {
        //Добавляем новый пункт в список покупок
        reviewList.push(newProduct, newReview);
        productField.value = '';
        productReview.value = ''
        updateReviewlist();
    }
});

// Обновляем список покупок при загрузке страницы
updateReviewlist();

localStorage.clear();