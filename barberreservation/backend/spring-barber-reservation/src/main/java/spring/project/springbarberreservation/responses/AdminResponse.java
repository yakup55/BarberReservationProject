package spring.project.springbarberreservation.responses;

import lombok.Data;

@Data
public class AdminResponse {
	Long barberId;
	String accessToken;
	String refreshToken;
	String userName;
	String surName;
	String phoneNumber;
	 Long imageId;
	 String expriences;
	 String message;
}
