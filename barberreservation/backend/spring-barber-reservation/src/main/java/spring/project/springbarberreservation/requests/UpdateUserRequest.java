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
		String surName
		) {
	public Users toEntity() {
		return new Users(name,surName,null,null);
	}

}
