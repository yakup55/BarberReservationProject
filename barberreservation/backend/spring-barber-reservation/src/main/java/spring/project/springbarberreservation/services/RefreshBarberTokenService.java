package spring.project.springbarberreservation.services;

import java.time.Instant;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.entities.RefreshBarberToken;
import spring.project.springbarberreservation.repositories.RefreshBarberTokenRepository;

@Service
@RequiredArgsConstructor
public class RefreshBarberTokenService {
	@Value("${springbarberreservation.barber.refresh.token.expires.in}")
	Long expireSeconds2;
	
	private final  RefreshBarberTokenRepository barberTokenRepository;
	public String createRefreshTokenBarber(Barber barber) {
		RefreshBarberToken barberToken = barberTokenRepository.findByBarberId(barber.getId());
	    if(barberToken == null) {
	    	barberToken = new RefreshBarberToken();
	    	barberToken.setBarber(barber);
	    }
	    barberToken.setToken(UUID.randomUUID().toString());
	    barberToken.setExpiryDate(Date.from(Instant.now().plusSeconds(expireSeconds2)));
	    barberTokenRepository.save(barberToken);
	    return barberToken.getToken();
	}
	
	public boolean isRefreshBarberExpired(RefreshBarberToken token) {
		return token.getExpiryDate().before(new Date());
	}
	
	public RefreshBarberToken getByBarber(Long barberId) {
		return barberTokenRepository.findByBarberId(barberId);
	}
}
