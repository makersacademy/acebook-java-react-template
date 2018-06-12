package com.millieandco.acebook;

import javax.persistence.*;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "content")
    private String content;

    @Column(name = "created_at")
    @CreationTimestamp
    private LocalDate createdAt;


    protected Post() {
    }

    public Post(String comment) {
        this.content = comment;
    }

    @Override
    public String toString() {
        return String.format("Post[id=%d, content='%s']", id, content);
    }
}

