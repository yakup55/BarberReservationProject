package spring.project.springbarberreservation.entities;


import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Quentions extends BaseEntity {
private String name;
private String description;
public Quentions(String name, String description) {
	super();
	this.name = name;
	this.description = description;
}

public void update(Quentions quentions) {
	this.name=quentions.name;
	this.description=quentions.description;
}
}
