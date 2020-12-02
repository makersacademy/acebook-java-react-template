package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.dao.PostDAO;
import com.makersacademy.acebook.dao.UserDAO;
import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class PostController {

  private final PostDAO postDAO;
  private final UserDAO userDAO;

  public PostController(PostDAO postDAO, UserDAO userDAO) {
    this.postDAO = postDAO;
    this.userDAO = userDAO;
  }

  //get all posts
  @GetMapping("/posts")
  Iterable<Post> all() {
    return postDAO.findAll();
  }

  //creates new post with user_id column populated
  @PostMapping("/posts")
  Post newPost(@RequestBody Map<String,Object> body) {
    Post newPost = new Post();
    //add content to new post
    newPost.setContent(body.get("content").toString());
    //convert user_id from int to string then to long, and use long to find the correct user
    Optional<User> author = userDAO.findById(Long.parseLong(body.get("user_id").toString()));
    //set that user as the user_id of the post, then save it to the database
    newPost.setUser(author.get());
    return postDAO.save(newPost);
  }
}
