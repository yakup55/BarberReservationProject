package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.entities.Experience;

public record AddBarberRequest(
		@NotEmpty
		@Size(min=2,max=20)
		String name,
		@NotEmpty
		@Size(min=2,max=30)
		String surName,
		@NotEmpty
		@Size(min=11,max=11)
		String phoneNumber,
		Experience experience
		
		) {
public Barber toEntity() {
   
    return new Barber(name, surName, phoneNumber, experience);
}
}
