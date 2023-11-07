package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class AddBarberRequest  {
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
	@Size(max=30)
	String experience;
	Long imageId;
	@Size(min=2,max=20)
	String password;
	
	

}
