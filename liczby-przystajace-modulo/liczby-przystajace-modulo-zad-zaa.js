document.addEventListener('DOMContentLoaded', function() {
    function randomNumbers() {
        return {
            number1: Math.floor(Math.random() * 1000) + 1,
            number2: Math.floor(Math.random() * 100) + 1,
            number3: Math.floor(Math.random() * 10) + 1
        };
    }

    function initializeTask(taskId) {
        const taskForm = document.getElementById('task' + taskId);
        const { number1, number2, number3 } = randomNumbers();

        document.getElementById('num1_task' + taskId).textContent = number1;
        document.getElementById('num2_task' + taskId).textContent = number2;
        document.getElementById('num3_task' + taskId).textContent = number3;

        taskForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleTaskSubmit(taskId, number1, number2, number3);
        });
    }

    function handleTaskSubmit(taskId, number1, number2, number3) {
        const response = document.getElementById('task' + taskId + '_response').value;
        const message = document.getElementById('task' + taskId + '_message');
        const correctAnswer = (number1 % number3 === number2 % number3) ? 'Tak' : 'Nie';

        if (response === correctAnswer) {
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

    initializeTask(1);
    initializeTask(2);
    initializeTask(3);
    initializeTask(4);
});