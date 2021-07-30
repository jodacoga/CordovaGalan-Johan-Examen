package ec.edu.ups.jpa;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import ec.edu.ups.entidades.Restaurante;

@Stateless
public class RestauranteFacade extends AbstractFacade<Restaurante, Integer> {

	@PersistenceContext(unitName = "CordovaGalan-Johan-Examen")
	private EntityManager em;
	
	public RestauranteFacade() {
		super(Restaurante.class);
	}
	
	@Override
	public EntityManager getEntityManager() {
		return em;
	}
	
	public Restaurante findByNombre(String nombre) {
		String jpql = "select r from Restaurante r where r.nombre = '" + nombre + "'";
		Restaurante r = em.createQuery(jpql, Restaurante.class).getSingleResult();
		return r;
	}
}
