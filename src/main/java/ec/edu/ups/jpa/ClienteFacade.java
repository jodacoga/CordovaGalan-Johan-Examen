package ec.edu.ups.jpa;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import ec.edu.ups.entidades.Cliente;

@Stateless
public class ClienteFacade extends AbstractFacade<Cliente, Integer> {

	@PersistenceContext(unitName = "CordovaGalan-Johan-Examen")
	private EntityManager em;
	
	public ClienteFacade() {
		super(Cliente.class);
	}
	
	@Override
	public EntityManager getEntityManager() {
		return em;
	}
}