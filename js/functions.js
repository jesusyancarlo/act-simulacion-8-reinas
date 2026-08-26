var contador = 0;

    function cellclick(celda) {
        if(window.getComputedStyle(celda).backgroundImage == "none"){          
            
            if (contador < 8){
                celda.style.backgroundImage = "url('./img/reina.png')";
                celda.style.backgroundSize = "25px";
                celda.style.backgroundRepeat = "no-repeat";
                celda.style.backgroundPosition = "center";
               bloquear(celda);
                contador++;
  
            }
            
        } else {
            celda.style = `background-image: none;`;
            contador--;
        }
    }

function cambiar(r, c) {
  const tablero = document.getElementById("tablero");

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (i === r || j === c || Math.abs(i - r) === Math.abs(j - c)) {
        tablero.rows[i].cells[j].style.backgroundColor = "red";
      }
    }
  }
}

function reinicio(){
    var celda=document.getElementsByTagName("td");
    for (let i = 0; i < celda.length; i++) {
        celda[i].style.backgroundColor="";
    }
}

function bloquear(celda){
    const row = celda.parentNode.rowIndex;
    const col = celda.cellIndex;
    const tablero = document.getElementById("tablero")
    /*bloqueamos la columna y el renglón*/
    for (let i = 0; i < 8; i++) {
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
            if()
        }
    
}