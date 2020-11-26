package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.dao.PostDAO;
import com.makersacademy.acebook.model.Post;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PostController {


   private PostDAO postDAO;

   // required to add posts. constructor!
   public PostController(PostDAO postDAO) {
        this.postDAO = postDAO;
    }


   @GetMapping("/add")
    public String addPostForm(){
       return "add";
   }

   @PostMapping("/add")
    public String newPost(@RequestParam String text){
       Post post = new Post(text);
       postDAO.save(post);
       return "index";
   }
}
