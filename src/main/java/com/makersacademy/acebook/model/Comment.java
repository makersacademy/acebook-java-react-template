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
@Table(name = "COMMENTS")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long user_id;
    private Long post_id;
    private String content_comment;
    private Timestamp comment_date_time;


    private Comment() {}

    public Comment(Long id, Long user_id, Long post_id, String content_comment, Timestamp comment_date_time) {
        this.id = id;
        this.user_id = user_id;
        this.post_id = post_id;
        this.content_comment = content_comment;
        this.comment_date_time = comment_date_time;
    }

}
