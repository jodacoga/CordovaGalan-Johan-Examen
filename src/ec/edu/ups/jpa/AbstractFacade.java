package ec.edu.ups.jpa;

import java.util.List;

import javax.persistence.EntityManager;

public abstract class AbstractFacade<T, K> {

	private Class<T> clase;
	
	public AbstractFacade(Class<T> clase) {
		this.clase = clase;
	}
	
	public abstract EntityManager getEntityManager();
	
	public void create(T entity) {
		getEntityManager().persist(entity);
	}
	
	public void edit(T entity) {
		getEntityManager().merge(entity);
	}
	
	public void delete(T entity) {
		getEntityManager().remove(entity);
	}
	
	public T findByID(K id) {
		return getEntityManager().find(clase, id);
	}
	
	public List<T> findAll() {
		return getEntityManager()
				.createQuery("select entity from " + clase.getName() + " entity", clase)
				.getResultList();
	}	
}
