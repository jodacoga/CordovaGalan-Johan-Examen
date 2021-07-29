import { Cliente } from "./cliente.entidad";
import { Restaurante } from "./restaurante.entidad";

export class Reserva {

    id: number;
    cliente: Cliente;
    restaurante: Restaurante;
    fecha: string;
    hora: number;
    cantidadPersonas: number;

    constructor() {
        this.id = 0;
        this.cliente = new Cliente();
        this.restaurante = new Restaurante();
        this.fecha = '';
        this.hora = 0;
        this.cantidadPersonas = 0;
    }
}