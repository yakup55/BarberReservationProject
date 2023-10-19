package spring.project.springbarberreservation.entities;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Barber extends BaseEntity {
private String name;
private String surName;
private String phoneNumber;
private String image;
private String expriences;

@OneToMany(mappedBy = "barber")
private List<Reservation>reservations;

public void update(Barber newBarber) {
	this.name=newBarber.getName();
	this.surName=newBarber.getSurName();
	this.expriences=newBarber.getExpriences();
	this.image=newBarber.getImage();
}

public Barber(String name, String surName, String phoneNumber, String image, String expriences,
		List<Reservation> reservations) {
	super();
	this.name = name;
	this.surName = surName;
	this.phoneNumber = phoneNumber;
	this.image = image;
	this.expriences = expriences;
	this.reservations = reservations;
}





}
