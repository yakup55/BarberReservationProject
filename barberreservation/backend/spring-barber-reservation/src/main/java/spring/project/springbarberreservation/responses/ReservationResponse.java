package spring.project.springbarberreservation.responses;

import spring.project.springbarberreservation.entities.Reservation;

public record ReservationResponse(
		Long id,
		Long barberId,
		Long hourId,
		String description
		) {
public static ReservationResponse fromEntity(Reservation reservation) {
	return new ReservationResponse(reservation.getId(),reservation.getBarber().getId(),reservation.getHour().getId(),reservation.getDescription());
}
}
