package spring.project.springbarberreservation.responses;

import lombok.Data;

@Data
public class AuthResponse {
	String message;
	Long userId;
	String accessToken;
	String refreshToken;
	String userName;
	String surName;
	String phoneNumber;
}
