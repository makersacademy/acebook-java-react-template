package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.dao.UserDAO;
import com.makersacademy.acebook.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RestController
@ResponseBody
public class SessionController {
  @Autowired
  UserDAO userDAO;

  @GetMapping("/getuser")
  public Map<String, String> getLoggedInUser(Principal principal) {
    String email = principal.getName();
    User user = userDAO.findByEmail(email);
    System.out.println(user);
    HashMap<String, String> userMap = new HashMap<>();
    userMap.put("id", Long.toString(user.getId()));
    userMap.put("fistName", user.getFirstName());
    userMap.put("lastName", user.getLastName());
    userMap.put("email", user.getEmail());
    return userMap;
  }
}
