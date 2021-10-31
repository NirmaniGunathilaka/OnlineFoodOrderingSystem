package com.nds.backend.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nds.backend.bean.Deal;
import com.nds.backend.repository.DealRepository;

@Service
public class DealService {

	@Autowired
	DealRepository repo;

	public void insertDeal(Deal deal) {
		repo.save(deal);
	}

	public List<Deal> getDeals() {
		return repo.findAll();
	}

	public Optional<Deal> getDealById(long id) {
		return repo.findById(id);
	}

	public void deleteDeal(long id) {
		repo.deleteById(id);

	}
}
