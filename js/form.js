function capturar() {
  function Persona(nombre, direccion, telefono, numeroident, email) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono
    this.numeroident = numeroident;
    this.email = email;
  }
  let nombreCapturar = document.getElementById("nombre").value;
  let direccionCapturar = document.getElementById("direccion").value;
  let telefonoCapturar = document.getElementById("telefono").value;
  let numeroidentCapturar = document.getElementById("numeroident").value;
  let emailCapturar = document.getElementById("email").value;

  sujetoNuevo = new Persona(
    nombreCapturar,
    direccionCapturar,
    telefonoCapturar,
    numeroidentCapturar,
    emailCapturar
  );//crea el objeto
  //console.log(sujetoNuevo);
  agregar();
}
let baseClientes = [];
function agregar() {
  baseClientes.push(sujetoNuevo);//agrega el objeto al Array
  //console.log(baseClientes);
  document.getElementById("tabla").innerHTML +=
    "<tbody><td>" +
    sujetoNuevo.nombre +
    "</td><td>" +
    sujetoNuevo.direccion +
    "</td><td>" +
    sujetoNuevo.telefono +
    "</td><td>" +
    sujetoNuevo.numeroident +
    "</td><td>" +
    sujetoNuevo.email +
    "</td></tbody>";
};
