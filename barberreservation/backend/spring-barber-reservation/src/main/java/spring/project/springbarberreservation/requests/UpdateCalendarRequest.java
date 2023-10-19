package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import spring.project.springbarberreservation.entities.Calendar;

public record UpdateCalendarRequest  (
		@NotEmpty
		@Size(min=4,max=9)
	String dates
		) {
	public Calendar toEntity() {
		return new Calendar(dates, null);
	}

}