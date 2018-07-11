package com.makersacademy.acebook._helloworld;

import lombok.Data;


@Data
public class HelloWorldJson {

    private String message;

    public HelloWorldJson(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return String.format("HelloWorldBean [message=%s]", message);
    }

}
