package spring.project.springbarberreservation.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.entities.Hour;
import spring.project.springbarberreservation.repositories.HourRepository;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
@RequiredArgsConstructor
public class HourService {
	
private final HourRepository repository;
private final  BarberService barberService;


public List<Hour> getAllHours(){
	return repository.findAll();
}

public Hour getHourById(Long id) {
	return repository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
}

public MessageResponse addHour(Hour hour) {
	Barber barber=barberService.getBarberById(hour.getBarber().getId());
	Hour newHour=new Hour();
	newHour.setHour(hour.getHour());
	newHour.setStatus(hour.getStatus());
	newHour.setBarber(barber);
	repository.save(newHour);
	return new MessageResponse("Has been created",MessageType.SUCCESS);
}
@Transactional
public MessageResponse updateHour(Long id,Hour hour) {
	Hour newHour=getHourById(id);
newHour.update(hour);
	repository.save(newHour);
	return new MessageResponse("Has been updated",MessageType.SUCCESS);
}
public MessageResponse deleteHour(Long id) {
	if(!repository.existsById(id)) {
		return new MessageResponse("Id Not Found",MessageType.ERROR);
	}
	repository.deleteById(id);
	return new MessageResponse("Has been deleted",MessageType.SUCCESS);
}
}
