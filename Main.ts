import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

const persona1 = new Persona(
  "Juan",
  "García",
  30,
  "12345678A",
  19920101,
  "azul",
  "hombre",
  new Direccion("Calle Mayor", 1, 2, "A", 28001, "Madrid", "Madrid"),
  new Telefono("Móvil", 666555444),
  new Mail("Personal", "juan.garcia@mail.com"),
  "Notas de Juan"
);

const persona2 = new Persona(
  "María",
  "González",
  25,
  "87654321B",
  19961231,
  "rojo",
  "mujer",
  new Direccion("Calle del Sol", 3, 1, "B", 41001, "Sevilla", "Sevilla"),
  new Telefono("Casa", 955123456),
  new Mail("Trabajo", "maria.gonzalez@empresa.com"),
  "Notas de María"
);

const persona3 = new Persona(
  "Pedro",
  "Martínez",
  40,
  "11111111C",
  19820115,
  "verde",
  "hombre",
  new Direccion("Avenida de la Libertad", 15, 4, "C", 50001, "Zaragoza", "Zaragoza"),
  new Telefono("Trabajo", 976654321),
  new Mail("Personal", "pedro.martinez@mail.com"),
  "Notas de Pedro"
);


console.log("Registros originales:");
console.log(persona1.obtenerDatos());
console.log(persona2.obtenerDatos());
console.log(persona3.obtenerDatos());

const nuevaDireccion = new Direccion("Calle Nueva", 10, 2, "D", 50002, "Zaragoza", "Zaragoza");
const nuevoTelefono = new Telefono("Móvil", 666444222);
const nuevoMail = new Mail("Trabajo", "pedro.martinez@empresa.com");

persona3.modificarRegistro(nuevaDireccion, nuevoTelefono, nuevoMail);


console.log("Registros actualizados:");
console.log(persona1.obtenerDatos());
console.log(persona2.obtenerDatos());
console.log(persona3.obtenerDatos());
