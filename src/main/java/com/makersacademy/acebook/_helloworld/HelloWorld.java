package com.makersacademy.acebook._helloworld;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// REST Controller
@RestController
public class HelloWorld {

    // GET
    // URI - /hello-world
    // JSON - "Hello World"
    @GetMapping(path = "/hello-world")
    public HelloWorldJson helloWorld() {
        return new HelloWorldJson("Hello World");
    }

    // GET
    // URI - /hello-world/Ben/
    // JSON - "Hello, Ben"
    @GetMapping(path = "/hello-world/{name}")
    public HelloWorldJson helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldJson(String.format("Hello, %s", name));
    }

}
