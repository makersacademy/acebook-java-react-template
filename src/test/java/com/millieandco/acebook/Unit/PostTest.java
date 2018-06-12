package com.millieandco.acebook.Unit;

import static org.junit.Assert.*;

import com.millieandco.acebook.Post;
import org.junit.Test;
public class PostTest {

	private Post post = new Post("hello");

	@Test
	public void postHasId() {
		assertEquals(post.getId(), 0);
	}

	@Test
	public void postHasContent() {
		assertEquals(post.getContent(), "hello");
	}

	@Test
	public void toStringReturnsCorrectString() {
		assertEquals(post.toString(), "Post[id=0, content='hello']");
	}

}
