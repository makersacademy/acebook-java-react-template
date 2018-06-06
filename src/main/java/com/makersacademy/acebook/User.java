package com.makersacademy.acebook;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class User {

    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private String email;

    private User() {}

    public User(String firstName, String lastName, String email ) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

}
