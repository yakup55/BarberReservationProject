package spring.project.springbarberreservation.responses;

import java.time.LocalDateTime;

import spring.project.springbarberreservation.entities.Image;

public record ImageResponse(
		Long id,
		String imageUrl,
		LocalDateTime date
		
		) {
	public static ImageResponse fromEntity(Image image) {
		return new ImageResponse(image.getId(),image.getImageUrl(),image.getCreatedDate());
	}
}
