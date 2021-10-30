package com.nds.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nds.backend.bean.Deal;
import com.nds.backend.repository.DealRepository;

@RestController
public class DealController {

	@Autowired
	private DealRepository repo;
	
	@PostMapping("/addDeal")
	public String saveDeal(@RequestBody Deal deal) {
		repo.save(deal);
		return "Added deal with id :"+deal.getId();
	}
	
	@GetMapping("/findAllDeals")
	public List<Deal> getDeals(){
		
		return repo.findAll();
	}
	
	@GetMapping("/findDeal/{id}")
	public Optional<Deal> getDeal(@PathVariable long id) {
		return repo.findById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteDeal(@PathVariable long id) {
		 repo.deleteById(id);
		 return "Deal deleted by id:"+id;
	}
}
