package spring.project.springbarberreservation.requests;

import lombok.Data;

@Data
public class RefreshRequest {
	Long userId;
	String refreshToken;
}
