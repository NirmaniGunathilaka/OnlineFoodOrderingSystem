package com.nds.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nds.backend.bean.FoodItem;
import com.nds.backend.service.FoodItemService;

@RestController
public class FoodItemController {
	
	@Autowired
	private FoodItemService foodItemService;
	
	@PostMapping("/addItem")
	public String saveItem(@RequestBody FoodItem foodItem) {
		foodItemService.addItem(foodItem);
		return "Successfully added";
	}
	
	@GetMapping("/findAllItems")
	public List<FoodItem> getFoodItems(){
		return foodItemService.getAllItems();
	}
	
	@GetMapping("/findAllItems/{id}")
	public Optional<FoodItem> getFoodItemById(@PathVariable int id){
		return foodItemService.getItemById(id);
	}
	
	@DeleteMapping("/deleteItem/{id}")
	public String deleteItemById(@PathVariable int id) {
		foodItemService.deleteItem(id);
		return "Deleted successfully";
	}
	
	@PutMapping("/updateItem")
	public String updateItem(@RequestBody FoodItem foodItem) {
		foodItemService.updateItem(foodItem);
		return "Successfully updated";
	}
	

}
