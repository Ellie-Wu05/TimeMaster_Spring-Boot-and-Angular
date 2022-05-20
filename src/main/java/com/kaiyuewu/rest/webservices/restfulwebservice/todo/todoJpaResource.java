package com.kaiyuewu.rest.webservices.restfulwebservice.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class todoJpaResource {
    @Autowired
    private TodoJpaRepository todoJpaRepository;

    @Autowired
    private TodoHardCodedService todoService;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoJpaRepository.findByUsername(username);
//        return todoService.findAll();
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username,@PathVariable long id){
        return todoJpaRepository.findById(id).get();
//        return todoService.findById(id);
    }

    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodos(@PathVariable String username,@PathVariable long id){
        //Todo todo = todoService.deletebyId(id);
        todoJpaRepository.deleteById(id);


        return ResponseEntity.noContent().build();

        //return ResponseEntity.notFound().build();
    }

    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodos(
            @PathVariable String username,
            @PathVariable long id,
            @RequestBody Todo todo){
//        Todo updatedTodo = todoService.saveTodo(todo);
        Todo updatedTodo = todoJpaRepository.save(todo);
        return new ResponseEntity<Todo>(todo,HttpStatus.OK);
    }

    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> createTodos(
            @PathVariable String username,
            @RequestBody Todo todo){
//        Todo createdTodo = todoService.saveTodo(todo);
        todo.setUsername(username);
        Todo createdTodo = todoJpaRepository.save(todo);
        //location

        //Get current resource url
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").
                buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
