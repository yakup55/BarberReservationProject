package spring.project.springbarberreservation.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.project.springbarberreservation.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {

	    List<Reservation> findAllByUserId(Long userId);
	    List<Reservation> findByBarberId(Long barberId);
	    
	   
	    long countByBarberIdAndHourIdAndDate(Long barberId, Long hourId, LocalDate date);
}
