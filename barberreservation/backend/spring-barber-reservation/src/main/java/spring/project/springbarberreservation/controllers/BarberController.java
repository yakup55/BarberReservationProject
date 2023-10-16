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
import spring.project.springbarberreservation.requests.AddBarberRequest;
import spring.project.springbarberreservation.requests.UpdateBarberRequest;
import spring.project.springbarberreservation.responses.BarberResponse;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.services.BarberService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/barbers")
public class BarberController {
	private final BarberService service;

	@GetMapping("/{id}")
	public BarberResponse getBarberById(@PathVariable Long id) {
		return BarberResponse.fromEntity(service.getBarberById(id));
	}
	@GetMapping
	public List<BarberResponse> getAllBarbers() {
		return service.getAllBarber().stream().map(BarberResponse::fromEntity).toList();
	}
	@PostMapping("/{addBarber}")
	public MessageResponse addBarber(@RequestBody @Valid AddBarberRequest addBarberRequest) {
		return service.addBarber(addBarberRequest.toEntity());
	}
	@PutMapping("/{id}")
	public MessageResponse updateBarber(@PathVariable Long id,@RequestBody @Valid UpdateBarberRequest updateBarberRequest) {
		return service.updateBarber(id, updateBarberRequest.toEntity());
	}
	@DeleteMapping("/{id}")
	public MessageResponse deleteBarber(@PathVariable Long id) {
		return service.deleteBarber(id)	;
				}
}
