package spring.project.springbarberreservation.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import spring.project.springbarberreservation.entities.Users;
import spring.project.springbarberreservation.repositories.UserRepository;
import spring.project.springbarberreservation.requests.UpdateUserPassword;
import spring.project.springbarberreservation.requests.UpdateUserRequest;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
public class UserService {
private final UserRepository repository;
@Autowired
private PasswordEncoder passwordEncoder;

public UserService(UserRepository repository, PasswordEncoder passwordEncoder) {
	super();
	this.repository = repository;
	this.passwordEncoder = passwordEncoder;
}
public List<Users>getAllUser(){
	return repository.findAll();
}
public Users getUserById(Long id) {
	return repository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
}
public Users getOneUserByUserName(String userName) {
	return repository.findByUserName(userName);
}
public Users getOneByPhoneNumber(String phoneNumber) {
	return repository.findByPhoneNumber(phoneNumber);
}


public ResponseEntity<MessageResponse> updatePassword(UpdateUserPassword updateUserPassword) {
	Users user = getUserById(updateUserPassword.getUserId());
	 if (repository.existsById(user.getId())) {
         // Eski şifreyi kontrol et
         if (passwordEncoder.matches(updateUserPassword.getOldPassword(), user.getPassword())) {
             // Eğer eski şifre doğru ise, yeni şifreyi güncelle
             user.setPassword(passwordEncoder.encode(updateUserPassword.getNewPassword()));
             repository.save(user);
             return ResponseEntity.ok(new MessageResponse("Şifre güncellendi", MessageType.SUCCESS));
         } else {
        	 // Eğer eski şifre yanlışsa 400 Bad Request ile yanıt ver
             return ResponseEntity.badRequest().body(new MessageResponse("Eski şifreniz yanlış", MessageType.ERROR));
         }
     } else {
         // Kullanıcı bulunamadı
    	 return ResponseEntity.notFound().build();
     }
 
}

public MessageResponse addUser(Users user) {
	repository.save(user);
	return new MessageResponse("Has been created",MessageType.SUCCESS);
}
public MessageResponse updateUser(Long id,UpdateUserRequest newUser) {
	Users user=getUserById(id);
	if(!repository.existsById(id)) {
		return new MessageResponse("User cant be found", MessageType.ERROR);
	}
	user.update(newUser);
	repository.save(user);
	return new MessageResponse("Has been Updated",MessageType.SUCCESS);
}

public MessageResponse deleteUser(Long id) {
	if(!repository.existsById(id)) {
		return new MessageResponse("Barber cant be found", MessageType.ERROR);
	}
	repository.deleteById(id);
	return new MessageResponse("Has been deleted", MessageType.SUCCESS);
}

}
