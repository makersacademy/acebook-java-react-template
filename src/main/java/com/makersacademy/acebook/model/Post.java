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
    private String content_post;
    private int user_id;
    private Timestamp post_date_time;

    private Post() {}

    public Post(Long id, String content_post, int user_id, Timestamp post_date_time) {

        this.id = id;
        this.content_post = content_post;
        this.user_id = user_id;
        this.post_date_time = post_date_time;
    }

}
