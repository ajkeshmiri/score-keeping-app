const button = document.querySelectorAll('button');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
let p1Score = 0;
let p2Score = 0;
let targetScore = document.querySelector('select').selectedOptions[0].value;
const winningPlayer = document.querySelector('#winningPlayer');

document.querySelector('select').addEventListener('change', function () {
    targetScore = document.querySelector('select').selectedOptions[0].value;
})

button[0].addEventListener('click', function () {
    p1Score++;
    p1.innerText = p1Score;
    checkWin();
})
button[2].addEventListener('click', function () {
    p2Score++;
    p2.innerText = p2Score;
    checkWin();
})
button[4].addEventListener('click', function () {
    reset();
})
button[1].addEventListener('click', function () {
    if (p1Score >= 1) {
        p1Score--;
        p1.innerText = p1Score;
    }
})
button[3].addEventListener('click', function () {
    if (p2Score >= 1) {
        p2Score--;
        p2.innerText = p2Score;
    }
})

const reset = () => {
    p1Score = 0;
    p1.innerText = p1Score;
    p2Score = 0;
    p2.innerText = p2Score;
    button[0].classList.remove("hide");
    button[1].classList.remove("hide");
    button[2].classList.remove("hide");
    button[3].classList.remove("hide");
    banner.classList.add('hide');
    p1.classList.remove('loser');
    p1.classList.remove('winner');
    p2.classList.remove('winner');
    p2.classList.remove('loser');
    button[4].classList.remove('increase');
}

function checkWin() {
    if (targetScore == p1Score) {
        winner();
        banner.classList.remove('hide');
        winningPlayer.innerText = 'One';
        p1.classList.add('winner');
        p2.classList.add('loser');

    }
    else if (targetScore == p2Score) {
        winner();
        banner.classList.remove('hide');
        winningPlayer.innerText = 'Two';
        p1.classList.add('loser');
        p2.classList.add('winner');

    }
}
function winner() {
    button[0].classList.add("hide");
    button[1].classList.add("hide");
    button[2].classList.add("hide");
    button[3].classList.add("hide");
    button[4].classList.add('increase');

}