package spring.project.springbarberreservation.requests;

import lombok.Data;

@Data
public class RefreshRequest {
	Long userId;
	Long barberId;
	String refreshToken;
}
