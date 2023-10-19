package spring.project.springbarberreservation.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Quentions;
import spring.project.springbarberreservation.repositories.QuentionsRepository;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
@RequiredArgsConstructor
public class QuentionsService {
private final QuentionsRepository quentionsRepository;

public List<Quentions> getQuentionsList(){
	return quentionsRepository.findAll();
}
public Quentions getQuentionById(Long id) {
	return quentionsRepository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
			}

public MessageResponse addQuention(Quentions quentions) {
quentionsRepository.save(quentions);
return new MessageResponse("Has been created",MessageType.SUCCESS);
	
}
@Transactional
public MessageResponse updateQuentions(Long id,Quentions quentions) {
	Quentions newQuention=getQuentionById(id);
	if(!quentionsRepository.existsById(id)) {
		return new MessageResponse("Quention cant be found", MessageType.ERROR);
	}
	newQuention.update(quentions);
	quentionsRepository.save(newQuention);
	
	return new MessageResponse("Has been created",MessageType.SUCCESS);
}

public MessageResponse deleteQuention(Long id) {
	if(!quentionsRepository.existsById(id)) {
		return new MessageResponse("Quention cant be found", MessageType.ERROR);
	}
	quentionsRepository.deleteById(id);
	return new MessageResponse("Has been deleted", MessageType.SUCCESS);
}
}
