package spring.project.springbarberreservation.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Users;
import spring.project.springbarberreservation.repositories.UserRepository;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
@RequiredArgsConstructor
public class UserService {
private final UserRepository repository;

public List<Users>getAllUser(){
	return repository.findAll();
}
public Users getUserById(Long id) {
	return repository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
}

public MessageResponse addUser(Users user) {
	repository.save(user);
	return new MessageResponse("Has been created",MessageType.SUCCESS);
}
public MessageResponse updateUser(Long id,Users newUser) {
	Users user=getUserById(id);
	if(!repository.existsById(id)) {
		return new MessageResponse("User cant be found", MessageType.ERROR);
	}
	user.update(newUser);
	repository.save(user);
	return new MessageResponse("Has been created",MessageType.SUCCESS);
}

public MessageResponse deleteUser(Long id) {
	if(!repository.existsById(id)) {
		return new MessageResponse("Barber cant be found", MessageType.ERROR);
	}
	repository.deleteById(id);
	return new MessageResponse("Has been deleted", MessageType.SUCCESS);
}

}
