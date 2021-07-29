package ec.edu.ups.jpa;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import ec.edu.ups.entidades.Reserva;

@Stateless
public class ReservaFacade extends AbstractFacade<Reserva, Integer> {

	@PersistenceContext(unitName = "CordovaGalan-Johan-Examen")
	private EntityManager em;
	
	public ReservaFacade() {
		super(Reserva.class);
	}
	
	@Override
	public EntityManager getEntityManager() {
		return em;
	}
	
	public void registrar(Reserva entity) throws Exception {
		String jpql = "select e "
				+ "from Reserva e "
				+ "where e.fecha = '" + entity.getFecha().toString() + "' "
				+ "and e.hora = " + entity.getHora();
		List<Reserva> lista = em.createQuery(jpql, Reserva.class).getResultList();
		int aforoOcupado = 0;
		for (Reserva reservaAux: lista) {
			aforoOcupado += reservaAux.getCantidadPersonas();
		}
		if ((aforoOcupado + entity.getCantidadPersonas()) > entity.getRestaurante().getAforo()) {
			throw new Exception("Aforo completo. Reserva no disponible en la fecha" + entity.getFecha().toString());
		} else {
			super.create(entity);
		}
	}
}
