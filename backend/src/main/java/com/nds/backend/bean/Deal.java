package com.nds.backend.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Document(collection = "deal")
public class Deal {

	@Id
	private long id;
	private String deal_name;
	private float discount;

//	public Deal() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public Deal(long id, String deal_name, float discount) {
//		super();
//		this.id = id;
//		this.deal_name = deal_name;
//		this.discount = discount;
//	}

}
