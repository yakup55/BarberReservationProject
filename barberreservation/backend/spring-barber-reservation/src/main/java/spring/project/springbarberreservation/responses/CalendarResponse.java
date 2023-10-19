package spring.project.springbarberreservation.responses;

import java.time.LocalDateTime;

import spring.project.springbarberreservation.entities.Calendar;

public record CalendarResponse(
		Long id,
		String dates,
		LocalDateTime date
		) {
	public static CalendarResponse fromEntity(Calendar calendar) {
		return new CalendarResponse(calendar.getId(),calendar.getDates(),calendar.getCreatedDate());
	}
}
