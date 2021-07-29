package ec.edu.ups.entidades;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Reserva implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	@JoinColumn(name = "CLIENTE_ID")
	private Cliente cliente;
	@ManyToOne
	@JoinColumn(name = "RESTAURANTE_ID")
	private Restaurante restaurante;
	private LocalDate fecha;
	private int hora;
	private int cantidadPersonas;
	
	public Reserva() {
	}
	
	public Reserva(LocalDate fecha, int hora, int cantidadPersonas) {
		this.fecha = fecha;
		this.hora = hora;
		this.cantidadPersonas = cantidadPersonas;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Cliente getCliente() {
		return cliente;
	}
	
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	
	public Restaurante getRestaurante() {
		return restaurante;
	}
	
	public void setRestaurante(Restaurante restaurante) {
		this.restaurante = restaurante;
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

	public int getCantidadPersonas() {
		return cantidadPersonas;
	}

	public void setCantidadPersonas(int cantidadPersonas) {
		this.cantidadPersonas = cantidadPersonas;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + cantidadPersonas;
		result = prime * result + ((fecha == null) ? 0 : fecha.hashCode());
		result = prime * result + hora;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Reserva other = (Reserva) obj;
		if (cantidadPersonas != other.cantidadPersonas)
			return false;
		if (fecha == null) {
			if (other.fecha != null)
				return false;
		} else if (!fecha.equals(other.fecha))
			return false;
		if (hora != other.hora)
			return false;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Reserva [id=" + id + ", fecha=" + fecha + ", hora=" + hora
				+ ", cantidadPersonas=" + cantidadPersonas + "]";
	}
}
