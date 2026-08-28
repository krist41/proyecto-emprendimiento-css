function validateForm() {
  var nombre = document.forms["myForm"]["nombre"].value;
  if (nombre == "") {
    alert("Nombre debe estar relleno");
    return false;
  } 
  var correo = document.forms["myForm"]["correo"].value;
  if (correo == "") {
    alert("Correo debe estar relleno");
    return false;
  } 
  var mensaje = document.forms["myForm"]["mensaje"].value;
  if (mensaje == "") {
    alert("Mensaje debe estar relleno");
    return false;
  } 

  
} 
function validateEmail(correo) {

 const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (correo != regex) {
    alert("El correo no es valido");
    return false;
  } 

}
function validateNombre(nombre) {

 const rege = /^[a-zA-Z]$/;
if (nombre != rege) {
    alert("El nombre no es valido");
    return false;
  } 

}


