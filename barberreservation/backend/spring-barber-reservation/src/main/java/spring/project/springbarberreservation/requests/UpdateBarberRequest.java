package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.entities.Experience;

public record UpdateBarberRequest(
		@NotEmpty
		@Size(min=2,max=20)
		String name,
		@NotEmpty
		@Size(min=2,max=30)
		String surName,
		Experience experienceId
		) {
public Barber toEntity() {
	return new Barber(name, surName,null,experienceId);
}
}
