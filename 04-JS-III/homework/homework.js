// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  // shift elimina y retorna nuestro primer elemento 
  var shift = array.shift()
  return shift;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
//usamos el pop ya que nos borra el ultimo elemento y lo usamos para que no lo retorne y cuimpla 
var numero = array.pop ()
return numero ;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  // se usa length que nos mide el largo de la variable 
// pero primero definimos la variable y dentro la funcion  
var largo = array.length;
return largo;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // el for lo usamos para recorrer una array por eso lo usamos
  // se define i como cero porque nuestro ciclo arranca desde cero 
  // termina cuando i sea menos a la cantidad de digitos dentro de array
  // para que trabaje en secuencia i++
  // definimos suma donde array i  son los digitos sumados en 1 
  // que es lo que nos pide la función
  // al final pusheamos en nvo array la funcion suma para que quede guardado
  //Tu código:
var nvoArray = [];
for (var i = 0 ; i < array.length ; i ++){
  var suma = array[i] + 1 ;
nvoArray.push (suma);
}
return nvoArray ;

}



function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  // pushep elemento en array para que me quede registrado 
  // luego lo retorno como array y elemento ya debe estar dentro 

  array.push (elemento)
  {return array ;}
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  // unshift  sirve para agregar  un elemento al array al inicio
  // luego lo retorno 
  array.unshift (elemento) 
  return array ;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // usamos join para unir o separa algo entre arreglos osea entre frases
  // entre parentesis va espacio porque nos pide que sea separado
  // por espacios luego retornamos la string 

  //
var string = palabras.join (" ")
return string;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  // hacemos un bucle con for para que nos haga el recorrido
  // y nos revise si elemnto esta dentro de array
  //se detiene cuando termine de revisar todo el arreglo
  // metemos un if para que nos de una respuesta booleana 
  // que es lo que nos pide
for(var i=0 ; i < array.length; i++)
 {if(array[i]=== elemento)
  // array [i] para valdiar la posicion en la que inicia que en el for es 0

  return true;}
  return false;
}
//7 revisar por que pone el i despues de array lo pone porque es de donde debe arrancar



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // definimos total como variable puede ser valor ,como cero porque inicia en posicion cero 
  //añadimos el bucle que nos haga el reccorido por todo el arreglo 
  /// luego definimos total mas el numero en la posicion que va 
  // al finalizar el recorrido return total para que nos muestre todo lo sumado  
  var total = 0; 
  for(var i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  // defino promedio con posicion 0 para que me arranque el recorrido desde ahi
  // debo saber que el promedio de algo es la suma de algo mas la division de la cantidad de elementos 
  // realizo el bucle y al final el total de todo lo divido por la cantidad de elementos por rso uso length
  // length es la cantidad de elementos 

  var promedio = 0; 
for(var i = 0; i < resultadosTest.length; i++) {
  promedio = promedio + resultadosTest[i];
}
return promedio / resultadosTest.length;
}



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // en el bucle arranco desde la posicion 1 porque es una comparacion y no habria caso compararlo
   // en el if comparamos la posicion de numero con maximo , si se cumple maximo pasara a ser ese valor osea 
   //el numero mayor cuando se acabe nuestro bucle (ciclo) retornamos el valor de maximo
   //
  var Nummaximo = 0; 
for(var i = 1; i < numeros.length; i++)
if(numeros[i] > Nummaximo) { 
  Nummaximo = numeros[i];
}
return Nummaximo;
}



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
if(arguments.length === 0) {return 0;} /// sentencia por si es igual a cero o menor me deveulve 0
if(arguments.length === 1) {return arguments[0];}// si es igual a 1 argumento me lo devuelve en la posicion 
  var producto = arguments[0]; // definimos arguments en posicion cero que es donde arranca 
