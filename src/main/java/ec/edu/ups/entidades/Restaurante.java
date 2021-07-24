package ec.edu.ups.entidades;

import java.util.List;

public class Restaurante {

	private int id;
	private String nombre;
	private int aforo;
	private List<Reserva> reserva;
	
	public Restaurante() {
	}
	
	public Restaurante(int id, String nombre, int aforo) {
		this.id = id;
		this.nombre = nombre;
		this.aforo = aforo;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getNombre() {
		return nombre;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public int getAforo() {
		return aforo;
	}
	
	public void setAforo(int aforo) {
		this.aforo = aforo;
	}
	
	public List<Reserva> getReserva() {
		return reserva;
	}
	
	public void setReserva(List<Reserva> reserva) {
		this.reserva = reserva;
	}
}