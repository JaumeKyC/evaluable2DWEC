//PRINCIPIO PARTE JAUME
let keyboard = document.getElementsByTagName('keyboard-cont');

// keyboard.remove();

let i = 0;
let o = 0;

let array1 = ["a", "b", "r", "a", "c", "a", "d", "a", "b", "r", "a"];
let array2 = ["p", "a", "t", "a", "d", "e", "c", "a", "b", "r", "a"]
let string1 = '';
let string2 = '';

document.addEventListener('keyup', function (tecla) {

    if (tecla.key == array1[i]) {
        string1 += (tecla.key);
        i++;

        if (string1 == "abracadabra") {
            string1 = "";
            i = 0;
            document.body.appendChild(keyboard);
        }
    }
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

//PRINCIPIO PARTE NATALIA
let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
let letters = [];
let word = "";

for (let i = 0; i < abc.length; i++) {
    document.querySelector(`[value = ${abc[i]} ]`)
    .addEventListener("click", function (e) {
            e.preventDefault();
            saveLetters(`${abc[i]}`);
        });
}

function saveLetters(letter) {
    letters.push(letter);
}

document.querySelector("[value = submit]").addEventListener("click", function (e) {
    e.preventDefault();
    word = letters.join("");
    letters = [];
    saveInLocalStorage(word);
});

function saveInLocalStorage(word) {
    localStorage.setItem(localStorage.length + 1, word);
}

//FINAL PARTE NATALIA

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
    let casillasAzules = document.getElementsByTagName('tbody')[0].childNodes[0].cells.length;
    let lengthParameter;
    console.log(casillasAzules);

    //Creamos los parrafos con las definiciones
    let divDefinitions = document.getElementsByTagName("table")[1];
    let parrafos;

    for (let index = 1; index <= localStorage.length; index++) {
        parameter = localStorage.getItem(index);

        lengthParameter = parameter.length;

        if(casillasAzules > lengthParameter){

        }

        console.log(parameter);
        console.log(parameter.length);

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
//FINAL PARTE RAUL

