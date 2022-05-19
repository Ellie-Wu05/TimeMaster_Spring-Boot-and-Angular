package com.kaiyuewu.rest.webservices.restfulwebservice.todo;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {

    private static List<Todo> todos = new ArrayList<Todo>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter,"Kaiyue Wu","Cook Class",new Date(),false));
        todos.add(new Todo(++idCounter,"Kaiyue Wu","Dance Class",new Date(),false));
        todos.add(new Todo(++idCounter,"Kaiyue Wu","Swimming Class",new Date(),false));
    }

    public List<Todo> findAll(){
        return todos;
    }

}
