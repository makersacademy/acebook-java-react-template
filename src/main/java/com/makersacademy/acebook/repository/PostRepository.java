package com.makersacademy.acebook.repository;

import com.makersacademy.acebook.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
//    List<Post> findAllByOrderBycreatedAtAsc(Date created_at);
//    public List<Post> findBy(Date createdAt, Sort sort);
//    Post findBycreatedAt(Date createdAt);
//    List<Date> findBypost_idOrderByDateDesc(Date createdAt);
//
//    @Override
//    @Query("select u from Post u left outer join u.finances.selectedAccount")
//    List<Post> findAll(org.springframework.data.domain.Sort sort);

}
