// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
if (x >= y ){ return x;} 
 else {return y;}

}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
if (edad >= 18) return  "Allowed" ;
return "Not allowed"

}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
if (status === 1 ){return "Online";}
else if (status === 2 ){return "Away";}
else {return "Offline";}
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === 'aleman' ){return "Guten Tag!";}
else if (idioma === "mandarin" ){return "Ni Hao!";}
else if (idioma === "ingles" ){return "Hello!"}
else {return "Hola!";}
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
 // Switch me permite agrupar varias funciones  en casos y al final un default
  switch (color) {
    case "blue":
      return "This is blue" ;
    case "red":
      return "This is red" ;
    case  "green": 
      return "This is green";
    case "orange":
      return "This is orange";

      default:
        return "Color not found";
      
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  // || las dos barras significa la letra Ó 
if (numero === 10 || numero ===5 ){
  return true ;
}else {
return false 
}

}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  // && esta significa la letra Y como un condicionante para que se cumpla algo 
if (numero < 50 && numero > 20 ){
  return true ;
} else {return false ;}
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero %1=== 0){
    return true
  }else{return false}
  
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 ===0 && numero % 5 ===0 ){
    return "fizzbuzz";}
    if (numero % 3 ===0){
      return "fizz";
    }
    if (numero % 5 ===0){
      return "buzz";
  }
  {return numero;}
 

  }  
  //if (numero % 3 ===0){return "fizz";}
  //if (numero % 5 ===0){return "buzz";}
 



function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

 // if (num1 > num2 && num1 > num3 && num1 > 0  ){
  //return "Número 1 es mayor y positivo" ;
//}
//else if (num1 < 0 || num2 < 0 || num3 < 0 ){
  //return "Hay negativos";
//}
//else if (num3 > num1 && num3 > num2){
  //return num3 + 1; 
//}
//else if (num1=== 0 || num2 === 0 || num3 === 0 ){
  //return "Error" ;
//}
//{return false;}
if (num1 < 0 || num2 < 0 || num3 < 0 ){
  return "Hay negativos";
}
else if (num1=== 0 || num2 === 0 || num3 === 0 ){
  return "Error" ;
}
if (num1 > num2 && num1 > num3 && num1 > 0  ){
 return "Número 1 es mayor y positivo" ;
}
else if (num3 > num1 && num3 > num2){
  var resultado = num3 + 1 ;
  return resultado; 

}

{
  return false;
}
}


function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
 if (numero === 0 || numero ===1 ){
  return false;
 }
  for (var i =2; i < numero; i++ ){
    if (numero % i===0){
      return false;}
  }
  {return true;}
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
if (valor === true){
return "Soy verdadero";}else
{return "Soy falso" } 
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  /// array nos arroja la información en una caja donde estaran
  // ubicados por posición do nde estaran enumeradas dsde cero , lo que define que sea array son los corchetes []
  // . push nos sirve para meter ultimo dato en la variable en este caso array
  // i++ nos sirve para que i valla ascendiendo hasta donde queremos que seria 10
  // se hace el return array para que al final nos salga tda la tabla del 6 que pusheamos 
  var array = [];
for(var i = 0; i <=10 ; i++){
var producto = 6 * i ;
array.push (producto);
}
return array;

}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  //se realiza un cambio de digitos a string para poder validar la cantidad de digitos luego usamos la funcion de
  //de calcular la cantidad .
  var string = numero.toString();
  var digitos = string.length;
  if (digitos === 3 ){return true;
  }else{return false;}
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  // se usa esta funcion para que toda la operacion se haga en do mientras en while esta nuestro condicionante
  // se define la variable acumulador  + 5 que es lo que nos pide 
  // y aux que es el numero de veces que se debe repetir se hace desde mas 1 porque el 0 cuenta y nos pide solo 
  // 8 veces, al final nos pide que retornemos el total que en este caso es acumulador. 
  // aux vale 1 porque si no nos contaria 9 veces
  // se le suma uno para que haga todo el recorrido hasta 8  
  var acc = numero 
  var aux = 1
  do{
    acc = acc + 5;
    aux = aux + 1
  }
  while(aux < 9)
return acc;
}
//para pushear a git hub

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
