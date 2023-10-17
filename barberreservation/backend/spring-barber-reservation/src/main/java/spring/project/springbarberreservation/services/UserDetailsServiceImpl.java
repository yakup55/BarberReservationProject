package spring.project.springbarberreservation.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Users;
import spring.project.springbarberreservation.repositories.UserRepository;
import spring.project.springbarberreservation.security.JwtUserDetails;

@Service

public class UserDetailsServiceImpl implements UserDetailsService {

private UserRepository userRepository;
	
    
	public UserDetailsServiceImpl(UserRepository userRepository) {
	super();
	this.userRepository = userRepository;
}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users users = userRepository.findByName(username);
		return JwtUserDetails.create(users);
	}
	
	public UserDetails loadUserById(Long id) {
		Users users= userRepository.findById(id).get();
		return JwtUserDetails.create(users); 
	}
}
