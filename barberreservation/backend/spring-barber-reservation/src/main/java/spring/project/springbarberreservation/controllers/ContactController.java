package spring.project.springbarberreservation.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.requests.AddContactRequest;
import spring.project.springbarberreservation.requests.UpdateContactRequest;
import spring.project.springbarberreservation.responses.ContactResponse;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.services.ContactService;

@RequestMapping("/contacts")
@RestController
@RequiredArgsConstructor
public class ContactController {
	private final ContactService service;
	
	@GetMapping
	public List<ContactResponse> getContactsList(){
		return service.getContactsList().stream().map(ContactResponse::fromEntity).toList();
	}
	@GetMapping("/{id}")
	public ContactResponse getContactById(@PathVariable Long id) {
		return ContactResponse.fromEntity(service.getContactById(id));
	}
	@PostMapping("/{addContact}")
	public MessageResponse addContact(@RequestBody @Valid  AddContactRequest addContactRequest) {
		return service.addContact(addContactRequest.toEntity()); 
	}
	@PutMapping("/{id}")
	public MessageResponse updateContact(@PathVariable Long id, @RequestBody @Valid  UpdateContactRequest updateContactRequest) {
		return service.updateContact(id, updateContactRequest.toEntity());
	}
	@DeleteMapping("/{id}")

	public MessageResponse deleteContact(@PathVariable Long id) {
		return service.deleteContact(id);
	}
	}
