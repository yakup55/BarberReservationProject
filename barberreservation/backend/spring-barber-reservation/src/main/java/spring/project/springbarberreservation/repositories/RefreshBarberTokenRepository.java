package spring.project.springbarberreservation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import spring.project.springbarberreservation.entities.RefreshBarberToken;

public interface RefreshBarberTokenRepository extends JpaRepository<RefreshBarberToken, Long> {
	@Query("SELECT r FROM RefreshBarberToken r WHERE r.barber.id = :barberId")
	RefreshBarberToken findByBarberId(Long barberId);
}
