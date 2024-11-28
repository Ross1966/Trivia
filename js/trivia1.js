let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let suma = 0;



function respuesta1() {
document.getElementById('resp1').style.background='white';  
document.getElementById('resp2').style.background='white';   
document.getElementById('resp3').style.background='white';    
let elementoActivo = document.querySelector('input[name="sudar"]:checked');

switch(elementoActivo.value){
case 'grasa':
  document.getElementById('resp1').style.background='red';
   swal('Lo sentimos', 'Vuelve a intentarlo','error');
   contador1 = 0;
   break;
case 'agua':
  document.getElementById('resp2').style.background='#36F14D';
   swal('Excelente','Buena tu respuesta!!!!','success');
   contador1 = 1;
   break;
case 'kilos':
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
let elementoActivo = document.querySelector('input[name="abd"]:checked');

switch(elementoActivo.value){
case 'abdominales':
  document.getElementById('resp4').style.background='red';
  swal('Lo sentimos', 'Vuelve a intentarlo','error');
  contador2= 0;
  break;
case 'cardio':
  document.getElementById('resp5').style.background='red';
   swal('Lo sentimos', 'Vuelve a intentarlo','error');
  contador2= 0;
  break;
case 'dieta':
  document.getElementById('resp6').style.background='#36F14D';
  swal('Excelente','Buena tu respuesta!!!!','success');
 
  contador2= 1;
  break;

default:
    swal('Elige una opción');
    break;

     }
}


function respuesta3() {
document.getElementById('resp7').style.background='white';
document.getElementById('resp8').style.background='white';   
document.getElementById('resp9').style.background='white';   
let elementoActivo = document.querySelector('input[name="faja"]:checked');

switch(elementoActivo.value){
case 'sudor':
  document.getElementById('resp7').style.background='red';
  swal('Lo sentimos', 'Vuelve a intentarlo','error');
  contador3= 0;
  break;
case 'centro':
  document.getElementById('resp8').style.background='red';
  swal('Lo sentimos', 'Vuelve a intentarlo','error');
  contador3= 0;
  break;
case 'postura':
  document.getElementById('resp9').style.background='#36F14D';
  swal('Excelente','Buena tu respuesta!!!!','success');
 
  contador3= 1;
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
        swal('Obtuviste    '  + suma + '    Puntos' +'  Te hace falta informarte más');
        div = document.getElementById('emocion');
        div.style.display = '';

        
        
    }

    
    
}

function cambiaColor(){
document.getElementById('prueba').style.background='#CCCCCC';

}