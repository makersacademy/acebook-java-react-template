package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class PostController {

    @Autowired
    PostRepository postRepository;

    @PostMapping("/posts")
    public Post createPost(@RequestBody Map<String,String> body) {
        String content = body.get("content");
        return postRepository.save(new Post(content));
    }

    @GetMapping("/posts")
    public Iterable<Post> getPost(){
        return postRepository.findAll();
    }
}
