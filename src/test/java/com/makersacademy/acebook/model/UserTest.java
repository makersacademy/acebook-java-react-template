package com.makersacademy.acebook.model;
import org.junit.Before;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

public class UserTest {

    private User user;

    @Before
    public void setup() {
        user = new User("John", "Doe", "johndoe", "johndoe@email.com", "hunter123");
    }

    @Test
    public void userHasFirstName() {
        assertEquals(user.getFirstname(), "John");
    }

    @Test
    public void userHasLastName() {
        assertEquals(user.getLastname(), "Doe");
    }

    @Test
    public void userHasUsername() {
        assertEquals(user.getUsername(), "johndoe");
    }

    @Test
    public void userHasEmail() {
        assertEquals(user.getEmail(), "johndoe@email.com");
    }

    @Test
    public void userHasPassword() {
        assertEquals(user.getPassword(), "hunter123");
    }
}
