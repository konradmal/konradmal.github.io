function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function modularInverse(a, m) {
    a %= m;
    for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) {
            return x;
        }
    }
    return -1;
}

function solveCongruence(A, B, m) {
    A %= m;
    B %= m;
    const d = gcd(A, m);
    const inv = modularInverse(A / d, m / d);
    if (B % d !== 0 || inv === -1) {
        return -1;
    } else {
        const x = (B / d) * inv;
        return x % (m / d);
    }
}

function initializeTask(taskNumber) {
    const a = generateRandomNumber(5, 20);
    const b = generateRandomNumber(10, 50);
    const m = generateRandomNumber(2, b - 1);

    document.getElementById(`congruence_task${taskNumber}`).textContent = `${a} * x ≡ ${b} (mod ${m})`;

    document.getElementById(`form_task${taskNumber}`).addEventListener('submit', function(e) {
        e.preventDefault();
        handleTaskSubmit(taskNumber, a, b, m);
    });
}

function handleTaskSubmit(taskNumber, a, b, m) {
    const x0 = parseInt(document.getElementById(`result_task${taskNumber}`).value);
    const k = parseInt(document.getElementById(`mGcd_task${taskNumber}`).value);
    const result = solveCongruence(a, b, m);
    const message = document.getElementById(`message_task${taskNumber}`);

    if (result === -1 && x0 === -1) {
        message.textContent = "Brak rozwiązania w liczbach całkowitych";
        message.style.color = 'green';
    } else if (result !== -1 && x0 === result && k === m / gcd(a, m)) {
        message.textContent = 'Dobrze';
        message.style.color = 'green';
    } else {
        message.textContent = 'Źle';
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