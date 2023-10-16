package spring.project.springbarberreservation.entities;



import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@Entity
@Setter
public class Hour extends BaseEntity {
private String hour;
private Boolean status;

@ManyToOne(fetch=FetchType.LAZY)
@JoinColumn(name="barber_id",nullable=false)
@OnDelete(action=OnDeleteAction.CASCADE)
private Barber barber;

@OneToMany(mappedBy = "hour")
private List<Reservation>reservations;


public void update(Hour hour) {
	this.hour=hour.getHour();
	this.status=hour.getStatus();
	this.barber=hour.barber;
}



public Hour(String hour, Boolean status, Barber barber) {
	super();
	this.hour = hour;
	this.status = status;
	this.barber = barber;
}



}
