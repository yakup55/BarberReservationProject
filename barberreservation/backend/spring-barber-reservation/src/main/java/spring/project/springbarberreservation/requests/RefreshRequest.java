package spring.project.springbarberreservation.requests;

public record RefreshRequest(
		Long userId,
		String refreshToken
		) {

}
