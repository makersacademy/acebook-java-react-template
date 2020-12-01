package com.makersacademy.acebook.repository;

import com.makersacademy.acebook.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;



public interface PostRepository extends JpaRepository<Post, Long> {

}

