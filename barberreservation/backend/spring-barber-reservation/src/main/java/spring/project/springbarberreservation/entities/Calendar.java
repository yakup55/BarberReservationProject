package spring.project.springbarberreservation.entities;



import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Calendar extends BaseEntity {
private String dates;


public Calendar(String dates) {
	super();
	this.dates = dates;
}

public void update(Calendar calendar) {
	this.dates=calendar.getDates();
}
}
