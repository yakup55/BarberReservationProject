package spring.project.springbarberreservation.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.repositories.BarberRepository;
import spring.project.springbarberreservation.requests.UpdateBarberPassword;
import spring.project.springbarberreservation.requests.UpdateBarberRequest;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
public class BarberService {
	private final BarberRepository repository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	public BarberService(BarberRepository repository, PasswordEncoder passwordEncoder) {
		super();
		this.repository = repository;
		this.passwordEncoder = passwordEncoder;
	}
	public List<Barber> getAllBarber(){
		return repository.findAll();
	}
	public ResponseEntity<MessageResponse> updateBarberPassword(UpdateBarberPassword updateBarberPassword ) {
		Barber barber = getBarberById(updateBarberPassword.getBarberId());
		 if (repository.existsById(barber.getId())) {
	         if (passwordEncoder.matches(updateBarberPassword.getOldPassword(), barber.getPassword())) {
	        	 barber.setPassword(passwordEncoder.encode(updateBarberPassword.getNewPassword()));
	             repository.save(barber);
	             return ResponseEntity.ok(new MessageResponse("Şifre güncellendi", MessageType.SUCCESS));
	         } else {
	             return ResponseEntity.badRequest().body(new MessageResponse("Eski şifreniz yanlış", MessageType.ERROR));
	         }
	     } else {
	    	 return ResponseEntity.notFound().build();
	     }
	}
	public Barber getBarberById(Long id) {
		return repository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
	}
	public Barber getOneUserByBarberName(String userName) {
		return repository.findByUserName(userName);
	}
	public Barber getOneByPhoneNumber(String phoneNumber) {
		return repository.findByPhoneNumber(phoneNumber);
	}
	public MessageResponse addBarber(Barber barber) {
	        repository.save(barber);
	        return new MessageResponse("Has been created", MessageType.SUCCESS);
	}
	@Transactional
	public MessageResponse updateBarber(Long id,UpdateBarberRequest barber) {
		Barber existingBarber=getBarberById(id);
		if(!repository.existsById(id)) {
			return new MessageResponse("Barber cant be found", MessageType.ERROR);
		}
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
