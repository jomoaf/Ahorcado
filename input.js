var tecla;
var letra;
var ancho = 350;
var errores=0;
var aciertos=0;


document.addEventListener("keydown", function (event){

    letra = event.key;
    letra = letra.toUpperCase();
  
    tecla = isNaN(letra);

    indice = [];
    busqueda = aleatorio.indexOf(letra);
    busqueda1 = aleatorio.indexOf(letra);
   
    while (busqueda1 != -1){

        indice.push(busqueda1);
        busqueda1 = aleatorio.indexOf(letra, busqueda1 + 1);
    }
    
    var anchoBueno = (400+(busqueda*50));
    
    indice.forEach(function(valor){

        console.log("valorIndice "+valor)
        
        if (indice.length > 1){

            anchoBueno = (400+(valor*50));

            if (tecla == true) {
                
                for (x=anchoBueno; x<=anchoBueno && x<((tmnPalabra*50)+400); x=x+50){

                    dibujarTextoCorrecto(letra, x);  
                     
                }
                aciertos = aciertos + .5;
                
            }
        }     
    })
        
    console.log("indice "+indice);
    console.log("busqueda1 "+busqueda1);
    
    if (busqueda != -1){

        if (tecla == true) {
            
            for (x=anchoBueno; x<=anchoBueno && x<((tmnPalabra*50)+400); x=x+50){

                dibujarTextoCorrecto(letra, x);  
            }
            console.log("ancho bueno"+anchoBueno);
            console.log(busqueda);
            aciertos = aciertos + 1;            
        }        
        else {
            alert("Ingresa una letra, los números no son validos");
        }
        console.log("aciertos "+aciertos);
        console.log("tamaño "+tmnPalabra);

        if (aciertos>=tmnPalabra){
            dibujarGanador();
        }
    }
    else {    
            
        if (tecla == true) {    
            
            for (x=ancho; x<=ancho && x<800; x=x+50){

                dibujarTextoInorrecto(letra, x);  
            }
            errores = errores+1;
            ancho = ancho+50;
            console.log("errores "+errores);

            switch (errores){
                case 1:
                    dibujarCabeza();
                    break;
                case 2:
                    dibujarTronco();
                    break;
                case 3:
                    dibujarBrazoIzq();
                    break;
                case 4:
                    dibujarBrazoDer();
                    break;
                case 5:
                    dibujarPiernaIzq();
                    break;
                case 6:
                    dibujarPiernaDer();
                    dibujarPerdedor();
            }
        }
        else {
            alert("Ingresa una letra, los números no son validos");
        }  
    }
});

