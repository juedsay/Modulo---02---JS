/*Escribe un programa que solicite al usuario ingresar una contraseña y verifique si cumple con los siguientes requisitos: 
 La contraseña debe tener al menos 8 caracteres de longitud.
 La contraseña debe contener al menos una letra minúscula y una letra mayúscula.
 La contraseña debe contener al menos un número.Si la contraseña cumple con todos los requisitos, el programa debe mostrar un mensaje indicando que la contraseña es válida. 
Si la contraseña no cumple con alguno de los requisitos, el programa debe mostrar un mensaje indicando
que la contraseña es inválida y especificando cuál de los requisitos no se cumple.*/

/*Solicito al usuario que ingrese una contraseña, aclarándole los requisitos correspondientes para que sea válida,
para tratar de reducir los errores de funcionalidad en el software: */

let contraseñaIngresada = prompt(
  "Ingrese una contraseña válida: " +
    "\n" +
    "(Debe contener al menos 8 caracteres," +
    "\n" +
    "al menos 1 letra minúscula y 1 en mayúscula," +
    "\n" +
    " y debe contener 1 número)."
);

//Ahora procedo a verificar si la contraseña que el usuario ingresó cumple con los requisitos correspondientes para que sea una contraseña válida:
if (contraseñaIngresada.length < 8 || contraseñaIngresada !=/a-z/g || contraseñaIngresada !=/A-Z/g || contraseñaIngresada != /0-9/g) {
  let inputPass = contraseñaIngresada;
  while (inputPass.length < 8) {    
    alert("La contraseña ingresa es muy corta!");
    inputPass = prompt(
      " Vuelva a ingresar una contraseña que sea válida: " +
        "\n" +
        "(Debe contener al menos 8 caracteres," +
        "\n" +
        "al menos 1 letra minúscula y 1 en mayúscula," +
        "\n" +
        " y debe contener 1 número)."
    );
  }
  while (inputPass ==/a-z/g) {    
    alert("La contraseña ingresa debe contener al menos 1 letra en minúscula");
    inputPass = prompt(
      " Vuelva a ingresar una contraseña que sea válida: " +
        "\n" +
        "(Debe contener al menos 8 caracteres," +
        "\n" +
        "al menos 1 letra minúscula y 1 en mayúscula," +
        "\n" +
        " y debe contener 1 número)."
    );
  }
  while (inputPass !=/A-Z/g) {    
    alert("La contraseña ingresa al menos 1 letra en mayúscula!");
    inputPass = prompt(
      " Vuelva a ingresar una contraseña que sea válida: " +
        "\n" +
        "(Debe contener al menos 8 caracteres," +
        "\n" +
        "al menos 1 letra minúscula y 1 en mayúscula," +
        "\n" +
        " y debe contener 1 número)."
    );
  }
  while (inputPass != /0-9/g) {    
    alert("La contraseña de contener al menos 1 número!");
    inputPass = prompt(
      " Vuelva a ingresar una contraseña que sea válida: " +
        "\n" +
        "(Debe contener al menos 8 caracteres," +
        "\n" +
        "al menos 1 letra minúscula y 1 en mayúscula," +
        "\n" +
        " y debe contener 1 número)."
    );
  }
}else {
  alert(
    "La contraseña fue ingresada con éxito," +
      "\n" +
      "y pasó todos los requeritos de seguridad mínimos")
    }
 
// if (contraseñaIngresada >= a && contraseñaIngresada <= z);{
//   while (contraseñaIngresada >= a && contraseñaIngresada <= z) {
//     alert("Debe contener al menos 1 letra en minúscula!");
//     contraseñaIngresada = prompt(
//       " Vuelva a ingresar una contraseña que sea válida: " +
//         "\n" +
//         "(Debe contener al menos 8 caracteres," +
//         "\n" +
//         "al menos 1 letra minúscula y 1 en mayúscula," +
//         "\n" +
//         " y debe contener 1 número)."
//     );
//   }
// }
// }elseif (contraseñaIngresada >= A && contraseñaIngresada <= Z);{
//   while (contraseñaIngresada >= a && contraseñaIngresada <= z) {
//     alert("Debe contener al menos 1 letra en Mayúscula!");
//     contraseñaIngresada = prompt(
//       " Vuelva a ingresar una contraseña que sea válida: " +
//         "\n" +
//         "(Debe contener al menos 8 caracteres," +
//         "\n" +
//         "al menos 1 letra minúscula y 1 en mayúscula," +
//         "\n" +
//         " y debe contener 1 número)."
//     );
//   }

//