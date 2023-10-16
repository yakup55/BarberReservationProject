package spring.project.springbarberreservation.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Experience extends BaseEntity {
private String exprience;

@OneToMany(mappedBy = "expriences")
private List<Barber>barbers;

public Experience(String exprience) {
	super();
	this.exprience = exprience;
}

public void update(Experience newExperience) {
	this.exprience=newExperience.exprience;
}
}
