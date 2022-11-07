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
