package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;


@Data
public class UpdateReservationRequest {
	
	Long barberId;
	Long hourId;
	Long calendarId;
	Long userId;
	@NotEmpty
	@Size(min=5)
	String description;
}
