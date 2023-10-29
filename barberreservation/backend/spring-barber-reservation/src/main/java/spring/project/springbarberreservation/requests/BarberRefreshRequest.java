package spring.project.springbarberreservation.requests;

import lombok.Data;

@Data
public class BarberRefreshRequest {
	Long barberId;
	String barberRefreshToken;
}
