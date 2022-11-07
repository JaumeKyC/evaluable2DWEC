//PRINCIPIO PARTE JAUME
let keyboard = document.getElementById('keyboard-cont');

let i = 0;
let o = 0;

let array1 = ["a", "b", "r", "a", "c", "a", "d", "a", "b", "r", "a"];
let array2 = ["p", "a", "t", "a", "d", "e", "c", "a", "b", "r", "a"];
let string1 = '';
let string2 = '';

document.addEventListener('keyup', function (tecla) {

    if (tecla.key == array1[i]) {
        string1 += (tecla.key);
        i++;
        console.log(string1);
        if (string1 == "abracadabra") {
            string1 = "";
            i = 0;
            document.body.appendChild(keyboard);
        }
    }
    let buttons = document.getElementsByTagName("button");
    let word = "";
    for (let i = 0; i < buttons.length-1; i++) {
        buttons[i].addEventListener("click", function(event){
            word += this.value;
        });
    }
    buttons[buttons.length - 1].addEventListener("click", function(event){
        event.preventDefault();
        console.log(word);
        saveInLocalStorage(word);
        word = '';
    })
});
document.addEventListener('keyup', function (tecla) {
if (tecla.key == array2[o]) {
string2 += (tecla.key);
o++;
if (string2 == "patadecabra") {
string2 = "";
o = 0;
keyboard.remove();
}
}
});
//FIN PARTE DE JAUME

function saveInLocalStorage(data) {
    localStorage.setItem(localStorage.length + 1, data);
    }

function removeKeyboard() {
    let keyboard = document.getElementById("keyboard-cont");
    keyboard.remove();
}

//PRINCIPIO PARTE RAUL
let botonPlay = document.getElementsByTagName("h1")[0];

botonPlay.addEventListener("click", letsPlay);

//FUNCION BOTON DE JUGAR
function letsPlay() {
//Llamamos a la API
getAPI();
}

//FUNCION PARA LA LLAMADA DE LA API
async function getAPI() {

let parameter;
let definition;
let cantidadDefiniciones;
let casillasAzules = document.getElementsByTagName('table')[0];

//Creamos los parrafos con las definiciones
let divDefinitions = document.getElementsByTagName("table")[1];
let parrafos;

for (let index = 1; index <= localStorage.length; index++) {
parameter = localStorage.getItem(index);

console.log(parameter);

try {
let response = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + parameter);

cantidadDefiniciones = response.data[0].meanings[0].definitions.length;

for (let i = 0; i <= cantidadDefiniciones; i++) {
definition = response.data[0].meanings[0].definitions[i].definition;
console.log(definition);

parrafos = document.createElement("p");
divDefinitions.appendChild(parrafos);
document.getElementsByTagName("p")[i].textContent = definition;

document.getElementsByTagName("p")[i].style.backgroundColor = "orange";
document.getElementsByTagName("p")[i].style.color = "white";
document.getElementsByTagName("p")[i].style.textAlign = "center";

}

} catch (error) {
throw new Error("La petición ha fallado");
}
}

}

keyboard.remove();
//FINAL PARTE RAUL