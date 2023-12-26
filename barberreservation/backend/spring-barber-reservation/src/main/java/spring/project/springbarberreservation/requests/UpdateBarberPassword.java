package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class UpdateBarberPassword {
	    Long barberId;
  	    @NotEmpty
		String oldPassword;
		@NotEmpty
		String newPassword;
}
