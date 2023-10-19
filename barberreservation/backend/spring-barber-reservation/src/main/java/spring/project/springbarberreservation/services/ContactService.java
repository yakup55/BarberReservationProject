package spring.project.springbarberreservation.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Contact;
import spring.project.springbarberreservation.repositories.ContactRepository;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
@RequiredArgsConstructor
public class ContactService {
	private final ContactRepository repository;

	public List<Contact> getContactsList(){
		return repository.findAll();
	}
	public Contact getContactById(Long id) {
		return repository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
				}

	public MessageResponse addContact(Contact contact) {
	repository.save(contact);
	return new MessageResponse("Has been created",MessageType.SUCCESS);
		
	}
	@Transactional
	public MessageResponse updateContact(Long id,Contact contact) {
		Contact newContact=getContactById(id);
		if(!repository.existsById(id)) {
			return new MessageResponse("Quention cant be found", MessageType.ERROR);
		}
		newContact.update(contact);
		repository.save(newContact);
		
		return new MessageResponse("Has been created",MessageType.SUCCESS);
	}

	public MessageResponse deleteContact(Long id) {
		if(!repository.existsById(id)) {
			return new MessageResponse("Contact cant be found", MessageType.ERROR);
		}
		repository.deleteById(id);
		return new MessageResponse("Has been deleted", MessageType.SUCCESS);
	}
	}


