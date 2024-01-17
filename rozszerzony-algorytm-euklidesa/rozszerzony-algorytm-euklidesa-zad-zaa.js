function extendedEuclideanAlgorithm(a, b) {
    let x0 = 1, y0 = 0, x1 = 0, y1 = 1;
    while (b !== 0) {
        const q = Math.floor(a / b);
        [x0, x1] = [x1, x0 - q * x1];
        [y0, y1] = [y1, y0 - q * y1];
        [a, b] = [b, a - q * b];
    }
    return [a, x0, y0];
}

function initializeTask(taskNumber) {
    const taskForm = document.getElementById(`task${taskNumber}`);
    const result1Input = document.getElementById(`task${taskNumber}_result1`);
    const result2Input = document.getElementById(`task${taskNumber}_result2`);
    const messageTask = document.getElementById(`task${taskNumber}_message`);

    const numberN = Math.floor(Math.random() * (800 + 1)) + 200;
    const numberM = Math.floor(Math.random() * (100 + 1)) + 100;

    document.getElementById(`task${taskNumber}_n`).textContent = numberN;
    document.getElementById(`task${taskNumber}_m`).textContent = numberM;

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleTaskSubmit(numberN, numberM, result1Input, result2Input, messageTask);
    });
}

function handleTaskSubmit(numberN, numberM, result1Input, result2Input, messageTask) {
    const result1 = parseInt(result1Input.value);
    const result2 = parseInt(result2Input.value);
    const [gcd, x, y] = extendedEuclideanAlgorithm(numberN, numberM);

    if (result1 === x && result2 === y) {
        messageTask.textContent = 'Dobrze!';
        messageTask.style.color = 'green';
    } else {
        messageTask.textContent = 'Źle!';
        messageTask.style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', function() {
        initializeTask(1);
        initializeTask(2);
        initializeTask(3);
        initializeTask(4);
});