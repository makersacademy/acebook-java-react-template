package com.millieandco.acebook.Integration;

import com.millieandco.acebook.User;
import com.millieandco.acebook.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.*;

import java.util.List;

import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;

@ActiveProfiles("test")
@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = NONE)
public class UserRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void readsAndWritesToDatabase() {
        userRepository.deleteAll();

        User firstUser = new User("Kylo", "Ren", "kyloren@sithlord.com", "ihatejedis");;
        entityManager.persist(firstUser);
        entityManager.flush();

        User secondUser = new User("Darth", "Maul", "darthmaul@sithlord.com", "ihavehorns");;
        entityManager.persist(secondUser);
        entityManager.flush();

        List<User> users = userRepository.findAll();

        assertEquals(users.get(0).getFirstName(), "Kylo");
        assertEquals(users.get(0).getLastName(), "Ren");
        assertEquals(users.get(0).getEmail(), "kyloren@sithlord.com");
        assertEquals(users.get(0).getPassword(), "ihatejedis");
        assertEquals(users.get(1).getFirstName(), "Darth");
        assertEquals(users.get(1).getLastName(), "Maul");
        assertEquals(users.get(1).getEmail(), "darthmaul@sithlord.com");
        assertEquals(users.get(1).getPassword(), "ihavehorns");
    }
}