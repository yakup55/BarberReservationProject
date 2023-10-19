package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import spring.project.springbarberreservation.entities.Contact;

public record UpdateContactRequest(
		@NotEmpty
		@Size(min=2,max=20)
		 String name,
		 @NotEmpty
			@Size(min=11,max=11)
		 String phoneNumber,
		 @NotEmpty
			@Size(min=2,max=200)
		 String description
		) {
	public Contact toEntity() {
		return new Contact(name, phoneNumber, description);
	}
}
