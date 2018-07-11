package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.Authenticator;
import com.makersacademy.acebook.model.User;
import com.makersacademy.acebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

import java.util.Map;

@RestController
public class AuthenticationController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Map<String,String> body, final HttpServletResponse response) {
        String username = body.get("username");
        String password = body.get("password");
        if(Authenticator.passwordValid(userRepository, username, password)){
            User user = userRepository.findByUsername(username);
            String token = Authenticator.generateToken();
            user.setToken(token);
            userRepository.save(user);
            return ResponseEntity.status(HttpServletResponse.SC_OK).body(token);
        }
        return ResponseEntity.status(HttpServletResponse.SC_UNAUTHORIZED).body("Incorrect details");
        }


    @PostMapping("/logout")
    public ResponseEntity logout(@RequestBody Map<String,String> body){
        String token = body.get("token");
        User user = userRepository.findByToken(token);
        if(user != null) {
            user.removeToken();
            userRepository.save(user);
            return ResponseEntity.status(HttpServletResponse.SC_OK).body("Success");
        }
        return ResponseEntity.status(HttpServletResponse.SC_BAD_REQUEST).body("Token invalid");
    }

}
