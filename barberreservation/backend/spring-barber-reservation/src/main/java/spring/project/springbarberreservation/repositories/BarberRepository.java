package spring.project.springbarberreservation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.project.springbarberreservation.entities.Barber;

public interface BarberRepository extends JpaRepository<Barber, Long>{

}
