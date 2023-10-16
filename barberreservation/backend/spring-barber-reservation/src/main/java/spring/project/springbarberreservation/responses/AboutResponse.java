package spring.project.springbarberreservation.responses;

import spring.project.springbarberreservation.entities.About;

public record AboutResponse(
		Long id,
		String name,
		String image,
		String description
		) {
public static AboutResponse fromEntity(About about) {
	return new AboutResponse(about.getId(),about.getName(), about.getImage(), about.getDescription());
}
}
