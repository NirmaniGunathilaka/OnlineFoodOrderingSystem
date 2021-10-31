package com.nds.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.nds.backend.bean.Deal;

public interface DealRepository extends MongoRepository<Deal, Long> {
	
	

}
