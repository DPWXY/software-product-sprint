package com.google.sps.servlets;

// import com.google.gson.Gson;
import java.io.IOException;
import java.util.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/information")
public final class MyServlet extends HttpServlet {

  String[] info = {"Hi", "This is about", "My information"};

  String[] list;

  public MyServlet(String[] list){
      this.list = list;
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Convert the server info to JSON
    MyServlet myservlet = new MyServlet(info);
    String json = convertToJson(myservlet);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  /**
   * Converts a ServerStats instance into a JSON string using manual String concatentation.
   */
  private String convertToJson(MyServlet myservlet) {
    String json = "{";
    json += "\"first\": ";
    json += "\"" + myservlet.list[0] + "\"";
    json += ", ";
    json += "\"second\": ";
    json += "\"" + myservlet.list[1] + "\"";
    json += ", ";
    json += "\"third\": ";
    json += "\"" + myservlet.list[2] + "\"";
    json += "}";
    return json;
  }
}
