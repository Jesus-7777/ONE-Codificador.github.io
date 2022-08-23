/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
/* let textoIngresado= document.getElementById("texto").value; */
let contexto = document.getElementById("contenido-oculto");
let textoResuelto = document.getElementById("texto-desencriptado");


function encriptarTexto() {
 ocultarImagen();
 let ingresado = document.getElementById("texto").value;
 let resuelto = procesoEncriptacion(ingresado);
 document.getElementById("texto-desencriptado").innerHTML= resuelto;
 //console.log(textoIngresado);
 //document.write(textoIngresado.value);
}

function desencriptarTexto() {
 ocultarImagen();
 let textoIngresado = document.getElementById("texto").value;
 let encriTexto = procesoDesencriptacion(textoIngresado);
 document.getElementById("texto-desencriptado").innerHTML = encriTexto;
}

function ocultarImagen() {
 contexto.classList.add("ocultar");
}

function procesoEncriptacion(e) {
 let inputEntrada = e;
 let newMesaje = "";
//let nombre="jesus";
 /* let vocales = ["e","i", "a", "o", "u"]
 let letras = ['enter', 'imes', 'ai', 'ober', 'ufat']
 let nuevaFrase=[];
 for(let i=0;i<letras.length;i++){
  
 }  */
 for (let i = 0; i < inputEntrada.length; i++) {
  if (inputEntrada[i] == "a") {
   newMesaje = newMesaje + "ai";
  }
  else if (inputEntrada[i] == "e") {
   newMesaje = newMesaje + "enter";
  }
  else if (inputEntrada[i] == "i") {
   newMesaje = newMesaje + "imes";
  }
  else if (inputEntrada[i] == "o") {
   newMesaje = newMesaje + "ober";
  }
  else if (inputEntrada[i] == "u") {
   newMesaje = newMesaje + "ufat";
  } else {
   newMesaje = newMesaje + inputEntrada[i]
  }
 }
 return newMesaje;
}

function procesoDesencriptacion(e) {
 let inputEntrada = e;
 let newMesaje = "";

 for (let i = 0; i < inputEntrada.length; i++) {
  if (inputEntrada[i] == "a") {
   newMesaje = newMesaje + "a";
   i=i+1;
  }
  else if (inputEntrada[i] == "e") {
   newMesaje = newMesaje + "e";
   i=i+4;
  }
  else if (inputEntrada[i] == "i") {
   newMesaje = newMesaje + "i";
   i=i+3;
  }
  else if (inputEntrada[i] == "o") {
   newMesaje = newMesaje + "o";
   i=i+3;
  }
  else if (inputEntrada[i] == "u") {
   newMesaje = newMesaje + "u";
   i=i+3;
  } else {
   newMesaje = newMesaje + inputEntrada[i]
  }
 }
 return newMesaje;
}
function copiarTexto(){
 var aux = document.createElement("input");
 aux.setAttribute("value", document.getElementById("texto-desencriptado").innerHTML);
 document.body.appendChild(aux);
 aux.select();
 document.execCommand("copy");
 document.body.removeChild(aux);
}