package com.makersacademy.acebook.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Post {

    private @Id @GeneratedValue Long id;
    private String content;

    private Post() {}

    public Post(String content) {
        this.content = content;
    }

}
