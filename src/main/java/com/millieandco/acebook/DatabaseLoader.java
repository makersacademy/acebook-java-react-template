package com.millieandco.acebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.stereotype.Component;

@Component
public class  DatabaseLoader implements CommandLineRunner {
  private final PostRepository postRepository;
  private final UserRepository userRepository;

  @Autowired
  public DatabaseLoader(PostRepository postRepository, UserRepository userRepository) {
    this.postRepository = postRepository;
    this.userRepository = userRepository;
  }

  @Override
  public void run(String... strings) throws Exception {
    this.postRepository.save(new Post("I love rings"));
    this.userRepository.save(new User("Bilbo", "Baggins", "BigBill@theshire.com", "myprecious"));
  }
}
