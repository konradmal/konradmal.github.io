document.addEventListener('DOMContentLoaded', function() {
    function initializeTask(taskId, operation) {
        const number1Element = document.getElementById('num1_' + taskId);
        const number2Element = document.getElementById('num2_' + taskId);
        const moduloElement = document.getElementById('num3_' + taskId);

        const randomNumber1 = Math.floor(Math.random() * 100) + 1;
        const randomNumber2 = Math.floor(Math.random() * 10) + 1;
        const randomNumber3 = Math.floor(Math.random() * 4) + 2;

        number1Element.textContent = randomNumber1;
        number2Element.textContent = randomNumber2;
        moduloElement.textContent = randomNumber3;

        const formElement = document.getElementById(taskId);
        formElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handleTaskSubmit(taskId, randomNumber1, randomNumber2, randomNumber3, operation);
        });
    }

    function handleTaskSubmit(taskId, num1, num2, modulo, operation) {
        const resultInput = parseInt(document.querySelector('#' + taskId + ' #task_res').value);
        const remainderInput = parseInt(document.querySelector('#' + taskId + ' #task_rest').value);
        const messageElement = document.querySelector('#' + taskId + ' #task_msg');

        let correctResult;
        switch(operation) {
            case 'add':
                correctResult = num1 + num2;
                break;
            case 'subtract':
                correctResult = num1 - num2;
                break;
            case 'multiply':
                correctResult = num1 * num2;
                break;
            case 'divide':
                correctResult = Math.floor(num1 / num2);
                break;
            default:
                correctResult = 0;
        }

        const correctRemainder = correctResult % modulo;
        if (resultInput === correctResult && remainderInput === correctRemainder) {
            messageElement.textContent = 'Dobrze!';
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = 'Żle!';
            messageElement.style.color = 'red';
        }

        setTimeout(function() {
            messageElement.textContent = '';
        }, 3000);
    }

    initializeTask('task1', 'add');
    initializeTask('task2', 'subtract');
    initializeTask('task3', 'multiply');
    initializeTask('task4', 'divide');
});