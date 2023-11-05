package spring.project.springbarberreservation.entities;



import java.util.List;


import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import spring.project.springbarberreservation.requests.UpdateHourRequest;

@Getter
@NoArgsConstructor
@Entity
@Setter
public class Hour extends BaseEntity {
private String hour;


@OneToMany(mappedBy = "hour")
private List<Reservation>reservations;


public void update(UpdateHourRequest hour) {
	this.hour=hour.getHour(); 
}


public Hour(String hour, List<Reservation> reservations) {
	super();
	this.hour = hour;
	this.reservations = reservations;
}







}
