package spring.project.springbarberreservation.entities;


import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class About extends BaseEntity {
private String name;
	private String location;
	private String phoneNumber;
	private String eposta;
	private String map;
	

	public void update(About about) {
		this.name=about.name;
		this.location=about.location;
		this.phoneNumber=about.phoneNumber;
		this.eposta=about.eposta;
		this.map=about.map;
	}


	public About(String name, String location, String phoneNumber, String eposta, String map) {
		super();
		this.name = name;
		this.location = location;
		this.phoneNumber = phoneNumber;
		this.eposta = eposta;
		this.map = map;
	}
}
