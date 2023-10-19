package spring.project.springbarberreservation.responses;

import java.time.LocalDateTime;

import spring.project.springbarberreservation.entities.Quentions;

public record QuentionsResponse(
		Long id,
		String name,
		String description,
		LocalDateTime date
		) {
public static QuentionsResponse fromEntity(Quentions quentions) {
	return new QuentionsResponse(quentions.getId(), quentions.getName(), quentions.getDescription(), quentions.getCreatedDate());
}
}
