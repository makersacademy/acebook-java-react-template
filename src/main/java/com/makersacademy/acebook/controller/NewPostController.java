package com.makersacademy.acebook.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Controller;
import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.dao.PostDAO;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class NewPostController {

    private PostDAO postDAO;


    @Autowired
    public void setPostDAO(PostDAO postDAO) {
        this.postDAO = postDAO;
    }

    @GetMapping("/makepost")
    public String makeNewPost() {


        return "postForm";
    }

    @PostMapping("/makepost")
    public String sendNewPost(@RequestParam(value="name") String name,
                              @RequestParam(value="message") String message)
                              {
        Post post = new Post(message);

        postDAO.save(post);

        return "redirect:/";

    }
}
