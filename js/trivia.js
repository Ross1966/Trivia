let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let suma = 0;



function respuesta1() {
document.getElementById('resp1').style.background='white';  
document.getElementById('resp2').style.background='white';   
document.getElementById('resp3').style.background='white';    
let elementoActivo = document.querySelector('input[name="idioma"]:checked');

switch(elementoActivo.value){
case 'ingles':
  document.getElementById('resp1').style.background='#36F14D';
  swal('Excelente', 'Buena tu respuesta!!!!','success');
   contador1 = 1;
   break;
case 'frances':
  document.getElementById('resp2').style.background='red';
  swal('Lo sentimos', 'Vuelve a intentarlo','error');
   contador1 = 0;
   break;
case 'espanol':
  document.getElementById('resp3').style.background='red';
  swal('Lo sentimos', 'Vuelve a intentarlo','error');
   contador1 = 0;
   break;
 default:
    swal('Elige una opción');
    break;
}

}

function respuesta2() {
document.getElementById('resp4').style.background='white';
document.getElementById('resp5').style.background='white';   
document.getElementById('resp6').style.background='white';   
let elementoActivo = document.querySelector('input[name="pais"]:checked');

switch(elementoActivo.value){
case 'china':
  document.getElementById('resp4').style.background='red';
  swal('Lo sentimos', 'Vuelve a intentarlo','error');
  contador2= 0;
  break;
case 'rusia':
  document.getElementById('resp5').style.background='#36F14D';
  swal('Excelente', 'Buena tu respuesta!!!!','success');
  contador2= 1;
  break;
case 'canada':
  document.getElementById('resp6').style.background='red';
  swal('Lo sentimos', 'Vuelve a intentarlo','error');
  contador2= 0;
  break;

default:
    alert('Elige una opción');
    break;

     }
}


function respuesta3() {
document.getElementById('resp7').style.background='white';
document.getElementById('resp8').style.background='white';   
document.getElementById('resp9').style.background='white';   
let elementoActivo = document.querySelector('input[name="moneda"]:checked');

switch(elementoActivo.value){
case 'kuwait':
  document.getElementById('resp7').style.background='#36F14D';
  swal('Excelente', 'Buena tu respuesta!!!!','success');
  contador3= 1;
  break;
case 'japon':
  document.getElementById('resp8').style.background='red';
  swal('Lo sentimos', 'Vuelve a intentarlo','error');
  contador3= 0;
  break;
case 'reinounido':
  document.getElementById('resp9').style.background='red';
  swal('Lo sentimos', 'Vuelve a intentarlo','error');
  contador3= 0;
  break;

default:
    swal('Elige una opción');
    break;

     }
}





function sumar(){
    
    //document.getElementById('suma').value = suma;
    suma = contador1 + contador2 + contador3;
    if (suma === 3){
     swal('Obtuviste    '  + suma + '    Puntos' +'  FELICIDADES!!' );
      div = document.getElementById('emocion1');
        div.style.display = '';

    } else {
        swal('Obtuviste    '  + suma + '    Puntos' +'  Te hace falta leer amigo');
        div = document.getElementById('emocion');
        div.style.display = '';

        
        
    }

    
    
}

function cambiaColor(){
document.getElementById('prueba').style.background='#CCCCCC';

}