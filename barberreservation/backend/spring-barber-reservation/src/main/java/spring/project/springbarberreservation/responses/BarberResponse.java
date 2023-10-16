package spring.project.springbarberreservation.responses;

import spring.project.springbarberreservation.entities.Barber;

public record BarberResponse(
		Long id,
		String name,
		String surName,
		String phoneNumber,
		Long experienceId
		) {
public static BarberResponse fromEntity(Barber barber) {
	return new BarberResponse(barber.getId(),barber.getName(),barber.getSurName(),barber.getPhoneNumber(),barber.getExpriences().getId());
}
}
