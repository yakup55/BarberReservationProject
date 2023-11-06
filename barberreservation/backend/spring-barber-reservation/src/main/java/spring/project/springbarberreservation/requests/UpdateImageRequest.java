package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import spring.project.springbarberreservation.entities.Barber;

@Data
public class UpdateImageRequest {
	@NotEmpty
	String imageUrl;
	Barber barber;
}
