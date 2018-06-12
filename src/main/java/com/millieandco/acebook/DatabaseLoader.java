package com.millieandco.acebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.stereotype.Component;

@Component
public class  DatabaseLoader implements CommandLineRunner {
  private final PostRepository repository;
  private final UserRepository userrepository;

  @Autowired
  public DatabaseLoader(PostRepository repository, UserRepository userrepository) {
    this.repository = repository;
    this.userrepository = userrepository;
  }

  @Override
  public void run(String... strings) throws Exception {
    this.repository.save(new Post("Hey, folks! Welcome to Acebook!"));

  }
}
