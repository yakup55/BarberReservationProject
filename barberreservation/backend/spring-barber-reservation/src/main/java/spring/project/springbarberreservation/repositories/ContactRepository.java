package spring.project.springbarberreservation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.project.springbarberreservation.entities.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}