for(var i= 1; i < arguments.length; i++)// realizamos el bucle var i empieza valiendo 1 para que empiece a multiplicar
var producto = producto * arguments[i];// definimos esta funcion para que se realice la multiplicación
{return producto;}// retornamos el total de la multiplicación
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne {la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var acumulador = 0 ; // definimos acumulador como 0 para que empiece a acumular las variables mayores a 18
for(var i= 0; i < arreglo.length; i++)// reaLIZAMOS EL BUCLE 
if (arreglo[i]> 18){ /// DEFINIMOS EL CONDICIONANTE ARREGLO EN LA POSICION QUE ESTE ES MAYOR A 18 
  acumulador = acumulador + 1;/// SI PASA LO ANTERIOR ENTONCES ACUMULADOR SE SUMAARA UNO ME IRA ACUMULANDO 1
}
return acumulador; // AL FINAL RETORNAMOS ACUMULADOR 

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 7 || numeroDeDia === 1 ){/// definimos el condicionante con la funCioN O 
   return "Es fin de semana";// SI SE CUMPLE RETORNA 
  }else {return "Es dia Laboral"; }// SINO SE CUMPLE NO SE RETORNA 

  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
var numero = n.toString()// defino la variable con var o puedo usar let la paso a string 
if (numero[0]=== "9"){return true}//y pregunto si en la primera posicuon es igual a 0 que e retonre true 
else
{return false}
///se convierte en string para poder acceder a la poscion
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  for(var i= 0; i < arreglo.length; i++)// hacmeos un bucle
  {if (arreglo[i]===arreglo[i+1])// lo colocamos en +  1 porque queremos compararlo con la siguiente posicion
  {return true}}
   {return false} 
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = []/// defino la nueva variable para guardar los daros 
  for(var i= 0; i < array.length; i++)/// hago un bucle
  {if (array[i]==="Enero"||array[i]==="Marzo"||array[i]==="Noviembre" )/// defino el conficionantee
{nuevoArray.push(array[i])}/// ahi me va pusheando los valores en el nuevo array
} 
if(nuevoArray.length < 3)/// menor a 3 porqueson los tres meses
{return"No se encontraron los meses pedidos";}
return nuevoArray;

}



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
var nuevoArray = []/// defino el nuevo array
for(var i= 0; i < array.length; i++){/// realizo el bucle 
  if(array[i]> 100){/// defino el condicionante si array en la posicion de i es mayor a 100
    nuevoArray.push(array[i])///entonces guardame en el nuevo array lo que este en la posicion de array 
  } 
}
return nuevoArray;/// retorname el nuevo array 

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var nuevoArray = []/// defino nuevo array vacio que me guarde la info
var suma = numero/// defino a suma como el numero como mi arreglo
for(var i= 0; i < 10 ; i++){/// realizo el bucle no con lecght porque me pide 10 interacciones por eso el 10
  suma = suma + 2/// a mi variable numero le sumare 2
  if (suma === i)break/// break solo nos corta la ejecucion y no permite que se siga ejecutando
  else{//// cuando la suma y la cantidad de interacciones coincidan se corta 
    nuevoArray.push(suma)/// me guarda lo que quedo en suma en el nuevo array
  }
}
if (i< 10){return"Se interrumpió la ejecución";}/// escribo si fue menor a 10 interacciones fue que hubo break se interrumpip
else{
  return nuevoArray;/// si todo funciono ok me retorna el nuevo array
}
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArray = []/// defino el muevo array
  var suma = numero/// defino suma como numero
  for(var i= 0; i < 10 ; i++){/// realizo el bcle con 10 interacciones
    if (i=== 5)continue/// en este caso cuando la posicion este en 5 no sumara continuara
    else {/// con el continue no se nos corta la funcion sigue pero no se tiene en cuenta 
      suma = suma + 2 /// sigue sumando + 2 
      nuevoArray.push(suma)///me guarda toda la informacion
    }
}{return nuevoArray;}/// me retorna el nuevo array
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
