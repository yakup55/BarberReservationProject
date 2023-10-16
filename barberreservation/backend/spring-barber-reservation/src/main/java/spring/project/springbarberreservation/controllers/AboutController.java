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
import spring.project.springbarberreservation.requests.AddAboutRequest;
import spring.project.springbarberreservation.requests.UpdateAboutRequest;
import spring.project.springbarberreservation.responses.AboutResponse;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.services.AboutService;

@RestController
@RequestMapping("/abouts")
@RequiredArgsConstructor
public class AboutController {
private final AboutService service;

@GetMapping
public List<AboutResponse> getAllAbout(){
	return service.getAllAbout().stream().map(AboutResponse::fromEntity).toList();
}
@GetMapping("/{id}")
public AboutResponse getAboutById(@PathVariable Long id) {
	return AboutResponse.fromEntity(service.getAboutById(id));
}
@PostMapping("/{addAbout}")
public MessageResponse addAbout(@RequestBody @Valid AddAboutRequest addAboutRequest) {
	return service.addAbout(addAboutRequest.toEntity());
}

@PutMapping("/{id}")
public MessageResponse updateAbout(@PathVariable Long id,@RequestBody @Valid UpdateAboutRequest updateAboutRequest) {
	return service.UpdateAbout(id, updateAboutRequest.toEntity());
}
@DeleteMapping("/{id}")
public MessageResponse deleteAbout(@PathVariable Long id) {
	return service.deleteAbout(id);
}
}
