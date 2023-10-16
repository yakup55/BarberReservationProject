package spring.project.springbarberreservation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.project.springbarberreservation.entities.Hour;

public interface HourRepository extends JpaRepository<Hour, Long> {

}
