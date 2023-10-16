package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import spring.project.springbarberreservation.entities.About;

public record UpdateAboutRequest(
		@NotBlank
		@Size(min=5,max=100)
		String name,
		@NotBlank
		@Size(min=5,max=100)
		String image,
		@NotBlank
		@Size(min=5,max=300)
		String description
		) {
public About toEntity() {
	return new About(name,image,description);
}
}