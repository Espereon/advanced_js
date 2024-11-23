const comment = document.querySelector('.comment');
const btn = document.querySelector('.btn');
const num = document.querySelector('.num');
btn.addEventListener('click', function (e) {
    try {
        const inputElement = num.value;
        if (isNaN(inputElement)) {
            throw new Error("Это не число");
        }
        comment.textContent = "Молодец!";
    } catch (error) {
        comment.textContent = error.message;
    }
});