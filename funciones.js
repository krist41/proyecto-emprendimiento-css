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