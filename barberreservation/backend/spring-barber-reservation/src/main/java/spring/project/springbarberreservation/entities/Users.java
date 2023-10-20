package spring.project.springbarberreservation.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Entity
@NoArgsConstructor
@Getter
public class Users extends BaseEntity {
	private String name;
	private String surName;
	private String phoneNumber;
	@OneToMany(mappedBy = "user")
	private List<Reservation>reservations;
	

	
	public void update(Users user) {
		this.name=user.name;
		this.surName=user.surName;
	}



	public Users(String name, String surName, String phoneNumber, List<Reservation> reservations) {
		super();
		this.name = name;
		this.surName = surName;
		this.phoneNumber = phoneNumber;
		this.reservations = reservations;
	}
}
