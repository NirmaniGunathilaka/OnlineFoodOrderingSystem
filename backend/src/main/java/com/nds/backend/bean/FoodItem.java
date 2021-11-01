package com.nds.backend.bean;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="food_item")
public class FoodItem {
	private int id;
	private String item_name;
	private String item_type;
	private int quantity;
	private double price;
	private String decsription;
	
	public FoodItem(int id, String item_name, String item_type, int quantity, double price, String decsription) {
		super();
		this.id = id;
		this.item_name = item_name;
		this.item_type = item_type;
		this.quantity = quantity;
		this.price = price;
		this.decsription = decsription;
	}
	
	public FoodItem() {
		super();
		
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getItem_name() {
		return item_name;
	}
	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}
	public String getItem_type() {
		return item_type;
	}
	public void setItem_type(String item_type) {
		this.item_type = item_type;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDecsription() {
		return decsription;
	}
	public void setDecsription(String decsription) {
		this.decsription = decsription;
	}
	
	
	
	
	
	
}
