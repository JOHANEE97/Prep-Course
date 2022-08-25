// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var nuevoObjeto = {/// defino mi nuevo objeto
    nombre : nombre,//le agrego el nombre 
    edad: edad,/// le agrego la edad 
    meow : function(){/// defino la funcion meow 
      return "Meow!";/// que si se activa me retorna meow 
    }  
  }
  return nuevoObjeto;//// retorno el nuevo objeto
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto [property] = null;/// objeto le defino la propiedad property en brakets porque no se exactamente que es 
  return objeto//// con valor nulll como lo pide el ejercicio y luego retorno objeto
  ///
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto [metodo]();/// defono objeto y metodo lo fefino como una funcion 
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
var resultado = objetoMisterioso.numeroMisterioso * 5 ;/// uso dot notation porque se con exactitud cual es la propiedad y la multiplico por 5
return resultado ; //// objeto tiene una propiedad y esta la multipico por 5 luego retorno el resultado 
/// tambien podria llamarla o hacerla asi var resultado = objetomisterioso [numero misterioso]*5;
}


function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
delete objeto [unaPropiedad];/// usamos delete para eliminar algo luego lo mencionamos en los brackets lo que queremos eliminar 
return objeto;
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
var  objeto = { /// defino mi objeto 
  nombre: nombre,/// a nombre lo defino con nombre no en comillas porque no lo se 
  email: email,/// email lo defino 
  password: password, //// defino paswwor 
}
return objeto;/// retorno objeto 

}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
if (usuario["email"]){/// genero la sentencia se le ponen comillas  porque es una propiedad del usuario 
  return true;
}else {
  return false;
}
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
if (objeto[propiedad]){//// si en objeto esta propiedad pero como una cualidad no como si fuera el nombre propiedad retono true 
  return true ; 
}else {
  return false;
}
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
if (usuario.password===password){return true;
}else{
  return false ;
}
}
function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;/// uso el dot porque se con exactitud que es lo que quiero cambiar 
 return usuario; 

}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
usuario.amigos.push (nuevoAmigo);/// como es un arreglo le agrego el .push para agregar el nuevo amigo 
return usuario ;
}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (var i = 0 ; i < usuarios.length; i++){/// trabajo con bucle porque debo pasar por cada usuario 
    usuarios[i].esPremium = true;//// cada usuario que sea es premium sera igual ahora por true 
  }
  return usuarios;
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var suma = 0  
  for ( var i = 0; i < usuario.posts.length; i++)
  {suma = suma + usuario.posts[i].likes/// se deja likes despues de i para saber que se quiere revisar con claridad 
}
return suma ;

}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]")
  // y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  producto.calcularPrecioDescuento = function (){
  var descuento = this.precio * this.porcentajeDeDescuento ;/// podria remplazar el producto por this
  var nuevoPrecio = this.precio - descuento ;
 return nuevoPrecio;/// se hace paso a paso lo que pide la consgina 
}
return  producto;///  producto.calcularPrecioDescuento = function() {
    ///return this.precio - ( this.precio * this.porcentajeDeDescuento );
  ///};
  ////return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
