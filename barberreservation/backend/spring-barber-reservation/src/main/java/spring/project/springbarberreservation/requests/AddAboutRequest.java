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
		String location,
		@NotEmpty
		@Size(min=11,max=11)
		String phoneNumber,
		@NotEmpty
		@Size(min=5,max=100)
		String eposta,
		@NotEmpty
		@Size(min=5,max=3000)
		String map
		) {
public About toEntity() {
	return new About(name,location,phoneNumber,eposta,map);
}
}
