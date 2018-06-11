package com.millieandco.acebook;

import static org.junit.Assert.*;
import org.junit.Test;
public class PostTest {

	private Post post = new Post("hello");

	@Test
	public void postHasId() {
		assertEquals(post.getId(), 0);
	}

	@Test
	public void postHasContent() {
		assertEquals(post.getComment(), "hello");
	}

	@Test
	public void toStringReturnsCorrectString() {
		assertEquals(post.toString(), "Post[id=0, comment='hello']");
	}
	
}
