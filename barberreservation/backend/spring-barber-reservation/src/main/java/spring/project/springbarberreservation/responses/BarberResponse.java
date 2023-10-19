package spring.project.springbarberreservation.responses;

import java.time.LocalDateTime;

import spring.project.springbarberreservation.entities.Barber;

public record BarberResponse(
		Long id,
		String name,
		String surName,
		String phoneNumber,
		String image,
		String experience,
		LocalDateTime date
		) {
public static BarberResponse fromEntity(Barber barber) {
	return new BarberResponse(barber.getId(),barber.getName(),barber.getSurName(),barber.getPhoneNumber(),barber.getImage(),barber.getExpriences(),barber.getCreatedDate());
}
}
