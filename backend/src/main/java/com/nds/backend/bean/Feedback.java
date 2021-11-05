package com.nds.backend.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "feedback")
public class Feedback {
	
	@Transient
    public static final String SEQUENCE_NAME = "feedback_sequence";

	@Id
	private long id; 
	private String name;
	private String email;
	private String contact_number;
	private String message;

	
}
