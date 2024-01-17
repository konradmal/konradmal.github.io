function eulerFunction(n) {
    let result = n;
    for (let p = 2; p * p <= n; ++p) {
        if (n % p == 0) {
            while (n % p == 0) {
                n /= p;
            }
            result -= result / p;
        }
    }
    if (n > 1) {
        result -= result / n;
    }
    return result;
}

document.addEventListener('DOMContentLoaded', function() {
    function initializeTask(taskNumber) {
        const eulerTaskForm = document.getElementById('euler_task' + taskNumber);
        const eulerResultInput = document.getElementById('euler_task' + taskNumber + '_result');
        const eulerMessage = document.getElementById('euler_task' + taskNumber + '_message');
        const eulerNumber = Math.floor(Math.random() * (450 + 1)) + 50;
        document.getElementById('euler_num' + taskNumber + '_task' + taskNumber).textContent = eulerNumber;

        eulerTaskForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleTaskSubmit(eulerResultInput, eulerMessage, eulerNumber);
        });
    }

    function handleTaskSubmit(eulerResultInput, eulerMessage, eulerNumber) {
        const result = parseInt(eulerResultInput.value);
        const eulerResult = eulerFunction(eulerNumber);
        if (result === eulerResult) {
            eulerMessage.textContent = 'Dobrze!';
            eulerMessage.style.color = 'green';
        } else {
            eulerMessage.textContent = 'Źle';
            eulerMessage.style.color = 'red';
        }
        setTimeout(function() {
            eulerMessage.textContent = '';
        }, 3000);
    }

    initializeTask(1);
    initializeTask(2);
    initializeTask(3);
    initializeTask(4);
});