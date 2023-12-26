package spring.project.springbarberreservation.entities;

import java.util.Date;

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

@Entity
@NoArgsConstructor
@Getter
@Setter
public class RefreshBarberToken extends BaseEntity {
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="barber_id", nullable=true)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	Barber barber;
	
	String token;
	
	@Temporal(TemporalType.TIMESTAMP)
	Date expiryDate;

	public RefreshBarberToken(Barber barber, String token, Date expiryDate) {
		super();
		this.barber = barber;
		this.token = token;
		this.expiryDate = expiryDate;
	}



}
