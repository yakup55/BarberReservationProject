	package spring.project.springbarberreservation.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.requests.AddUserRequest;
import spring.project.springbarberreservation.requests.UpdateUserRequest;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.UserResponse;
import spring.project.springbarberreservation.services.UserService;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
private final UserService service;

@GetMapping
public List<UserResponse> getAllUser(){
	return service.getAllUser().stream().map(UserResponse::fromEntity).toList();
}
@GetMapping("/{id}")
public UserResponse getUserById(@PathVariable Long id) {
	return UserResponse.fromEntity(service.getUserById(id));
}
@PostMapping("/{addUser}")
public MessageResponse addUser(@RequestBody @Valid AddUserRequest addUserRequest ) {
	return service.addUser(addUserRequest.toEntity());
}

@PutMapping("/{id}")
public MessageResponse updateUser(@PathVariable Long id,@RequestBody @Valid UpdateUserRequest updateUserRequest) {
	return service.updateUser(id, updateUserRequest);
}
@DeleteMapping("/{id}")
public MessageResponse deleteUser(@PathVariable Long id) {
	return service.deleteUser(id);
}
}
