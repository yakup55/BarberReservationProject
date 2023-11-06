package spring.project.springbarberreservation.entities;


import java.util.List;



import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import spring.project.springbarberreservation.requests.UpdateImageRequest;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Image extends BaseEntity {
private String imageUrl;

@OneToMany(mappedBy = "image")
private List<Barber>barber;
public Image(String imageUrl) {
	super();
	this.imageUrl = imageUrl;
}
public void update(UpdateImageRequest update) {
	this.imageUrl=update.getImageUrl();
	
}
}
