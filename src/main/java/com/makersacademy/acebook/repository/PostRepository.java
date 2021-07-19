package com.makersacademy.acebook.repository;

import com.makersacademy.acebook.model.Post;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, Long> {
	List<Post> findByUserName(String userName);

	  Post findById(long id);
}
