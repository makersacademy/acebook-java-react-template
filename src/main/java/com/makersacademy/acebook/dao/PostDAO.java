package com.makersacademy.acebook.dao;

import com.makersacademy.acebook.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostDAO extends JpaRepository<Post, Long> {

}
