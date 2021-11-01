package com.nds.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nds.backend.bean.User;

public interface UserRepository extends MongoRepository<User, Long> {

}
