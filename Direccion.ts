export class Direccion {
  protected _calle: string;
  protected _numero: number;
  protected _piso: number;
  protected _letra: string;
  protected _cp: number;
  protected _poblacion: string;
  protected _provincia: string;

  constructor(calle: string, numero: number, piso: number, letra: string, cp: number, poblacion: string, provincia: string,) {

    this._calle = calle;
    this._numero = numero;
    this._piso = piso;
    this._letra = letra;
    this._cp = cp;
    this._poblacion = poblacion;
    this._provincia = provincia;
  }
 
  }

 
  

