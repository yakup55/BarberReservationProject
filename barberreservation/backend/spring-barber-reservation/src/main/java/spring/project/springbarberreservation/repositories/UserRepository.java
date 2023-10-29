package spring.project.springbarberreservation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.project.springbarberreservation.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long>{

	Users findByUserName(String userName);
	Users findByPhoneNumber(String phoneNumber);
}
