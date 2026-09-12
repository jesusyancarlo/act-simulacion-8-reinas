var contador = 0;

function cellclick(celda)
{
      if(celda.style.backgroundImage == "" || celda.style.backgroundImage == "none") {
           if(contador < 8) {
            celda.style.backgroundImage = "url('img/reina.jpeg')";
            celda.style.backgroundSize = "50px";
            celda.style.backgroundRepeat = "no-repeat";
            celda.style.backgroundPosition = "center"; 
            ++contador;
            document.getElementById("reinasContador").innerHTML = `Reinas colocadas: ${contador}`;
            bloquear(celda);
            console.log(contador);
            if(contador == 8) {
                alert("¡Felicidades! Has colocado todas las reinas.");
            }
        }
      } else {
            celda.style.backgroundImage = "none";
            contador--;
            document.getElementById("reinasContador").innerHTML = `Reinas colocadas: ${contador}`;
            reiniciarBloqueo(celda);
            celda.onclick = function(){
                cellclick(this);
            };
      }
}


function cambiar(r,c){
    /*alert(r+""+c)*/
    var celda = document.getElementById("tablero");
     var r1=r, c1=c, r2=r, c2=c;
     var r3=r, c3=c, r4=r, c4=c;

     for (let i = 0; i < 8; i++) {
        celda.rows[r].cells[i].style.backgroundColor="#ff0000";
        celda.rows[i].cells[c].style.backgroundColor="#ff0000";

            if(r1<8 && c1<8) celda.rows[r1++].cells[c1++].style.backgroundColor="red";

            if(r2<8 && c2>=0) celda.rows[r2++].cells[c2--].style.backgroundColor="red";

            if(r3>=0 && c3>=0) celda.rows[r3--].cells[c3--].style.backgroundColor="red";

            if(r4>=0 && c4<8) celda.rows[r4--].cells[c4++].style.backgroundColor="red";

     }
}

function reinicio() {
    var celda = document.getElementsByTagName("td");
    for (let i = 0; i < celda.length; i++)
        celda[i].style.backgroundColor="";
}

function bloquear(celda){
    const row = celda.parentNode.rowIndex;
    const col = celda.cellIndex;
    const tablero = document.getElementById("tablero");
    /*bloqueamos la columna y renglon*/
    for (let i = 0; i < 8; i++){
        //horizontal
        if (i !== col){
            tablero.rows[row].cells[i].onclick = null;
        }

        //vertical
        if (i !== row){
            tablero.rows[i].cells[col].onclick = null;
        }
    }
        
         //diagonales
        for(let i = -7; i <= 7; i++){

            //Diagonal Principal
            if(row + i >=0 && row + i <8 && col + i >=0 && col + i < 8 && i !== 0){
                 tablero.rows[row+i].cells[col+i].onclick = null;
            }

               //Diagonal Secundaria
            if(row + i >=0 && row + i <8 && col - i >=0 && col - i < 8 && i !== 0){
                 tablero.rows[row+i].cells[col-i].onclick = null;
            }
           
        }
        
}

function reiniciarBloqueo(celda){
    const row = celda.parentNode.rowIndex;
    const col = celda.cellIndex;
    const tablero = document.getElementById("tablero");
    /*desbloqueamos la columna y renglon*/
     for (let i = 0; i < 8; i++){
        
            tablero.rows[row].cells[i].onclick = function(){
                cellclick(this);
            }

            tablero.rows[i].cells[col].onclick = function(){
                 cellclick(this);
            };
    }

     for(let i = -7; i <= 7; i++){
            //Diagonal Principal
            if(row + i >=0 && row + i < 8 && col + i >=0 && col + i < 8 && i !== 0){
                 tablero.rows[row+i].cells[col+i].onclick = function(){
                    cellclick(this);
                 }
                
            }

               //Diagonal Secundaria
            if(row + i >=0 && row + i < 8 && col - i >=0 && col - i < 8 && i !== 0){
                 tablero.rows[row+i].cells[col-i].onclick = function(){
                    cellclick(this);
                 }
                  
            }
           
        }
}