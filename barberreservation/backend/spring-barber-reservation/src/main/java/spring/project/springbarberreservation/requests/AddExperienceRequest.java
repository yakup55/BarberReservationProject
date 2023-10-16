package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotBlank;
import spring.project.springbarberreservation.entities.Experience;

public record AddExperienceRequest(
		@NotBlank
		String experience
		) {
public Experience toEntity() {
	return new Experience(experience);
}
}