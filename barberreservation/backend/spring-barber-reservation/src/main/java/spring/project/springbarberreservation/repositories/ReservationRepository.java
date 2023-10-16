package spring.project.springbarberreservation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.project.springbarberreservation.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {

}
