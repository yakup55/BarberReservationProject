package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;
import spring.project.springbarberreservation.entities.Barber;

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
	
	String image;
	@Size(min=2,max=20)
	String password;
	public Barber toEntity() {
		return new Barber(userName, surName, phoneNumber, image, experience, null,password);
	}

}
