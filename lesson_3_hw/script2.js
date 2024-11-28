const productName = document.getElementById('product-name');
const productReview = document.getElementById('product-review');
const btn = document.getElementById('add-button');

let reviewList = JSON.parse(localStorage.getItem('review'));

if (reviewList === null) {
    reviewList = [];
} else {
    reviewList = JSON.parse(localStorage.getItem('review'));
}

btn.addEventListener('click', function () {
    reviewList.push({
        product: `${productName.value}`,
        reviews: `${productReview.value}`,
    });
    localStorage.setItem(`review`, JSON.stringify(reviewList));
});

// localStorage.clear();