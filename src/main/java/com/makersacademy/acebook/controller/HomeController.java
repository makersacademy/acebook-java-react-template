package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class HomeController {

	private final PostRepository postRepository;

	@Autowired
	public HomeController(PostRepository postRepository) {
		this.postRepository = postRepository;
	}

	@GetMapping("/greeting")
	public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
		model.addAttribute("name", name);

		return "greeting";
	}

    @GetMapping("/posts")
	public String show(Model model) {
	    Iterable<Post> posts = postRepository.findAll();
        model.addAttribute("posts", posts);

	    return "index";
    }
}

