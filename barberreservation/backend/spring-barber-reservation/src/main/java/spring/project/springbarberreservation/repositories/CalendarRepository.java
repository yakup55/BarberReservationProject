package spring.project.springbarberreservation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.project.springbarberreservation.entities.Calendar;

public interface CalendarRepository extends JpaRepository<Calendar, Long> {

}
