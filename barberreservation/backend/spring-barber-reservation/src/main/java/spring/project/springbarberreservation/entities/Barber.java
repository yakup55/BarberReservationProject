package spring.project.springbarberreservation.entities;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import spring.project.springbarberreservation.requests.UpdateBarberRequest;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Barber extends BaseEntity {
	
	@Autowired
	private SessionFactory sessionFactory;
private String userName;
private String surName;
private String phoneNumber;
private String expriences;
private String password;


@ManyToOne(fetch=FetchType.LAZY)
@JoinColumn(name="image_id")
@JsonIgnore
@OnDelete(action=OnDeleteAction.CASCADE)
private Image image;

@OneToMany(mappedBy = "barber")

private List<Reservation>reservations;



public void update(UpdateBarberRequest newBarber) {
	this.surName=newBarber.getSurName();
	this.expriences=newBarber.getExperience();
}

public Barber(String name, String surName, String phoneNumber, String expriences,
		List<Reservation> reservations,Image image,String password) {
	super();
	this.userName = name;
	this.surName = surName;
	this.phoneNumber = phoneNumber;
	this.expriences = expriences;
	this.reservations = reservations;
	this.image=image;
	this.password=password;
}





}
