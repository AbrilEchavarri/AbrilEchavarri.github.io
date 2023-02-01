
let boton_leer2 = document.getElementById('boton_leer2');

let mostrartodo_texto2 = document.getElementById('mostrartodo_texto2');

boton_leer2.addEventListener('click', info_completa2);

function info_completa2() {
    mostrartodo_texto2.classList.toggle('show2');

    if(mostrartodo_texto2.classList.contains('show2')) {
        boton_leer2.innerHTML = "Leer menos"
    } else {
        boton_leer2.innerHTML = "Leer"
    }
}