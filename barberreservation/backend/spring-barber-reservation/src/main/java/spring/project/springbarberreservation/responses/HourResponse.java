package spring.project.springbarberreservation.responses;

import java.time.LocalDateTime;

import spring.project.springbarberreservation.entities.Hour;

public record HourResponse(
        Long id,
        String hour,
		Boolean status,
		Long barberId,
		LocalDateTime date
		) {
public static HourResponse fromEntity(Hour hour) {
	return  new HourResponse(hour.getId(),hour.getHour(), hour.getStatus(),hour.getBarber().getId(),hour.getCreatedDate());
}
}
