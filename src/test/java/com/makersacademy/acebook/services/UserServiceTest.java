package com.makersacademy.acebook.services;

import static org.assertj.core.api.Assertions.assertThat;
import com.makersacademy.acebook.dao.UserDAO;
import com.makersacademy.acebook.model.Users;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)

//By default, the @DataJpaTest annotation replaces the declared database configuration by an in-memory database (H2),
//which is useful when running tests that doesn’t touch real database. When you want to run tests on real database,
//use the @AutoConfigureTestDatabase as follows:
public class UserServiceTest {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserDAO userDao;

    //Users user = new Users("test@gmail.com","bob","billybob","china");

    @Test
    public void UserServiceTest() {
        entityManager.persist(new Users("test@gmail.com","bob","billybob","china"));
        //userDao.save(user);
        Users user = userDao.findByEmail("test@gmail.com");
        assertThat(user.getEmail()).isEqualTo("test@gmail.com");


    }



}



