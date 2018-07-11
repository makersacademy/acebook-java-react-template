package com.makersacademy.acebook.model;

import com.makersacademy.acebook.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCrypt;

import java.util.Random;

public class Authenticator {


    public static String generateToken(){
        Random rand = new Random();
        String randomNumber = String.valueOf(rand.nextInt(1000));
        return BCrypt.hashpw(randomNumber, BCrypt.gensalt());
    }

    public static Boolean passwordValid(UserRepository userRepository,String username, String password){
        User user = userRepository.findByUsername(username);
        if(user.getPassword().equals(password)){
            return true;
        }
        return false;
    }
}


