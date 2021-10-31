package com.nds.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nds.backend.bean.Deal;
import com.nds.backend.repository.DealRepository;
import com.nds.backend.service.DealService;

@RestController
@RequestMapping("/deal")
public class DealController {

	@Autowired
	DealService service;

	@PostMapping("/insertDeal")
	public String insertDeal(@RequestBody Deal deal) {
		service.insertDeal(deal);
		return "Inserted deal with id :" + deal.getId();
	}

	@GetMapping("/findAllDeals")
	public List<Deal> getDeals() {
		return service.getDeals();
	}

	@GetMapping("/findDeal/{id}")
	public Optional<Deal> getDealById(@PathVariable long id) {
		return service.getDealById(id);
	}

	@DeleteMapping("/delete/{id}")
	public String deleteDeal(@PathVariable long id) {
		service.deleteDeal(id);
		return "Deal deleted by id:" + id;
	}
}
