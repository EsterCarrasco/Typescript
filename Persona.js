"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad, dni, cumpleaños, color, sexo, direccion, telefono, mail, notas) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._color = color;
        this._sexo = sexo;
        this._direccion = direccion;
        this._telefono = telefono;
        this._mail = mail;
        this._notas = notas;
    }
    return Persona;
}());
exports.Persona = Persona;
