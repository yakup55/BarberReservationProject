package spring.project.springbarberreservation.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.entities.Hour;
import spring.project.springbarberreservation.entities.Reservation;
import spring.project.springbarberreservation.entities.Users;
import spring.project.springbarberreservation.repositories.ReservationRepository;
import spring.project.springbarberreservation.requests.AddReservationRequest;
import spring.project.springbarberreservation.requests.UpdateReservationRequest;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
@RequiredArgsConstructor
public class ReservationService {
private final ReservationRepository reservationRepository;
private final HourService hService;
private final BarberService bService;
private final UserService uService;

public List<Reservation>getAllReservations(){
	return reservationRepository.findAll();
}

public Reservation getReservationById(Long id) {
	return reservationRepository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
}
public List<Reservation> getUserId(Long id ) {
    return reservationRepository.findAllByUserId(id);
}
public List<Reservation> getBarberId(Long barberId) {
	return reservationRepository.findByBarberId(barberId);
}
public boolean doesReservationExist(Long barberId, Long hourId, LocalDate date) {
    long count = reservationRepository.countByBarberIdAndHourIdAndDate(barberId, hourId, date);
    return count > 0;
}

public MessageResponse addReservation(AddReservationRequest reservation) {
	Barber barber=bService.getBarberById(reservation.getBarberId());
	Hour hour=hService.getHourById(reservation.getHourId());
	Users user=uService.getUserById(reservation.getUserId());
	Reservation newReservation= new Reservation();
	newReservation.setBarber(barber);
	newReservation.setHour(hour);
	newReservation.setUser(user);
	newReservation.setDescription(reservation.getDescription());
	newReservation.setStatus(reservation.getStatus());
	newReservation.setDate(reservation.getDate());
	reservationRepository.save(newReservation);
	return new MessageResponse("Has been created",MessageType.SUCCESS);
}
public MessageResponse statusActive(Long id) {
	Reservation newReservation=getReservationById(id);
	newReservation.setStatus(true);
	reservationRepository.save(newReservation);
	return new MessageResponse("Has been status active",MessageType.SUCCESS);
}

public MessageResponse statusPassive(Long id) {
	Reservation newReservation=getReservationById(id);
	newReservation.setStatus(false);
	reservationRepository.save(newReservation);
	return new MessageResponse("Has been status pasive",MessageType.SUCCESS);
}

@Transactional
public MessageResponse updateReservation(Long id, 	UpdateReservationRequest reservation) {
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
