package spring.project.springbarberreservation.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.entities.Hour;
import spring.project.springbarberreservation.entities.Reservation;
import spring.project.springbarberreservation.repositories.ReservationRepository;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
@RequiredArgsConstructor
public class ReservationService {
private final ReservationRepository reservationRepository;
private final HourService hService;
private final BarberService bService;

public List<Reservation>getAllReservations(){
	return reservationRepository.findAll();
}

public Reservation getReservationById(Long id) {
	return reservationRepository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
}

public MessageResponse addReservation(Reservation reservation) {
	Barber barber=bService.getBarberById(reservation.getBarber().getId());
	Hour hour=hService.getHourById(reservation.getHour().getId());
	reservation.setBarber(barber);
	reservation.setHour(hour);
	reservation.setDescription(reservation.getDescription());
	reservationRepository.save(reservation);
	return new MessageResponse("Has been created",MessageType.SUCCESS);
}
public MessageResponse updateReservation(Long id, Reservation reservation) {
	Reservation newReservation=getReservationById(id);
	newReservation.update(reservation);
	reservationRepository.save(newReservation);
	return new MessageResponse("Has been updated",MessageType.SUCCESS);
}

public MessageResponse deleteReservation(Long id) {
	if(!reservationRepository.existsById(id)) {
		return new MessageResponse("Id Not Found", MessageType.ERROR);
	}
	reservationRepository.deleteById(id);
	return new MessageResponse("Has been deleted",MessageType.SUCCESS);
}
}
