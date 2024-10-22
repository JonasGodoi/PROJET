package com.example.gcvas.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.gcvas.models.User;
import com.example.gcvas.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
@Validated
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getUser() {
        return ResponseEntity.ok().body(userService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") Long id) {
        User obj = this.userService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    // Atualizado para aceitar profile do frontend
    @PostMapping
    public ResponseEntity<User> postUser(@RequestBody @Valid User obj) {
        // Removido: obj.setProfile(TipoUser.SECRETARIA);
        User createdUser = this.userService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdUser.getId()).toUri();

        return ResponseEntity.created(uri).body(createdUser);
    }

    // Opcional: Remover ou renomear este endpoint se não for necessário
    @PostMapping("/path")
    public ResponseEntity<Void> postUserPath(@RequestBody @Valid User obj) {
        this.userService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> putUser(@PathVariable("id") Long id, @RequestBody User newObj) {
        newObj.setId(id);
        this.userService.update(newObj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable("id") Long id){
        this.userService.deleteByid(id);
        return ResponseEntity.noContent().build();
    }
}