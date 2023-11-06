package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class AddImageRequest {
	@NotEmpty
	String imageUrl;

	
}
