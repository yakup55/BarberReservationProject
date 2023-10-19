package spring.project.springbarberreservation.responses;

import java.time.LocalDateTime;

import spring.project.springbarberreservation.entities.Contact;

public record ContactResponse(
		Long id,
		String name,
		String phoneNumber,
		String description,
		LocalDateTime date
		) {
public static ContactResponse fromEntity(Contact contact) {
	return new ContactResponse(contact.getId(), contact.getName(), contact.getPhoneNumber(), contact.getDescription(),contact.getCreatedDate());
}
}
