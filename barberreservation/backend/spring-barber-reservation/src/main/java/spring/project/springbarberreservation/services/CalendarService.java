package spring.project.springbarberreservation.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Calendar;
import spring.project.springbarberreservation.repositories.CalendarRepository;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
@RequiredArgsConstructor
public class CalendarService {
	private final CalendarRepository repository;

	public List<Calendar> getCalendarsList(){
		return repository.findAll();
	}
	public Calendar getCalendarById(Long id) {
		return repository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
				}

	public MessageResponse addCalendar(Calendar calendar) {
	repository.save(calendar);
	return new MessageResponse("Has been created",MessageType.SUCCESS);
		
	}
	@Transactional
	public MessageResponse updateCalendar(Long id,Calendar calendar) {
		Calendar newCalendar=getCalendarById(id);
		if(!repository.existsById(id)) {
			return new MessageResponse("Quention cant be found", MessageType.ERROR);
		}
		newCalendar.update(calendar);
		repository.save(newCalendar);
		
		return new MessageResponse("Has been created",MessageType.SUCCESS);
	}

	public MessageResponse deleteCalendar(Long id) {
		if(!repository.existsById(id)) {
			return new MessageResponse("Calendar cant be found", MessageType.ERROR);
		}
		repository.deleteById(id);
		return new MessageResponse("Has been deleted", MessageType.SUCCESS);
	}
	}
