package com.google.sps.servlets.data;

public class Contact {
  private final String info;
  private final long timestamp;

  public Contact(String info, long timestamp) {
    this.info = info;
    this.timestamp = timestamp;
  }
}