package spring.project.springbarberreservation.responses;

import java.time.LocalDateTime;

import spring.project.springbarberreservation.entities.About;

public record AboutResponse(
		Long id,
		String name,
		String location,
		String phoneNumber,
		String eposta,
		String map,
		LocalDateTime date
		) {
public static AboutResponse fromEntity(About about) {
	return new AboutResponse(about.getId(),about.getName(), about.getLocation(), about.getPhoneNumber(),about.getEposta(),about.getMap(),about.getCreatedDate());
}
}
