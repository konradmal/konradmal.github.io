document.addEventListener('DOMContentLoaded', function() {
    function initializeTask(taskNumber) {
        const taskForm = document.getElementById('task' + taskNumber);
        const num1Element = document.getElementById('num1_task' + taskNumber);
        const num2Element = document.getElementById('num2_task' + taskNumber);
        const randomNumber1 = Math.floor(Math.random() * 100) + 1;
        const randomNumber2 = Math.floor(Math.random() * 10) + 1;

        num1Element.textContent = randomNumber1;
        num2Element.textContent = randomNumber2;

        taskForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleTaskSubmit(taskNumber, randomNumber1, randomNumber2);
        });
    }

    function handleTaskSubmit(taskNumber, num1, num2) {
        const taskForm = document.getElementById('task' + taskNumber);
        const resultInput = parseInt(taskForm.querySelector('#task' + taskNumber + '_result').value);
        const remainderInput = parseInt(taskForm.querySelector('#task' + taskNumber + '_remainder').value);
        const message = taskForm.querySelector('#task' + taskNumber + '_message');
        const correctResult = Math.floor(num1 / num2);
        const correctRemainder = num1 % num2;

        if (resultInput === correctResult && remainderInput === correctRemainder) {
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