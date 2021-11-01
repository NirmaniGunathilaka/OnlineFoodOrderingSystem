package com.nds.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nds.backend.bean.FoodItem;

public interface FoodItemRepository extends MongoRepository<FoodItem, Integer> {

}
