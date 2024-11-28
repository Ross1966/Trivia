//var nombre = document.getElementById('nombre').value;

function nombre1(){
 


let nombre = document.getElementById('nombre').value;


if (nombre === '') {
    swal("Captura tu nombre");

//document.getElementById("otra").style.display = "none";


} else {

  
  
  document.querySelector('.contenido').innerHTML = ` ${nombre.toUpperCase()}         MUCHA SUERTE!!!`;

        div = document.getElementById('imagen');
        div.style.display = '';



  

       div = document.getElementById('otra');
        div.style.display = '';


}


}







function holi() {

  
    window.location.href="./juego.html"
  
}





function opc1(){
   
  window.location.href="./trivia1.html"
}


function opc2(){
   
  window.location.href="./trivia2.html"
}



function mostrar_imagen1(id) {
   img=document.getElementById(id);
   img.innerHTML='<img src="imagenes/moji1.jpg"/ width = "20%">';
}





















//alert("Bienvenida    " + nombre);

  /*localStorage.setItem("nom",nombre);
  let jugador = localStorage.getItem("nom");
  
  document.getElementById("Hola").innerHTML= "BIENVENIDA(O)    "+ jugador + "!!";
  document.getElementById("Hola").innerHTML= `BIENVENIDA(O)   ${jugador}   !!`*/