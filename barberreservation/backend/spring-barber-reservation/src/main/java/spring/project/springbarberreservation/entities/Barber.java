package spring.project.springbarberreservation.entities;

import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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

@ManyToOne(fetch=FetchType.LAZY)
@JoinColumn(name="exprience_id")
@JsonIgnore
@OnDelete(action=OnDeleteAction.CASCADE)
private Experience expriences;

@OneToMany(mappedBy = "barber")
private List<Reservation>reservations;

public void update(Barber newBarber) {
	this.name=newBarber.getName();
	this.surName=newBarber.getSurName();
}

public Barber(String name, String surName, String phoneNumber, Experience expriences) {
	super();
	this.name = name;
	this.surName = surName;
	this.phoneNumber = phoneNumber;
	this.expriences = expriences;
}



}
