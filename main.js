removeKeyboard();
//Eliminamos temporalmente el teclado
function removeKeyboard() {
    let keyboard = document.getElementById("keyboard-cont");
    keyboard.remove();
}

let botonPlay = document.getElementsByTagName('h1')[0];

botonPlay.addEventListener('click',letsPlay);

function letsPlay(){
    let arrayPalabras = ['diego','jaume','natalia','raul'];
    localStorage.setItem('palabras',arrayPalabras);

    for (let index = 0; index < arrayPalabras.length; index++) {
        console.log(index);
    }

    async function getAPI(palabra){

        try {
            let response = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+index);
            console.log(response.data);
            
        } catch (error) {
            throw new Error('La petición ha fallado');
        }

    }
}





