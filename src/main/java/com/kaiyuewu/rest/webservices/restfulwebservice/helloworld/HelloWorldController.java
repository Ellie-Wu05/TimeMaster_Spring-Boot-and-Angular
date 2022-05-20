package com.kaiyuewu.rest.webservices.restfulwebservice.helloworld;

import org.springframework.web.bind.annotation.*;

// Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
    //get

    //URL - /hello-world

    //method - "Hello World"
//    @RequestMapping(method = RequestMethod.GET,path = "/hello-world")
    @GetMapping(path = "/hello-world")
    public String helloWorld(){

        return "Hello World";
    }
    //hello-world-bean
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
//        throw new RuntimeException("Some error has happened!");
        return new HelloWorldBean ("Hello World");
    }
    //hello-world/path-variables/KaiyueWu
    @GetMapping(path = "/hello-world/path-variables/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean (String.format("Hello World,%s",name));
    }
}
