package com.makersacademy.acebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

  private final PostRepository repository;

  @Autowired
  public DatabaseLoader(PostRepository repository) {
  	this.repository = repository;
  }

  @Override
  public void run(String... strings) throws Exception {
  	this.repository.save(new Post("Hey, folks! Welcome to Acebook!"));
  }
}
