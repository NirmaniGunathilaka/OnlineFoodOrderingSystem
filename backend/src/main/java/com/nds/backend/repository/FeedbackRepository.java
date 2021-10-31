package com.nds.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nds.backend.bean.Feedback;


public interface FeedbackRepository  extends MongoRepository<Feedback, Long> {

}
