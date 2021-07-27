package ed.edu.ups.rest;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import ec.edu.ups.entidades.Cliente;
import ec.edu.ups.jpa.ClienteFacade;

@Path("cliente")
public class ClienteREST {

	@EJB
	private ClienteFacade facade;
	
	@POST
	@Path("crear")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public Response crear(
			@FormParam("cedula") String cedula,
			@FormParam("nombre") String nombre,
			@FormParam("apellido") String apellido,
			@FormParam("correo") String correo,
			@FormParam("direccion") String direccion,
			@FormParam("telefono") String telefono) {
		Cliente c = new Cliente(cedula, nombre, apellido, correo, direccion, telefono);
		facade.create(c);
		return Response.status(200)
					   .header("Access-Control-Allow-Origin", "*")
					   .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
					   .header("Access-Control-Allow-Credentials", "true")
					   .header("Access-Control-Allow-Methods", "POST, OPTIONS, HEAD")
					   .header("Cache-Control", "no-cache, no-store")
					   .build();
	}
}
