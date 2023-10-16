package spring.project.springbarberreservation.responses;

import spring.project.springbarberreservation.entities.Experience;

public record ExperienceResponse(
		String experience
		) {
public static ExperienceResponse fromEntity(Experience experience) {
	return new ExperienceResponse(experience.getExprience());
}
}
