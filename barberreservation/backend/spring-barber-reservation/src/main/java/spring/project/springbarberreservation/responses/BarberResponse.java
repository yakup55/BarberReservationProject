package spring.project.springbarberreservation.responses;

import java.time.LocalDateTime;

import spring.project.springbarberreservation.entities.Barber;

public record BarberResponse(
		Long id,
		String userName,
		String surName,
		String phoneNumber,
		String experience,
		String password,
		String imageUrl,
		LocalDateTime date
		) {
public static BarberResponse fromEntity(Barber barber) {
	return new BarberResponse(barber.getId(),barber.getUserName(),barber.getSurName(),barber.getPhoneNumber(),barber.getExpriences(),barber.getPassword(),barber.getImage().getImageUrl(),barber.getCreatedDate());
}
}
