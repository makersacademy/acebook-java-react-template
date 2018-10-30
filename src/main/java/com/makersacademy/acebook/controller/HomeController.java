package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@Controller
@RequestMapping("/api")
public class HomeController {
	@Autowired
	PostRepository postRepository;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

//	@GetMapping(path = "/api/posting")
//	public String homeInit(Post post) {
//		return "posting";
//	}

//	@PostMapping(path = "/api/posting")
//	public Post createPost(@Valid @RequestBody Post post) {
//		return postRepository.save(post);
//	}

}
