package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

import lombok.Getter;
import spring.project.springbarberreservation.entities.Users;

@Getter
public class AddUserRequest
		
		{
	@NotEmpty
	@Size(min=2,max=20)
	String userName;
	@NotEmpty
	@Size(min=2,max=30)
	String surName;
	@NotEmpty
	@Size(min=11,max=11)
	String phoneNumber;
	@NotEmpty
	@Size(min=3,max=11)
	String password;
	public Users toEntity() {
		return new Users(userName,surName,phoneNumber,password,null);
	}

}
