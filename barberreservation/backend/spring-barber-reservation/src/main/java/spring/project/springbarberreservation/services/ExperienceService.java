package spring.project.springbarberreservation.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Experience;
import spring.project.springbarberreservation.repositories.ExperienceRepository;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
@RequiredArgsConstructor
public class ExperienceService {
private final ExperienceRepository repository;

public List<Experience> getAllExperience(){
	return repository.findAll();
}
public Experience getExperienceById(Long id) {
	return repository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
}
public MessageResponse addExperience(Experience experience) {
	repository.save(experience);
	return new MessageResponse("Has been created",MessageType.SUCCESS);
}

public MessageResponse updateExperience(Long id,Experience experience) {
	Experience newExperience=getExperienceById(id);
	newExperience.update(experience);
	repository.save(newExperience);
	return new MessageResponse("Has been update", MessageType.SUCCESS);
	
}
public MessageResponse deleteExperience(Long id) {
	if(!repository.existsById(id)) {
		return new MessageResponse("Experience cant be found", MessageType.ERROR);
	}
	repository.deleteById(id);
	return new MessageResponse("Has been deleted", MessageType.SUCCESS);
}
}
