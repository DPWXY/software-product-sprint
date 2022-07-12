package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

@WebServlet("/information")
public final class InformationServlet extends HttpServlet {
  class MyInformation {
    public String[] messages;
  }
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Convert the server info to JSON
    String[] info = new String[3];
    info[0] = "I enjoy basketball, badmiton, pingpong, and running";
    info[1] = "I will learn tennis and boxing this summer";
    info[2] = "I am learning stakeboarding now";
    MyInformation information = new MyInformation();
    information.messages = info;
    String json = convertToJson(information);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  /**
   * Converts a ServerStats instance into a JSON string using manual String concatentation.
   */
  private String convertToJson(MyInformation info) {
    Gson gson = new Gson();
    String json = gson.toJson(info.messages);
    return json;
  }
}
