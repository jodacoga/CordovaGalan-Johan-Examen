package ec.edu.ups.rest;

import javax.ejb.EJB;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import ec.edu.ups.entidades.Restaurante;
import ec.edu.ups.jpa.RestauranteFacade;

@Path("/restaurante")
public class RestaurateREST {

	@EJB
	private RestauranteFacade facade;
	
	@POST
	@Path("/crear")
	@Produces(MediaType.TEXT_PLAIN)
	public Response crear(
			@FormParam("nombre") String nombre,
			@FormParam("direccion") String direccion,
			@FormParam("telefono") String telefono, 
			@FormParam("aforo") int aforo) {
		Restaurante r = new Restaurante(nombre, direccion, telefono, aforo);
		facade.create(r);
		return Response.status(200).build();
	}
}
