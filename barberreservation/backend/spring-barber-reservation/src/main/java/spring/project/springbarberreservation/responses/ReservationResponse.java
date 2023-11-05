package spring.project.springbarberreservation.responses;

import java.time.LocalDate;
import java.time.LocalDateTime;

import spring.project.springbarberreservation.entities.Reservation;

public record ReservationResponse(
		Long id,
		String barbarName,
		String barberSurName,
		String hour,
		String userName,
		String userSurName,
		String description,
		LocalDateTime date,
		Boolean status,
		LocalDate reservationDate
		) {
public static ReservationResponse fromEntity(Reservation reservation) {
	return new ReservationResponse(reservation.getId(),reservation.getBarber().getUserName(),reservation.getBarber().getSurName(),reservation.getHour().getHour(),reservation.getUser().getUserName(),reservation.getUser().getSurName(),reservation.getDescription(),reservation.getCreatedDate(),reservation.getStatus(),reservation.getDate());
}

}
