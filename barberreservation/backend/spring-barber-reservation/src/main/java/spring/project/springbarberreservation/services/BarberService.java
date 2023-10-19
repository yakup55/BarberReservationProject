package spring.project.springbarberreservation.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.repositories.BarberRepository;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
@RequiredArgsConstructor
public class BarberService {

	private final BarberRepository repository;
	
	
	public List<Barber> getAllBarber(){
		return repository.findAll();
	}
	
	public Barber getBarberById(Long id) {
		return repository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
		
	}
	public MessageResponse addBarber(Barber barber) {
	        repository.save(barber);
	        return new MessageResponse("Başarıyla oluşturuldu", MessageType.SUCCESS);
	  
	}

	@Transactional
	public MessageResponse updateBarber(Long id,Barber barber) {
		Barber existingBarber=getBarberById(id);
existingBarber.update(barber);
repository.save(existingBarber);
		return new MessageResponse("Has been updated", MessageType.SUCCESS);
	}
	
	public MessageResponse deleteBarber(Long id) {
		if(!repository.existsById(id)) {
			return new MessageResponse("Barber cant be found", MessageType.ERROR);
		}
		repository.deleteById(id);
		return new MessageResponse("Has been deleted", MessageType.SUCCESS);
	}

	
}
