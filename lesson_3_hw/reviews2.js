const products = JSON.parse(localStorage.getItem('review'));
console.log(products);
const productRev = document.querySelector('.product_review');

// for (let product of products) {
//     product.forEach(e => {
//         let nameP = document.createElement('p').textContent = e.product;
//         productRev.append(nameP);
//     });
//     // const reviewP = product.reviews;
// };

const rev = products.forEach(e => {
    return e.product !== '';
});

console.log(rev);