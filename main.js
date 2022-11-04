// removeKeyboard();

function removeKeyboard() {
    let keyboard = document.getElementById("keyboard-cont");
    keyboard.remove(); 
}
//Eliminamos temporalmente el teclado
function removeKeyboard() {
    let keyboard = document.getElementById("keyboard-cont");
    keyboard.remove();
}

//PRINCIPIO PARTE NATALIA

let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","u","v","w","x","y","z"];
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
    // console.log(word)
    saveInLocalStorage(word);
})

function saveInLocalStorage(word) {
    localStorage.setItem((localStorage.length + 1), word);
}

//FINAL PARTE NATALIA

let botonPlay = document.getElementsByTagName('h1')[0];

botonPlay.addEventListener('click',letsPlay);

function letsPlay(){
    getAPI();
}

async function getAPI(){

    let parameter = localStorage.getItem(17);

    console.log(parameter);

    try {
        let response = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+parameter);
        console.log(response.data);
        
    } catch (error) {

        throw new Error('La petición ha fallado');
    }

}


