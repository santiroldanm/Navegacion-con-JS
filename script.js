import { barcelona, roma, paris, londres } from './ciudades.js'

//OBTENER ELEMENTOS DEL DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

// AGREGAR UN EVENTO A CADA ENLACE
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function() {
        // REMOVER ACTIVO
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        });
        // AGREGAR ACTIVO
        this.classList.add('active')
        // INFORMACION ACTIVO SEGUN ENLACE
        let contenido = obtenerContenido(this.textContent)
        // MOSTRAR EL CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    })
})
    
//FUNCION PARA TRAER LA INFO DE ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona':barcelona,
        'Roma':roma,
        'París':paris,
        'Londres':londres
    }
    return contenido[enlace];
}