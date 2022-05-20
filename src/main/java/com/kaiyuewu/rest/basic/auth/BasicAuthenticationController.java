package com.kaiyuewu.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {

    //hello-world-bean
    @GetMapping(path = "/basicauth")
    public AuthenticationBean basicAuthBean() {
//        throw new RuntimeException("Some error has happened!");
        return new AuthenticationBean("You are authenticated");
    }
}

