function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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

function primeNumbers(min, max) {
    let prime = randomNumbers(min, max);
    while (!isPrime(prime)) {
        prime = randomNumbers(min, max);
    }
    return prime;
}

function nonPrime(min, max) {
    let prime = randomNumbers(min, max);
    while (isPrime(prime)) {
        prime = randomNumbers(min, max);
    }
    return prime;
}

function calculateModuloExponentiation(base, exponent, modulus) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = (result * base) % modulus;
    }
    return result;
}

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function relativelyPrime(a, b) {
    if (gcd(a, b) === 1) return true;
    return false;
}

function initializeTask(taskId) {
    const taskA = document.getElementById(`task${taskId}_a`);
    const taskB = document.getElementById(`task${taskId}_b`);
    const taskC = document.getElementById(`task${taskId}_c`);
    const resultInput = document.getElementById(`task${taskId}_result`);
    const messageTask = document.getElementById(`task${taskId}_message`);

    const taskAValue = (taskId === 3 || taskId === 4) ? nonPrime(2, 100) : primeNumbers(2, 100);
    const taskCValue = (taskId === 3 || taskId === 4) ? primeNumbers(2, 20) : nonPrime(2, 20);
    const taskBValue = randomNumbers(2, 10);

    taskA.textContent = taskAValue;
    taskB.textContent = taskBValue;
    taskC.textContent = taskCValue;

    document.getElementById(`task${taskId}`).addEventListener('submit', function(e) {
        e.preventDefault();
        handleTaskSubmit(taskAValue, taskBValue, taskCValue, resultInput, messageTask);
    });
}

function handleTaskSubmit(taskAValue, taskBValue, taskCValue, resultInput, messageTask) {
    const resultTask = parseInt(resultInput.value);
    const correctResult = calculateModuloExponentiation(taskAValue, taskBValue, taskCValue);

    if (resultTask === correctResult) {
        messageTask.textContent = 'Dobrze!';
        messageTask.style.color = 'green';
    } else {
        messageTask.textContent = 'Źle!';
        messageTask.style.color = 'red';
    }
    setTimeout(function() {
        messageTask.textContent = '';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    initializeTask(1);
    initializeTask(2);
    initializeTask(3);
    initializeTask(4);
});