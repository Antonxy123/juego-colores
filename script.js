let colores=["rojo","azul","verde","amarillo"];

let puntaje=0;

let correcto="rojo";

preguntaNueva();

function preguntaNueva(){

correcto=colores[Math.floor(Math.random()*4)];

document.getElementById("pregunta").innerHTML="Haz clic en el color "+correcto.toUpperCase();

}

function respuesta(color){

if(color==correcto){

puntaje++;

document.getElementById("mensaje").innerHTML="🎉 ¡Muy Bien!";

}else{

document.getElementById("mensaje").innerHTML="❌ Intenta otra vez";

}

document.getElementById("puntaje").innerHTML=puntaje;

setTimeout(preguntaNueva,1000);

}