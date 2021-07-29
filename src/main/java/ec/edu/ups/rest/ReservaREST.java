package ec.edu.ups.rest;

import javax.ejb.EJB;
import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import ec.edu.ups.entidades.Cliente;
import ec.edu.ups.entidades.Reserva;
import ec.edu.ups.entidades.Restaurante;
import ec.edu.ups.jpa.ClienteFacade;
import ec.edu.ups.jpa.ReservaFacade;
import ec.edu.ups.jpa.RestauranteFacade;

@Path("/reserva")
public class ReservaREST {

	@EJB
	private ReservaFacade facade;
	@EJB
	private ClienteFacade facadeCliente;
	@EJB
	private RestauranteFacade facadeRestaurante;
	
	@POST
	@Path("/crear")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public Response crear(String json) {
		Jsonb jsonb = JsonbBuilder.create();
		Reserva r = jsonb.fromJson(json, Reserva.class);
		try {
			facade.registrar(r);
			return Response.status(200).build();
		} catch (Exception e) {
			return Response.status(404).build();
		}
	}
	
	@GET
	@Path("/buscar-cliente/{cedula}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarCliente(@PathParam("cedula") String cedula) {
		try {
			Cliente c = facadeCliente.findByCedula(cedula);
			Jsonb json = JsonbBuilder.create();
			return Response.status(200).entity(json.toJson(c)).build();
		} catch(Exception e) {
			return Response.status(404).build();
		}
	}
	
	@GET
	@Path("/buscar-restaurante/{nombre}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarRestaurante(@PathParam("nombre") String nombre) {
		try {
			Restaurante r = facadeRestaurante.findByNombre(nombre);
			Jsonb json = JsonbBuilder.create();
			return Response.status(200).entity(json.toJson(r)).build();
		} catch(Exception e) {
			return Response.status(404).build();
		}
	}
}
