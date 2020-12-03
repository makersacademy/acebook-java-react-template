package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.dao.LikeDAO;
import com.makersacademy.acebook.dao.PostDAO;
import com.makersacademy.acebook.dao.UserDAO;
import com.makersacademy.acebook.model.Like;
import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
public class LikeController {

  private final PostDAO postDAO;
  private final UserDAO userDAO;
  private final LikeDAO likeDAO;

  public LikeController(PostDAO postDAO, UserDAO userDAO, LikeDAO likeDAO) {
    this.postDAO = postDAO;
    this.userDAO = userDAO;
    this.likeDAO = likeDAO;
  }

  @GetMapping("/likes")
  Iterable<Like> all() {
    return likeDAO.findAll();
  }

  @PostMapping("/likes")
  Like newComment(@RequestBody Map<String,Object> body) {
    Like newLike = new Like();
    Optional<User> author = userDAO.findById(Long.parseLong(body.get("user_id").toString()));
    Optional<Post> parentPost = postDAO.findById(Long.parseLong(body.get("post_id").toString()));
    newLike.setUser(author.get());
    newLike.setPost(parentPost.get());
    return likeDAO.save(newLike);
  }

  @GetMapping("/likes/{post_id}")
  Iterable<Like>commentsForPost(@PathVariable(value="post_id") Post post){
    return likeDAO.findByPost(post);
  }
}
