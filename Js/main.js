let nombre = "juan"
let apellido = "allievi"
let nombreApellido = nombre + " " + apellido;

nombre = "juan";

let nombreUsuario = prompt("Identificacion")
console.log(nombreUsuario);

alert("Hola " + nombreUsuario + "!")

let edad = prompt("Ingrese su edad" + " " + nombreUsuario);

//condicional 
if (edad >= 18) {
    alert("Sos mayor de edad, Bienvenido")
} else {
    alert("Los menores de edad, no pueden acceder, lo sentimos!")
}

//while 
let x = 0;
while (x < 11) {
    alert("La pagina se maniene en desarrollo, abrira pronto!");
    console.log("Ciclo númerico" + x);
    x = x + 1;
}