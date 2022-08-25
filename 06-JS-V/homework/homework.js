// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

function  Usuario (opciones){ /// denomino una funcion llamada usuario que es la clase en este caso  que debe tener dentro algo llamado opciones 
this.usuario = opciones.usuario;/// a opciones la voy a ir llenando de estas variables con la opcion this debe ser igual a opciones que es donde s
this.nombre = opciones.nombre;/// donde quedara guardado 
this.email = opciones.email;
this.password = opciones.password; 
}
Usuario.prototype.saludar = function(){/// esta la funcion prototipo lo hacemos asi para meter nuevas opciones en nuestra clase osea usuario 
  return "Hola, mi nombre es " + this.nombre
};
return Usuario;



}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
Constructor.prototype.saludar = function (){return "Hello World!"  };
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function(){/// usamos el prototipe para agragar la opcion de reverse en string 
  var cadena = ""; /// definimos una variable llamada cadena que es donde se almacena la info
  for (var i = this.length - 1; i >= 0; i-- ){ // usamos un bucle for para que nos haga el recorridopor la string 
  /// le hacemos length para que comience desde el total de carcateres -1 porque comiemza a contar desde 0 
 ///cuadno la i llege a cero se detiene 
 cadena = cadena + this[i];/// cadena almacenara la informacion de this en la posicion de i y no lo retornara alreves  
}
return cadena; /// retornamos la variable cadena con toda la info ya guardada al reves 
}
}
// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona{ 
    constructor(nombre, apellido, edad, domicilio,/*Escribir los argumentos que recibe el constructor*/) {
      // Crea el constructor:
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio ;
    }
   detalle () { //// agragamos una funcion detalle donde agragamos ciertos valores y los agrega en valores de persona 
    return {
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.edad,
      Domicilio: this.domicilio,
   }
    }
  
  }

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
return new Persona(nombre, apellido, edad, dir);///creamos un nueva persona con NEW Y LE DAMOS RETURN PARA QUE NO LA DEVUELVA CON SUS VALORES 
}/// el new lo uso para crear un objeto nuevo 
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
Persona.prototype.datos = function (){///uso prototype porque necesito crear una funcion de un objeto al cual no tengo acceso 
 return this.nombre + ", " + this.edad + " años"; // retornamos esto porque es lo que nos muestar el ejemplo y fue como lo declaramos en variable
}
}  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
