package spring.project.springbarberreservation.entities;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Entity
@NoArgsConstructor
@Getter
public class Users extends BaseEntity {
	private String name;
	private String surName;
	private String phoneNumber;
	public Users(String name, String surName, String phoneNumber) {
		super();
		this.name = name;
		this.surName = surName;
		this.phoneNumber = phoneNumber;
	}
	
	public void update(Users user) {
		this.name=user.name;
		this.surName=user.surName;
	}
}
