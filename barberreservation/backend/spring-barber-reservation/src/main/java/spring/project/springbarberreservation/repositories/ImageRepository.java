package spring.project.springbarberreservation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.project.springbarberreservation.entities.Image;

public interface ImageRepository extends JpaRepository<Image, Long>{

}
