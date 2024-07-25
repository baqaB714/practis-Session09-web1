// عدد تصادفی بین 1 تا 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// تابع برای بررسی حدس کاربر
function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const resultMessage = document.getElementById('resultMessage');

    if (userGuess == randomNumber) {
        resultMessage.textContent = 'تبریک! شما عدد درست را حدس زدید!';
        resultMessage.style.color = 'green';
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'حدس شما خیلی پایین است!';
        resultMessage.style.color = 'red';
    } else {
        resultMessage.textContent = 'حدس شما خیلی بالاست!';
        resultMessage.style.color = 'red';
    }
}
