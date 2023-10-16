package spring.project.springbarberreservation.entities;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
public class About extends BaseEntity {

	private String name;
	private String image;
	private String description;
	public About(String name, String image, String description) {
		super();
		this.name = name;
		this.image = image;
		this.description = description;
	}
	public void update(About about) {
		this.name=about.name;
		this.image=about.image;
		this.description=about.description;
	}
}
