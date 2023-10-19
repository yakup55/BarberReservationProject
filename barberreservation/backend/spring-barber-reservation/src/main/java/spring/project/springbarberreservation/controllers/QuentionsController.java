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
import spring.project.springbarberreservation.requests.AddQuentionsRequest;
import spring.project.springbarberreservation.requests.UpdateQuentionsRequest;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.QuentionsResponse;
import spring.project.springbarberreservation.services.QuentionsService;

@RequestMapping("/quentions")
@RestController
@RequiredArgsConstructor
public class QuentionsController {
	private final QuentionsService service;
	
	
	@GetMapping
	public List<QuentionsResponse> getQuentionsList(){
		return service.getQuentionsList().stream().map(QuentionsResponse::fromEntity).toList();
	}
	@GetMapping("/{id}")
	public QuentionsResponse getQuentionById(@PathVariable Long id) {
		return QuentionsResponse.fromEntity(service.getQuentionById(id));
	}
	@PostMapping("/{addQuention}")
	public MessageResponse addQuention(@RequestBody @Valid AddQuentionsRequest addQuentionsRequest) {
		return service.addQuention(addQuentionsRequest.toEntity()); 
	}
	@PutMapping("/{id}")
	public MessageResponse updateQuention(@PathVariable Long id, @RequestBody @Valid  UpdateQuentionsRequest updateQuentionsRequest) {
		return service.updateQuentions(id, updateQuentionsRequest.toEntity());
	}
	@DeleteMapping("/{id}")

	public MessageResponse deleteQuention(@PathVariable Long id) {
		return service.deleteQuention(id);
	}
	}