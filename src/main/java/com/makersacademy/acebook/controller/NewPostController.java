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
//    @Autowired
//    PostDAO postDAO;

    @GetMapping("/makepost")
    public String makeNewPost(Model model) {
        model.addAttribute("content", new Post());

        return "postForm";
    }

    @PostMapping("/makepost")
    @ResponseBody
    public String sendNewPost(@RequestParam(value="name") String name,
                              @RequestParam(value="message") String message,
                              @ModelAttribute Model model) {
        System.out.println(name);
        System.out.println(message);

//        curl -v -X POST 'localhost:8080/api/posts' -d '{"content": "Bilbo my old friend!"}' -H 'Content-Type: application/json'
        model.addAttribute("content", message);
        postDAO.save(message);

        return "redirect:/";

    }
}
