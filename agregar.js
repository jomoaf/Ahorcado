var mem = sessionStorage.getItem("arreglo")
var palabras = ["PERLA","MORONI","SANDIA","MELON","JAVA","GRANOLA","MESA","SILLA","PLATO","CELULAR","LAPTOP","TECLADO","RADIO","PELUCHE","CASA"];
if (mem != null) {
    palabras = JSON.parse(mem);
    }

var btnGuardar = document.querySelector("#guardar");
var palabraNueva = document.querySelector("#txtNueva");

function agregarPalabra(){
    
    txtNueva = palabraNueva.value;

    palabras.push(txtNueva);
    sessionStorage.setItem("arreglo", JSON.stringify(palabras));
    
    console.log (mem);
}


function seleccionarPalabra(){
    
    var aleatorio = palabras[Math.floor(Math.random() * palabras.length)];
    return aleatorio;
}

console.log (palabras);

//codigo para eliminar caracteres especiales

var s = {'special':/[^\w^ñ^(á|é|í|ó|ú)^\s^]/g}

function valid(o,w){
    o.value = o.value.replace(r[w],'');
}

function validaremos(o,w){
    o.value = o.value.replace(s[w],'');
}
 



