package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.entities.Hour;
import spring.project.springbarberreservation.entities.Reservation;

public record AddReservationRequest(
		Barber barber,
		Hour hour,
		@NotEmpty
		@Size(min=5)
		String description
		) {
public Reservation toEntity() {
	return new Reservation(barber,hour,description);
}
}
