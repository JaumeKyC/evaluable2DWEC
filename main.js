//removeKeyboard();

function removeKeyboard() {
    let keyboard = document.getElementById("keyboard-cont");
    keyboard.remove(); 
}

let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
let letters = [];
let word = '';

for (let i = 0; i < abc.length; i++) {
    document.querySelector(`[value = ${abc[i]} ]`).addEventListener('click', function (e) {
        e.preventDefault();
        saveLetters(`${abc[i]}`);    
    })
}

function saveLetters(letter) {
    letters.push(letter);
}

document.querySelector("[value = submit]").addEventListener("click",function (e) {
    e.preventDefault();
    word = letters.join('');
    letters = [];
    console.log(word)
    saveInLocalStorage(word);
})

function saveInLocalStorage(word) {
    localStorage.setItem((localStorage.length + 1), JSON.stringify(word));
}