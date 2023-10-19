package spring.project.springbarberreservation.requests;


import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class AddHourRequest
		{
			@NotEmpty
			String hour;
			Boolean status;
			Long  barberId;
			
}
