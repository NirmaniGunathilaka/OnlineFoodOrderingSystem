package com.nds.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nds.backend.bean.User;
import com.nds.backend.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository repo;
	

	public void addUser(User user) {
		repo.save(user);
	}

	public void updateUser(User updateUser) {
		repo.save(updateUser);
	}
	
	public List<User> getUsers() {
		return repo.findAll();
	}

	public Optional<User> getUserById(long id) {
		return repo.findById(id);
	}
	
	public void deleteUser(long id) {
		repo.deleteById(id);
	}

}
