package com.kaiyuewu.rest.webservices.restfulwebservice.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {

    private static List<Todo> todos = new ArrayList<Todo>();
    private static long idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "Kaiyue Wu", "Enter Your Todo...", new Date(), false));
        todos.add(new Todo(++idCounter, "Kaiyue Wu", "Dance Class", new Date(), false));
        todos.add(new Todo(++idCounter, "Kaiyue Wu", "Cook Class", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo deletebyId(long id) {
        Todo todo = findById(id);
        if (todo == null) return null;

        if (todos.remove(todo)) {
            return todo;
        }
        return null;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }

        }

        return null;
    }

    public Todo saveTodo(Todo todo){
        if(todo.getId() ==-1 || todo.getId()==0){
            todo.setId(++idCounter);
            todos.add(todo);
        }else{
            deletebyId(todo.getId());
            todos.add(todo);
        }
        return todo;
    }
}
