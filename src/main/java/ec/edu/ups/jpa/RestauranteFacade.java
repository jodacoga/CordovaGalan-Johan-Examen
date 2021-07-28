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
}
