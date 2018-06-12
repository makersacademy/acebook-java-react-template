package com.millieandco.acebook.Unit;

import com.millieandco.acebook.User;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class UserTest {

	private User user = new User("Kylo", "Ren", "kyloren@sithlord.com", "ihatejedis");

	@Test
	public void userHasId() {
		assertEquals(user.getId(), 0);
	}

	@Test
	public void userHasFirstName() {
		assertEquals(user.getFirstName(), "Kylo");
	}

	@Test
	public void userHasLastName() {
		assertEquals(user.getLastName(), "Ren");
	}

	@Test
	public void userHasEmail() {
		assertEquals(user.getEmail(), "kyloren@sithlord.com");
	}

	@Test
	public void userHasPassword() {
		assertEquals(user.getPassword(), "ihatejedis");
	}

	@Test
	public void toStringReturnsCorrectString() {
		assertEquals(user.toString(), "User[id=0, firstName='Kylo', lastName='Ren', email='kyloren@sithlord.com', password='ihatejedis']");
	}

}
