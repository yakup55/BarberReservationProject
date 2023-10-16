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
import spring.project.springbarberreservation.requests.AddHourRequest;
import spring.project.springbarberreservation.requests.UpdateHourRequest;
import spring.project.springbarberreservation.responses.HourResponse;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.services.HourService;

@RestController
@RequestMapping("/hours")
@RequiredArgsConstructor
public class HourController {
private final HourService service;

@GetMapping
public List<HourResponse> getAllHours(){
	return service.getAllHours().stream().map(HourResponse::fromEntity).toList();
}
@GetMapping("/{id}")
public HourResponse getHourById(@PathVariable Long id) {
	return HourResponse.fromEntity(service.getHourById(id));
}
@PostMapping("/{addUser}")
public MessageResponse addHour(@RequestBody @Valid AddHourRequest addHourRequest  ) {
	return service.addHour(addHourRequest.toEntity());
}

@PutMapping("/{id}")
public MessageResponse updateHour(@PathVariable Long id,@RequestBody @Valid UpdateHourRequest updateHourRequest) {
	return service.updateHour(id, updateHourRequest.toEntity());
}
@DeleteMapping("/{id}")
public MessageResponse deleteHour(@PathVariable Long id) {
	return service.deleteHour(id);
}
}
