package spring.project.springbarberreservation.entities;

import java.time.LocalDate;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
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
	@JoinColumn(name="user_id")
	@JsonIgnore
	@OnDelete(action=OnDeleteAction.CASCADE)
	private Users user;
	
	private String description;
	private Boolean status;
	
	@Temporal(TemporalType.DATE)
	private LocalDate date;
	public Reservation(Barber barber, Hour hour,Users user, String description,Boolean status,LocalDate date) {
		super();
		this.barber = barber;
		this.hour = hour;
		this.user=user;
		this.description = description;
		this.status=status;
		this.date=date;
	}
	
	public void update(UpdateReservationRequest newReservation) {
		this.description=newReservation.getDescription();
	}
	
}
