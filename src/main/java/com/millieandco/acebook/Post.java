package com.millieandco.acebook;

import javax.persistence.*;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "comment")
    private String comment;

    @Column(name = "created_at")
    @CreationTimestamp
    private LocalDate createdAt;


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

