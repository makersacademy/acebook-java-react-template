package com.millieandco.acebook;

import javax.persistence.*;

import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "comment")
    private String comment;

    protected Post() {
    }

    public Post(String comment) {
        this.comment = comment;
    }

    @Override
    public String toString() {
        return String.format("Post[id=%d, comment='%s']", id, comment);
    }
}