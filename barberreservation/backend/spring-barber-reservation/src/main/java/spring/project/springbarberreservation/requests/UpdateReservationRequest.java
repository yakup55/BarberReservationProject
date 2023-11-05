package spring.project.springbarberreservation.requests;

import java.time.LocalDate;
import java.util.Date;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;


@Data
public class UpdateReservationRequest {
	
	Long barberId;
	Long hourId;
	Long userId;
	@NotEmpty
	@Size(min=5)
	String description;
	 Boolean status;
	 LocalDate date;
}
