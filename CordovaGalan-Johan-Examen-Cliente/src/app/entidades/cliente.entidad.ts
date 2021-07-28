export class Cliente {

    id: number;
    cedula: string;
    nombre: string;
    apellido: string;
    correo: string;
    direccion: string;
    telefono: string;

    constructor() {
        this.id = 0;
        this.cedula = '';
        this.nombre = '';
        this.apellido = '';
        this.correo = '';
        this.direccion = '';
        this.telefono = '';
    }
}