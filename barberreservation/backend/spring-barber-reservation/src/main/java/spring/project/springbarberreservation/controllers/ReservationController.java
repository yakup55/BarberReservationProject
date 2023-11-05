package spring.project.springbarberreservation.controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
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
public ReservationResponse getReservationById(@PathVariable Long id ) {
	return ReservationResponse.fromEntity(reservationService.getReservationById(id));
}

@GetMapping("/active/{id}")
public MessageResponse getStatusActive(@PathVariable Long id) {
	return reservationService.statusActive(id);
}

@GetMapping("/pasive/{id}")
public MessageResponse getStatusPasive(@PathVariable Long id) {
	return reservationService.statusPassive(id);
}

@GetMapping("/user/{userId}")
public List<ReservationResponse> getUserId(@PathVariable Long userId) {
    return reservationService.getUserId(userId).stream().map(ReservationResponse::fromEntity).toList();
}

@GetMapping("/barber/{barberId}")
public List<ReservationResponse> getBarberId(@PathVariable Long barberId) {
	return reservationService.getBarberId(barberId).stream().map(ReservationResponse::fromEntity).toList();
}


@GetMapping("/check/{barberId}/{hourId}/{date}")
public ResponseEntity<Boolean> checkReservation(
		@PathVariable Long barberId,
		@PathVariable Long hourId,
		@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {

    boolean reservationExists = reservationService.doesReservationExist(barberId, hourId, date);
    if (!reservationExists) {
        return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(reservationExists);
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
