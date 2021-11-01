package com.nds.backend.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Document("user")
public class User {
	
	@Id
	private Long id;
	
	private String name;
	private String email;
	private String password;
	private String contact_number;
	private String user_type;
	
}

