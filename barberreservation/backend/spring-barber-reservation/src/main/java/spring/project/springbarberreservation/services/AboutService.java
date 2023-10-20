package spring.project.springbarberreservation.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.About;
import spring.project.springbarberreservation.repositories.AboutRepository;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
@RequiredArgsConstructor
public class AboutService {
private final AboutRepository repository;
	
	public List<About> getAllAbout(){
		return repository.findAll();
	}
	
	public About getAboutById(Long id) {
		return repository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
	}
	
	public MessageResponse addAbout(About newAbout) {
		
		repository.save(newAbout);
		return new MessageResponse("Has been created", MessageType.SUCCESS);
	}
	public MessageResponse UpdateAbout(Long id,About about) {
		About newAbout=getAboutById(id);
		if(!repository.existsById(id)) {
			return new MessageResponse("About cant be found", MessageType.ERROR);
			
		}
		newAbout.update(about);
		repository.save(newAbout);
		return new MessageResponse("Has been updated", MessageType.SUCCESS);
	}
	
	public MessageResponse deleteAbout(Long id) {
		if(!repository.existsById(id)) {
			return new MessageResponse("About cant be found", MessageType.ERROR);
		}
		repository.deleteById(id);
		return new MessageResponse("Has been deleted", MessageType.SUCCESS);
	}
}
