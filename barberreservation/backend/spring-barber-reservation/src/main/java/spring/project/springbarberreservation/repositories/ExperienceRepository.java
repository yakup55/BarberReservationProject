package spring.project.springbarberreservation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.project.springbarberreservation.entities.Experience;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {

}
