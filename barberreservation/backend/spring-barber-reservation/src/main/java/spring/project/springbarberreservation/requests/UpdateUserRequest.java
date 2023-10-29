package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import spring.project.springbarberreservation.entities.Users;

public record UpdateUserRequest(	
		@NotEmpty
		@Size(min=2,max=20)
		String name,
		@NotEmpty
		@Size(min=2,max=30)
		String surName,
		@NotEmpty
		@Size(min=11,max=11)
		String password,
		@NotEmpty
		@Size(min=11,max=11)
		String phoneNumber
		) {
	public Users toEntity() {
		return new Users(name,surName,phoneNumber,password,null);
	}

}
