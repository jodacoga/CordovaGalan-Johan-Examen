export class Restaurante {

    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
    aforo: number;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.direccion = '';
        this.telefono = '';
        this.aforo = 0;
    }
}