package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.User;
import com.makersacademy.acebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserController {

	@Autowired
	UserRepository userRepository;


	@PostMapping("/user")
	public User createUser(@RequestBody Map<String,String> body){
		String firstname = body.get("firstname");
		String lastname = body.get("lastname");
		String username = body.get("username");
		String email = body.get("email");
		String password = body.get("password");
		return userRepository.save(new User(firstname, lastname, username, email, password));
	}

}

