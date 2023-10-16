package spring.project.springbarberreservation.responses;

import spring.project.springbarberreservation.entities.Users;

public record UserResponse(
		String name,
		String surName,
		String phoneNumber
		)  {
public static UserResponse fromEntity(Users user) {
	return new UserResponse(user.getName(), user.getSurName(), user.getPhoneNumber());
}
}
