package com.millieandco.acebook.Integration;

import com.millieandco.acebook.Post;
import com.millieandco.acebook.PostRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;

@ActiveProfiles("test")
@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = NONE)
public class PostRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private PostRepository postRepository;

    @Test
    public void readsAndWritesToDatabase() {
        postRepository.deleteAll();

        Post firstPost = new Post("first post");
        entityManager.persist(firstPost);
        entityManager.flush();

        Post secondPost = new Post("second post");
        entityManager.persist(secondPost);
        entityManager.flush();

        List<Post> posts = postRepository.findAll();

        assertEquals(posts.get(0).getComment(), "first post");
        assertEquals(posts.get(1).getComment(), "second post");
    }
}