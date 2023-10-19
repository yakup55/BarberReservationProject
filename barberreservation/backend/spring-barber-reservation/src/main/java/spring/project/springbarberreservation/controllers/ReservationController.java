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
import spring.project.springbarberreservation.requests.AddReservationRequest;
import spring.project.springbarberreservation.requests.UpdateReservationRequest;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.ReservationResponse;
import spring.project.springbarberreservation.services.ReservationService;

@RestController
@RequestMapping("/reservations")
@RequiredArgsConstructor
public class ReservationController {
private final ReservationService reservationService;

@GetMapping
public List<ReservationResponse> getAllReservation(){
	return reservationService.getAllReservations().stream().map(ReservationResponse::fromEntity).toList();
}
@GetMapping("/{id}")
public ReservationResponse getReservationById(@PathVariable Long id) {
	return ReservationResponse.fromEntity(reservationService.getReservationById(id));
}
@PostMapping("/{addReservation}")
public MessageResponse addReservatiom(@RequestBody @Valid AddReservationRequest addReservationRequest) {
	return reservationService.addReservation(addReservationRequest);
}
@PutMapping("/{id}")
public MessageResponse updateReservatiom(@PathVariable Long id, @RequestBody @Valid UpdateReservationRequest updateReservationRequest) {
	return reservationService.updateReservation(id, updateReservationRequest);
}
@DeleteMapping("/{id}")
public MessageResponse deleteReservation(@PathVariable Long id) {
	return reservationService.deleteReservation(id);
}
}
