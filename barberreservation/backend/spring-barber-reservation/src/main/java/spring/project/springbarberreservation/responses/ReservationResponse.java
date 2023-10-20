package spring.project.springbarberreservation.responses;

import java.time.LocalDateTime;

import spring.project.springbarberreservation.entities.Reservation;

public record ReservationResponse(
		Long id,
		Long barberId,
		Long hourId,
		Long calendarId,
		Long userId,
		String description,
		LocalDateTime date
		) {
public static ReservationResponse fromEntity(Reservation reservation) {
	return new ReservationResponse(reservation.getId(),reservation.getBarber().getId(),reservation.getHour().getId(),reservation.getCalendar().getId(),reservation.getUser().getId(),reservation.getDescription(),reservation.getCreatedDate());
}
}
