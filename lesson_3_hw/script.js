// получаем ссылки на элементы страницы
const productField = document.getElementById('product-name');
const productReview = document.getElementById('product-review');
const addButton = document.getElementById('add-button')


let data = JSON.parse(localStorage.getItem("data"));

if (data === null) {
    data = [];
} else {
    data = JSON.parse(localStorage.getItem("data"));
}

addButton.addEventListener("click", function () {
    data.push({
        product: `${productField.value}`,
        reviews: `${productReview.value}`,
    });
    localStorage.setItem(`data`, JSON.stringify(data, null, 2));
});

localStorage.clear();