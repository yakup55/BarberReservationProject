package spring.project.springbarberreservation.entities;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@NoArgsConstructor
@Getter
@Setter
public class Reservation extends BaseEntity{

	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="barber_id")
	@JsonIgnore
	@OnDelete(action=OnDeleteAction.CASCADE)
	private Barber barber;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="hour_id")
	@JsonIgnore
	@OnDelete(action=OnDeleteAction.CASCADE)
	private Hour hour;
	
	private String description;

	public Reservation(Barber barber, Hour hour, String description) {
		super();
		this.barber = barber;
		this.hour = hour;
		this.description = description;
	}
	
	public void update(Reservation newReservation) {
		this.barber=newReservation.barber;
		this.hour=newReservation.hour;
		this.description=newReservation.description;
	}
}
