package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class PostController {
    // Autowired annotation creates all methods for crud
    // that help with storing and getting stuff from DB.
    @Autowired
    private PostRepository postRepository;

    @GetMapping("/posts")
    public List<Post> listPosts(){
        // (List) will help to convert the return value of
        // findAll to List (similar to Array) type.
        return (List) postRepository.findAll();
    }

    @PostMapping("/posts")
    public void createPost(@RequestBody Post post){
        Post savedPost = postRepository.save(post);
    }

}
