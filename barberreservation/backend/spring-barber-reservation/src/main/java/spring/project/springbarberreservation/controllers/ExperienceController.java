package spring.project.springbarberreservation.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.requests.AddExperienceRequest;
import spring.project.springbarberreservation.requests.UpdateExperienceRequest;
import spring.project.springbarberreservation.responses.ExperienceResponse;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.services.ExperienceService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/experiences")
public class ExperienceController {
private final ExperienceService service;


@GetMapping
public List<ExperienceResponse> getAllExperience(){
	return service.getAllExperience().stream().map(ExperienceResponse::fromEntity).toList();
}
@GetMapping("/{id}")
public ExperienceResponse getExperiencerById(@PathVariable Long id) {
	return ExperienceResponse.fromEntity(service.getExperienceById(id));
}
@PostMapping("/{addExperience}")
public MessageResponse addExperience(@RequestBody @Valid AddExperienceRequest addExperienceRequest) {
	return service.addExperience(addExperienceRequest.toEntity());
}

@PutMapping("/{id}")
public MessageResponse updateExperience(@PathVariable Long id,@RequestBody @Valid UpdateExperienceRequest updateExperienceRequest ) {
	return service.updateExperience(id, updateExperienceRequest.toEntity());
}
@DeleteMapping("/{id}")
public MessageResponse deleteExperience(@PathVariable Long id) {
	return service.deleteExperience(id);
}
}
