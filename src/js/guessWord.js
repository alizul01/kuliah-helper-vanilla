const inputs = document.querySelector('.gs__inputs');
const resetBtn = document.querySelector('.btn-reset');
const hint = document.querySelector('.hint span');
const typingInput = document.querySelector('.gs__typing-input');
const wrongLetters = document.querySelector('.gs__wrong-letter span');
const liveRemain = document.querySelector('.gs__lives span');
let word, maxGuess, correct = [], incorect = [];

function randWord() {
    let wordObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = wordObj.word;
    maxGuess = word.length + 2;
    liveRemain.innerHTML = maxGuess;
    console.log(word);

    hint.innerHTML = wordObj.hint;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" name="" disabled>`;
    }

    inputs.innerHTML = html;
}

randWord();

function initializeGame(e) {
    let key = e.target.value;
    if(key.match(/^([a-zA-Z])$/) && !incorect.includes(key)) {
        console.log(key);
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    inputs.querySelectorAll("input")[i].value = key;
                    correct.push(key);
                }

                
            }
        } else {
            maxGuess--;
            incorect.push(key);
        }
    }
    liveRemain.innerHTML = maxGuess;
    wrongLetters.innerHTML = incorect.join(", ");
    typingInput.value = "";

    if (maxGuess == 0) {
        alert("Game Over");
        for (let i = 0; i < word.length; i++) {
            inputs.querySelectorAll("input")[i].value = word[i];
        }
    } else if (correct.length == word.length) {
        alert("You Win");
    }
}

resetBtn.addEventListener('click', () => {
    incorect = [];
    wrongLetters.innerHTML = incorect.join(", ");
    randWord();
});

typingInput.addEventListener('input', initializeGame);

document.addEventListener('keydown', () => {
    typingInput.focus();
});