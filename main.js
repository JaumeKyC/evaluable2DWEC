let keyboard = document.getElementById('keyboard-cont');

keyboard.remove();

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

function saveInLocalStorage(word) {
    localStorage.setItem((localStorage.length + 1), JSON.stringify(word));
}