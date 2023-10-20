package spring.project.springbarberreservation.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.entities.Calendar;
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
private final CalendarService cService;
private final UserService uService;

public List<Reservation>getAllReservations(){
	return reservationRepository.findAll();
}

public Reservation getReservationById(Long id) {
	return reservationRepository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
}

public MessageResponse addReservation(AddReservationRequest reservation) {
	Barber barber=bService.getBarberById(reservation.getBarberId());
	Hour hour=hService.getHourById(reservation.getHourId());
	Calendar calendar=cService.getCalendarById(reservation.getCalendarId());
	Users user=uService.getUserById(reservation.getUserId());
	Reservation newReservation= new Reservation();
	newReservation.setBarber(barber);
	newReservation.setHour(hour);
	newReservation.setCalendar(calendar);
	newReservation.setUser(user);
	newReservation.setDescription(reservation.getDescription());
	reservationRepository.save(newReservation);
	return new MessageResponse("Has been created",MessageType.SUCCESS);
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
