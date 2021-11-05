package com.nds.backend.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nds.backend.bean.Feedback;
import com.nds.backend.repository.FeedbackRepository;

@Service
public class FeedbackService {

	
	
	@Autowired
	private FeedbackRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	public void insertFeedback(Feedback feedback) {
		feedback.setId(sequenceGeneratorService.getSequenceNumber(Feedback.SEQUENCE_NAME));
		repo.save(feedback);
	}

	public List<Feedback> getFeedbacks() {
		return repo.findAll();
	}

	public Optional<Feedback> getFeedbackById(long id) {
		return repo.findById(id);
	}

	public void deleteFeedback(long id) {
		repo.deleteById(id);

	}
}
