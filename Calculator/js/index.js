document.querySelector('.arrow_left').addEventListener('click',()=>{
    document.querySelector('.signs_div').classList.toggle('show');
})

var input = document.querySelector('#input');
var btn = document.querySelectorAll('.btn');

for(item of btn){
    item.addEventListener('click',(e)=>{
        btntext = e.target.innerText;

        if(btntext == '×'){
            btntext = '*';
        }

        if(btntext == '÷'){
            btntext = '/';
        }
        input.value += btntext;
    })
}

function backspace() {
    input.value = input.value.substr(0, input.value.length - 1);
}

function sin() {
    input.value = Math.sin(input.value);
}

function cos() {
    input.value = Math.cos(input.value);
}

function tan() {
    input.value = Math.tan(input.value);
}

function pi() {
    input.value = 3.14159265359;
}

function log() {
    input.value = Math.log(input.value);
}

function fact() {
    var i, number, x;
    x = 1
    number = input.value;
    for (i = 1; i <= number; i++) {
        x = x * i;
    }
    i = i - 1;

    input.value = x;
}

function root() {
    input.value = Math.sqrt(input.value, 2);
}

function e() {
    input.value = 2.71828182846;
}

function pow() {
    input.value = Math.pow(input.value, 2);
}
