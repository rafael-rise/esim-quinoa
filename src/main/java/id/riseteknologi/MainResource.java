package id.riseteknologi;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

@Path("/api")
public class MainResource {
  @GET
  @Path("/data")
  public Response getData() {
    return Response.status(Response.Status.FOUND).header("location", "/index.html").build();
  }
}
