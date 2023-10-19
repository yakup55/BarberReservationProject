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
import spring.project.springbarberreservation.requests.UpdateReservationRequest;
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
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="calendar_id")
	@JsonIgnore
	@OnDelete(action=OnDeleteAction.CASCADE)
	private Calendar calendar;
	
	private String description;

	public Reservation(Barber barber, Hour hour,Calendar calendar, String description) {
		super();
		this.barber = barber;
		this.hour = hour;
		this.calendar=calendar;
		this.description = description;
	}
	
	public void update(UpdateReservationRequest newReservation) {
		this.description=newReservation.getDescription();
	}
}
