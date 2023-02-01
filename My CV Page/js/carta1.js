
let boton_leer1 = document.getElementById('boton_leer1');

let mostrartodo_texto1 = document.getElementById('mostrartodo_texto1');

boton_leer1.addEventListener('click', info_completa1);

function info_completa1() {
    mostrartodo_texto1.classList.toggle('show1');

    if(mostrartodo_texto1.classList.contains('show1')) {
        boton_leer1.innerHTML = "Leer menos"
    } else {
        boton_leer1.innerHTML = "Leer"
    }
}
