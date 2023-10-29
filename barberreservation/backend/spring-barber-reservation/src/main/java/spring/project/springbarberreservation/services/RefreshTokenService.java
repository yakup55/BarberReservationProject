package spring.project.springbarberreservation.services;

import java.time.Instant;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.entities.RefreshToken;
import spring.project.springbarberreservation.entities.Users;
import spring.project.springbarberreservation.repositories.RefreshTokenRepository;

@Service
@RequiredArgsConstructor
public class RefreshTokenService {
	@Value("${springbarberreservation.refresh.token.expires.in}")
	Long expireSeconds;
	
	@Value("${springbarberreservation.barber.refresh.token.expires.in}")
	Long expireSeconds2;

	private final RefreshTokenRepository refreshTokenRepository;
	
	public String createRefreshToken(Users users) {
		RefreshToken token = refreshTokenRepository.findByUserId(users.getId());
		if(token == null) {
			token =	new RefreshToken();
			token.setUsers(users);
		}
		token.setToken(UUID.randomUUID().toString());
		token.setExpiryDate(Date.from(Instant.now().plusSeconds(expireSeconds)));
		refreshTokenRepository.save(token);
		return token.getToken();
	}
	public String createRefreshTokenBarber(Barber barber) {
		RefreshToken token = refreshTokenRepository.findByBarberId(barber.getId());
		if(token == null) {
			token =	new RefreshToken();
			token.setBarber(barber);
		}
		token.setToken(UUID.randomUUID().toString());
		token.setExpiryDate(Date.from(Instant.now().plusSeconds(expireSeconds2)));
		refreshTokenRepository.save(token);
		return token.getToken();
	}
	
	
	public boolean isRefreshExpired(RefreshToken token) {
		return token.getExpiryDate().before(new Date());
	}

	public RefreshToken getByUser(Long userId) {
		return refreshTokenRepository.findByUserId(userId);	
	}
	public RefreshToken getByBarber(Long barberId) {
		return refreshTokenRepository.findByBarberId(barberId);
	}
	
}
