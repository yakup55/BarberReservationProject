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
public class Calendar extends BaseEntity {
private String dates;

@OneToMany(mappedBy = "calendar")
private List<Reservation>reservations;

public Calendar(String dates, List<Reservation> reservations) {
	super();
	this.dates = dates;
	this.reservations = reservations;
}

public void update(Calendar calendar) {
	this.dates=calendar.getDates();
}
}
