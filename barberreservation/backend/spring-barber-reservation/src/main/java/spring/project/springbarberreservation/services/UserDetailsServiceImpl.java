package spring.project.springbarberreservation.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.entities.Users;
import spring.project.springbarberreservation.repositories.BarberRepository;
import spring.project.springbarberreservation.repositories.UserRepository;
import spring.project.springbarberreservation.security.JwtUserDetails;

@Service

public class UserDetailsServiceImpl implements UserDetailsService {

private UserRepository userRepository;
	private BarberRepository barberRepository;
    
	public UserDetailsServiceImpl(UserRepository userRepository,BarberRepository barberRepository) {
	super();
	this.userRepository = userRepository;
	this.barberRepository=barberRepository;
}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users users = userRepository.findByUserName(username);
		return JwtUserDetails.create(users);
	}
	
	public UserDetails loadBarberByUsername(String username) throws UsernameNotFoundException {
		Barber barber = barberRepository.findByUserName(username);
		return JwtUserDetails.createBarber(barber);
	}
	
	public UserDetails loadUserById(Long id) {
		Users users= userRepository.findById(id).get();
		return JwtUserDetails.create(users); 
	}
	public UserDetails loadBarberById(Long id) {
		Barber barber= barberRepository.findById(id).get();
		return JwtUserDetails.createBarber(barber); 
	}
}
