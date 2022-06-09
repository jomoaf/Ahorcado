var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "#FAE5D3";
pincel.fillRect(0,0,1200,800);	

//agrega la palabra aleatoria en una variable, esta palabra se obtiene de seleccionPalabra()
var aleatorio = seleccionarPalabra();
var tmnPalabra = aleatorio.length
console.log(aleatorio);
console.log(tmnPalabra);

function dibujarGuiones(x,){
    
    pincel.fillStyle = "#EB984E";
	pincel.fillRect(x,700,40,4);

}

//dibuka el numero de guiones deacuerdo al numero de letras
for (x=400; x<((tmnPalabra*50)+400); x=x+50) {
    dibujarGuiones(x);
}

//Dibujar letras

function dibujarTextoCorrecto(letra, x){

    pincel.font = "bold 51px Arial";
    pincel.fillStyle = "#EB984E";
    pincel.fillText(letra,x,690);
    pincel.textAlign = "left";
 
}


function dibujarTextoInorrecto(letra, x){

    pincel.font = "bold 51px Arial";
    pincel.fillStyle = "#EB984E";
    pincel.fillText(letra,x,750);
    pincel.textAlign = "left";

}

function dibujarHorca(){

    //dibuja la horca
    pincel.lineWidth = 5;
    pincel.strokeStyle = "#EB984E";
    pincel.beginPath();
    pincel.moveTo(450,600);
    pincel.lineTo(750,600);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(530,600);
    pincel.lineTo(530,240);
    pincel.stroke();        

    pincel.beginPath();
    pincel.moveTo(527.5,240);
    pincel.lineTo(710,240);
    pincel.stroke();  

    pincel.beginPath();
    pincel.moveTo(707.5,240);
    pincel.lineTo(707.5,290);
    pincel.stroke();

}

function dibujarCabeza(){

    //dibuja la cabeza
    pincel.strokeStyle = "#EB984E";
    pincel.fillStyle = "#FAE5D3";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.arc(707.5, 320, 30, 0, 2*3.14);
    pincel.fill();
    pincel.stroke();

}

function dibujarTronco(){

    //dibuja el tronco
    pincel.lineWidth = 5;
    pincel.strokeStyle = "#EB984E";
    pincel.beginPath();
    pincel.moveTo(707.5,350);
    pincel.lineTo(707.5,485);
    pincel.stroke();

}
    
function dibujarPiernaIzq(){

    //dibuja pierna izquierda
    pincel.lineWidth = 5;
    pincel.strokeStyle = "#EB984E";
    pincel.beginPath();
    pincel.moveTo(707.5,485);
    pincel.lineTo(665,557);
    pincel.stroke();

}

function dibujarPiernaDer(){

    //dibuja pierna derecha
    pincel.lineWidth = 5;
    pincel.strokeStyle = "#EB984E";
    pincel.beginPath();
    pincel.moveTo(707.5,485);
    pincel.lineTo(750,557);
    pincel.stroke();
    
}

function dibujarBrazoIzq(){
    
    //dibuja brazo izquierdo
    pincel.lineWidth = 5;
    pincel.strokeStyle = "#EB984E";
    pincel.beginPath();
    pincel.moveTo(707.5,350);
    pincel.lineTo(665,422);
    pincel.stroke();

}

function dibujarBrazoDer(){

    //dibuja brazo derecho
    pincel.lineWidth = 5;
    pincel.strokeStyle = "#EB984E";
    pincel.beginPath();
    pincel.moveTo(707.5,350);
    pincel.lineTo(750,422);
    pincel.stroke();

}

function dibujarPerdedor(){

    pincel.font = "bold 51px Arial";
    pincel.fillStyle = "red";
    pincel.fillText("¡Fin del Juego!",755,400);
    pincel.textAlign = "center";

}

function dibujarGanador(){

    pincel.font = "bold 38px Arial";
    pincel.fillStyle = "green";
    pincel.fillText("¡Ganaste, Felicidades!",780,400);
    pincel.textAlign = "center";

}

    

  

   


    



