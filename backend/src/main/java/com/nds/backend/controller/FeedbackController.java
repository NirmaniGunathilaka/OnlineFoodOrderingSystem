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
import com.nds.backend.bean.Feedback;
import com.nds.backend.service.FeedbackService;

@RestController
@RequestMapping("/feed")
public class FeedbackController {

	@Autowired
	FeedbackService service;

	@PostMapping("/insertFeedback")
	public String insertFeedback(@RequestBody Feedback feedback) {
		service.insertFeedback(feedback);
		return "Inserted feedback with id :" + feedback.getId();
	}

	@GetMapping("/findAllFeedbacks")
	public List<Feedback> getFeedbacks() {
		return service.getFeedbacks();
	}

	@GetMapping("/findFeedback/{id}")
	public Optional<Feedback> getFeedbackById(@PathVariable long id) {
		return service.getFeedbackById(id);
	}

	@DeleteMapping("/delete/{id}")
	public String deleteFeedback(@PathVariable long id) {
		service.deleteFeedback(id);
		return "Feedback deleted by id:" + id;
	}
}
