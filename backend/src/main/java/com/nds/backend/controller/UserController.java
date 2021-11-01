package com.nds.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nds.backend.bean.User;
import com.nds.backend.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService service;
	
	@GetMapping("/findAllUsers")
	public List<User> getUsers() {
		return service.getUsers();	
	}
	
	@GetMapping("/findUser/{id}")
	public Optional<User> getUserById(@PathVariable long id) {
		return service.getUserById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteUser(@PathVariable long id) {
		service.deleteUser(id);
		return "User with id = " + id + " deleted successfully";	
	}
}
