let userName = "";
let age = "";
let address = "";
let civilStatus = "";
let iD = "";
let phone = "";
let email = "";
let Salary = "";

function registerData() {
  userName = prompt("ingresa tu nombre");
  age = prompt("ingresa tu edad");
  address = prompt("ingresa tu direccion");
  civilStatus = prompt("ingresa tu estado civil");
  iD = prompt("ingresa tu cedula");
  phone = prompt("ingresa tu celular");
  email = prompt("ingresa tu correo");
  Salary = prompt("ingresa tu salario");
}

function showData() {
  alert(
    "Tu nombre es: " +
      userName +
      ", tu edad es: " +
      age +
      ", tu direccion es: " +
      address +
      ", tu estado civil es: " +
      iD +
      ", tu Celular  es: " +
      phone +
      ", tu correo es: " +
      email +
      ", tu salario es: " +
      Salary +
      "."
  );
}
