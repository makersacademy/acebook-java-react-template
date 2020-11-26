package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.dao.UserDAO;
import com.makersacademy.acebook.model.Users;
import com.makersacademy.acebook.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserDAO userDAO;

    @GetMapping("/login")
    // GET with no params, just shows you the form on the /login page
    public String showLoginForm(){
        // returns the view named 'login'
        return "login";
    }

    @GetMapping("/register")
    public String registerForm(Model model){
        model.addAttribute("users", new Users());
        return "register";
    }
    @PostMapping("/register")
    public String registerMember(@Valid Users user, Model model){
        String email = user.getEmail();
        if (userDAO.findByEmail(email) != null){
            model.addAttribute("exist",true);
            return "register";
        }
        userService.createUser(user);
        model.addAttribute("success", true);
        return "login";
    }
}
