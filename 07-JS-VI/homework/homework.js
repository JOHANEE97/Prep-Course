// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var nuevonombre = nombre[0].toUpperCase() + nombre.substring(1)///pasar a mayuscula nombre en poscion 0 la funcion 
return nuevonombre ;///touper me cambia a mayuscula en la poscion que se encuentre , substrin me trae esa string desde cierta poscion en este caso posicion 1
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
cb(); /// esta la funcion call back 
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
cb(n1 + n2);/// me dice que haga una operacion con una funcion de call
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
var total = 0 ;// defino mi variable donde se guardaran los datos 
for (var i = 0; i < numeros.length ; i++){/// realizo mi bucle de recorrido a lo largo de numeros con lenght
  total = total + numeros[i];/// realizo la funcion suma  donde total sera igual  a la posicion de numeros mas lo almacenado en total 
}
cb (total);/// pasamos total a una funcion llamada cb CALL BACK
}
//// TAMBIEN PUEDO USAR REDUCE SERIA ASI
///var total = numeros.reduce(function(a,b){return (a+b)},0):///// usamos reduce para no usar for en la funcion a y b cumplen el papel de posicion 1 y 0 en el array luego retorno la suma de a y b , el cero es la posicion en la que arranca 
///cb (total);

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
///matriz es lo mismo que u arreglo
array.forEach(function(a){/// nos pide una matriz que es un array , usando la funcion for each que traduce por cada elemento
  cb(a)//// la variable (a) es la posciion de cada elemento del array y  luego denominamos nuestro call en la posicion de a que la vaya almacenando
})/// a ira tomando el valor de cada posicion de nuestro array 
}


function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
var nvoArrary = array.map(function(i){///defino una variable donde guardare todo , uso la funcion map coon la variable array 
  return cb(i)///donde en cada poscion [i] de array se me va ir almacenando en cb que es mi call back  , l
})
return nvoArrary;/// luego retorno la nueva matriz(array) con toda la info guardada
}/// en map si debemos usar el return o si no no almacena información

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
var nvoarray = array.filter(function(i){ ///defino nuevo varible ,con la funcion filter donde pasara por cada posicion de array con i
  return i[0] === "a";///luego me retorna i en cada posicion  si es igual a "a" en la poscion 0 porque es el comienzo y me los almacena
})
return nvoarray ;/// luego me los almacena en esta nueva variable
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
