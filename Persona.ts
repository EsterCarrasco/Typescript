export class Persona {
  protected _nombre: string;
  protected _apellido: string;
  private _edad: number;
  protected _dni: number|string;
  private _cumpleaños: number;
  private _color: string;
  private _sexo: string;
  public _direccion: string|number;
  protected _telefono: number;
  protected _mail: string|number;
  private _notas: string|number;


  constructor(nombre: string, apellido: string, edad: number, dni: number|string, cumpleaños: number, color: string, sexo: string, direccion: string|number, telefono: number, mail: string|number, notas: string|number, ) 
    
    {

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
}


  
  
