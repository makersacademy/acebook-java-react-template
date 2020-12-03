package com.makersacademy.acebook.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.Map;

@RestController
public class FriendsController {
  @PersistenceContext
  EntityManager entityManager;

  @Transactional
  @PostMapping("/friends")
  public void newFriendship(@RequestBody Map<String, Long> body) {
    entityManager.createNativeQuery(
            "INSERT INTO friends (person_id, friend_id, accepted) VALUES(?, ?, TRUE)")
            .setParameter(1, body.get("person_id"))
            .setParameter(2, body.get("friend_id"))
            .executeUpdate();
  }
}
