function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomPrime(min, max) {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }
    let primeNumber = randomInt(min, max);
    while (!isPrime(primeNumber)) {
        primeNumber = randomInt(min, max);
    }
    return primeNumber;
}

function calculateModuloExponentiation(base, exponent, modulus) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = (result * base) % modulus;
    }
    return result;
}

function initializeTask(taskNumber) {
    const base = document.getElementById('base_task' + taskNumber);
    const exponent = document.getElementById('exponent_task' + taskNumber);
    const modulus = document.getElementById('modulus_task' + taskNumber);
    const resultInput = document.getElementById('result_task' + taskNumber);
    const message = document.getElementById('message_task' + taskNumber);

    const baseValue = randomInt(2, 100);
    const exponentValue = randomInt(2, 10);
    const modulusValue = randomPrime(2, 20);

    base.textContent = baseValue;
    exponent.textContent = exponentValue;
    modulus.textContent = modulusValue;

    document.getElementById('form_task' + taskNumber).addEventListener('submit', function(e) {
        e.preventDefault();
        handleTaskSubmit(baseValue, exponentValue, modulusValue, resultInput, message);
    });
}

function handleTaskSubmit(baseValue, exponentValue, modulusValue, resultInput, message) {
    const userResult = parseInt(resultInput.value);
    const correctResult = calculateModuloExponentiation(baseValue, exponentValue, modulusValue);

    if (userResult === correctResult) {
        message.textContent = 'Dobrze!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Źle!';
        message.style.color = 'red';
    }

    setTimeout(function() {
        message.textContent = '';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    initializeTask(1);
    initializeTask(2);
    initializeTask(3);
    initializeTask(4);
});