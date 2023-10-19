package spring.project.springbarberreservation.entities;



import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Contact extends BaseEntity {
	private String name;
	private String phoneNumber;
	private String description;
	public Contact(String name, String phoneNumber, String description) {
		super();
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.description = description;
	}
	
	public void update(Contact contact) {
		this.name=contact.getName();
		this.phoneNumber=contact.getPhoneNumber();
		this.description=contact.getDescription();
	}
}
