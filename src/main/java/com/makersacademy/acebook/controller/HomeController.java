package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.dao.UserDAO;
import com.makersacademy.acebook.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Date;

@Controller
public class HomeController {

	@Autowired
	UserDAO userDAO;

	@GetMapping(value = "/")
	public String showIndex(Model model, Principal principal, Users user){
		if(principal == null){
			return "login";
		}
		model.addAttribute("message", "Hello everyone, we are go to back to Spring with together");
		model.addAttribute("date", new Date());
		model.addAttribute("users", userDAO.getOne(principal.getName()));


		return "index";
	}

}
