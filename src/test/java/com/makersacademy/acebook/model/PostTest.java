package com.makersacademy.acebook.model;

import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.*;

import org.junit.Test;

public class PostTest {

	private Post post = new Post("I like being happy");

	@Test
	public void postHasContent() {
		assertThat(post.getContent(), containsString("I like being happy"));
	}

}
