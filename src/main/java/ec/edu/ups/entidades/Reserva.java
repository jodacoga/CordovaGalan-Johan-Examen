package ec.edu.ups.entidades;

import java.time.LocalDate;

public class Reserva {

	private int id;
	private LocalDate fecha;
	private int hora;
	private Cliente cliente;
	private int cantidadPersonas;
	
	public Reserva() {
	}
	
	public Reserva(int id, LocalDate fecha, int hora, Cliente cliente, int cantidadPersonas) {
		this.id = id;
		this.fecha = fecha;
		this.hora = hora;
		this.cliente = cliente;
		this.cantidadPersonas = cantidadPersonas;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDate getFecha() {
		return fecha;
	}

	public void setFecha(LocalDate fecha) {
		this.fecha = fecha;
	}

	public int getHora() {
		return hora;
	}

	public void setHora(int hora) {
		this.hora = hora;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public int getCantidadPersonas() {
		return cantidadPersonas;
	}

	public void setCantidadPersonas(int cantidadPersonas) {
		this.cantidadPersonas = cantidadPersonas;
	}
}
