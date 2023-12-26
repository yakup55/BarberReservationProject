package spring.project.springbarberreservation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import spring.project.springbarberreservation.entities.RefreshToken;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
	@Query("SELECT r FROM RefreshToken r WHERE r.users.id = :userId")
RefreshToken findByUserId(Long userId);
	
	/*
	@Query("SELECT r FROM RefreshToken r WHERE r.barber.id = :barberId")
RefreshToken findByBarberId(Long barberId);
*/
}
