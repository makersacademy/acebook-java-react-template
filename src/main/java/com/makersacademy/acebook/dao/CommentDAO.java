package com.makersacademy.acebook.dao;

import com.makersacademy.acebook.model.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentDAO extends CrudRepository<Comment, Long> {
}
