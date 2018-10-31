package com.makersacademy.acebook.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;

import lombok.Data;

import java.sql.Timestamp;

@Data
@Entity
@Table(name = "POSTS")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private int user_id;
    private Timestamp date_time;

    private Post() {}

    public Post(Long id, String content, int user_id, Timestamp date_time) {

        this.id = id;
        this.content = content;
        this.user_id = user_id;
        this.date_time = date_time;
    }

}
