package com.makersacademy.acebook.model;

public class UserDetails {
    public Long id;
    public String firstname;
    public String lastname;
    public String email;

    public UserDetails(User user){
        this.id = user.getId();
        this.firstname = user.getFirstname();
        this.lastname = user.getLastname();
        this.email = user.getEmail();
    }
}
