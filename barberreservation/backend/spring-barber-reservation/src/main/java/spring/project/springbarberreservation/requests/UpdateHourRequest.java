package spring.project.springbarberreservation.requests;


import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class UpdateHourRequest{
	@NotEmpty
	String hour;
}