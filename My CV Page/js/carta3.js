
let boton_leer3 = document.getElementById('boton_leer3');

let mostrartodo_texto3 = document.getElementById('mostrartodo_texto3');

boton_leer3.addEventListener('click', info_completa3);

function info_completa3() {
    mostrartodo_texto3.classList.toggle('show3');

    if(mostrartodo_texto3.classList.contains('show3')) {
        boton_leer3.innerHTML = "Leer menos"
    } else {
        boton_leer3.innerHTML = "Leer"
    }
}