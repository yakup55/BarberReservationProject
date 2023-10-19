package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import spring.project.springbarberreservation.entities.Barber;



public record UpdateBarberRequest (
		@NotEmpty
		@Size(min=2,max=20)
		String name,
		@NotEmpty
		@Size(min=2,max=30)
		String surName,
		@NotEmpty
		@Size(min=11,max=11)
		String phoneNumber,
		@NotEmpty
		@Size(min=2,max=30)
		String experience,
		@Size(min=2,max=500)
		String image
		)  {
	public Barber toEntity() {
		return new Barber(name, surName, phoneNumber, image, experience, null);
	}

}
