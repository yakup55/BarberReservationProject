package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import spring.project.springbarberreservation.entities.Quentions;

public record UpdateQuentionsRequest(
		@NotEmpty
		@Size(min=2,max=100)
		String name,
		@NotEmpty
		@Size(min=2,max=200)
		String description) {
public Quentions toEntity() {
	return new Quentions(name, description);
}

}
