const shapes = ['circle', 'square', 'triangle'];
let currentShape;
let timer;

function generateShape() {
    // Hide all shapes initially
    document.getElementById('circle').style.display = 'none';
    document.getElementById('square').style.display = 'none';
    document.getElementById('triangle').style.display = 'none';

    const randomIndex = Math.floor(Math.random() * shapes.length);
    currentShape = shapes[randomIndex];

    // Show the selected shape
    document.getElementById(currentShape).style.display = 'block';
    document.getElementById('question').innerText = `What shape is this? (circle, square, triangle)`;
}

function startTimer() {
    let timeLeft = 10;
    document.getElementById('time').innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('result').innerText = "Time's up! You failed the CAPTCHA.";
            document.getElementById('submit').disabled = true;
        }
    }, 1000);
}

document.getElementById('submit').addEventListener('click', function() {
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const resultElement = document.getElementById('result');

    if (userAnswer === currentShape) {
 clearInterval(timer);
        resultElement.innerText = "Correct! You are human.";
        resultElement.style.color = "green";
    } else {
        resultElement.innerText = "Incorrect! Please try again.";
        resultElement.style.color = "red";
    }
});

generateShape();
startTimer();