package com.makersacademy.acebook.dao;

import com.makersacademy.acebook.model.Like;
import com.makersacademy.acebook.model.Post;
import org.springframework.data.repository.CrudRepository;

public interface LikeDAO extends CrudRepository<Like, Long> {
    Iterable<Like> findByPost(Post post);
}
