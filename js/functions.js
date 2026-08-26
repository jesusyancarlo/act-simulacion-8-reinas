var contador = 0;

    function cellclick(celda) {
        if(window.getComputedStyle(celda).backgroundImage == "none"){          
            
            if (contador < 8){
                celda.style.backgroundImage = "url('./img/reina.png')";
                celda.style.backgroundSize = "25px";
                celda.style.backgroundRepeat = "no-repeat";
                celda.style.backgroundPosition = "center";
                contador++;
            }
            
        } else {
            celda.style = `background-image: none;`;
            contador--;
        }
    }

function cambiar(r, c) {
    var tablero = document.getElementById("tablero");

    var r1 = r, c1 = c;
    var r2 = r, c2 = c;
    var r3 = r, c3 = c;
    var r4 = r, c4 = c;

    for (let i = 0; i < 8; i++) {

        tablero.rows[r].cells[i].style.backgroundColor = "red";
        tablero.rows[i].cells[c].style.backgroundColor = "red";

        if (r1 < 8 && c1 < 8) tablero.rows[r1++].cells[c1++].style.backgroundColor = "red";
        if (r2 < 8 && c2 >= 0) tablero.rows[r2++].cells[c2--].style.backgroundColor = "red";
        if (r3 >= 0 && c3 >= 0) tablero.rows[r3--].cells[c3--].style.backgroundColor = "red";
        if (r4 >= 0 && c4 < 8) tablero.rows[r4--].cells[c4++].style.backgroundColor = "red";
    }
}

function reinicio(){
    var celda=document.getElementsByTagName("td");
    for (let i = 0; i < celda.length; i++) {
        celda[i].style.backgroundColor="";
    }
}