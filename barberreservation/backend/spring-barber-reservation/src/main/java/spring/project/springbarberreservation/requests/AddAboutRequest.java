package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import spring.project.springbarberreservation.entities.About;

public record AddAboutRequest(
		@NotEmpty
		@Size(min=5,max=100)
		String name,
		@NotEmpty
		@Size(min=5,max=1000)
		String image,
		@NotEmpty
		@Size(min=5,max=300)
		String description
		) {
public About toEntity() {
	return new About(name,image,description);
}
}
