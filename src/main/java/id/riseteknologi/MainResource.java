package id.riseteknologi;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;

@Path("")
public class MainResource {
  @GET
  @Path("/data")
  public Response getData(@QueryParam("secretKey") String secretKey) {
    if (secretKey.equalsIgnoreCase("rahasia")) {
      return Response.status(Response.Status.FOUND).header("location", "/app/numberList").build();
    } else {
      return Response.status(Response.Status.FOUND).header("location", "/index.html").build();
    }
  }
  @GET
  @Path("/test")
  public Response testApi(@QueryParam("token") String token) {
    if (token == null || token == "") {
      return Response.status(Response.Status.FOUND).header("location", "/index.html").build();
    } else {
      return Response.ok().entity("Cakep").build();
    }
  }
}