package com.nds.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nds.backend.bean.FoodItem;
import com.nds.backend.repository.FoodItemRepository;

@Service
public class FoodItemService {
	
	@Autowired
	private FoodItemRepository foodItemrepo;
	
	public void addItem(FoodItem foodItem) {
		foodItemrepo.save(foodItem);
	}
	public List<FoodItem> getAllItems(){
		return foodItemrepo.findAll();
	}
	public Optional<FoodItem> getItemById(int id){
		return foodItemrepo.findById(id);
	}
	public void deleteItem(int id) {
		foodItemrepo.deleteById(id);
	}
	
}
