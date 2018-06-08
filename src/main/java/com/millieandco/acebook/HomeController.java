package com.millieandco.acebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomeController {

	@Autowired
	PostRepository repository;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}


}
