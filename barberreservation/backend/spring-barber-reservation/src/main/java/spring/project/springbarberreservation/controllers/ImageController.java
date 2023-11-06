package spring.project.springbarberreservation.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import spring.project.springbarberreservation.requests.AddImageRequest;
import spring.project.springbarberreservation.requests.UpdateImageRequest;
import spring.project.springbarberreservation.responses.ImageResponse;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.services.ImageService;

@RestController
@RequestMapping("/images")
public class ImageController {
	private final ImageService imageService;

	public ImageController(ImageService imageService) {
		super();
		this.imageService = imageService;
	}
	@GetMapping
	public List<ImageResponse> getAllImage(){
		return imageService.getAllImage().stream().map(ImageResponse::fromEntity).toList();
	}
	@GetMapping("/{id}")
	public ImageResponse getImageById(@PathVariable Long id) {
		return ImageResponse.fromEntity(imageService.getImageById(id));
	}
	@PostMapping("/{addImage}")
	public MessageResponse addImage(@RequestBody @Valid AddImageRequest add) {
		return imageService.addImage(add);
	}

	@PutMapping("/{id}")
	public MessageResponse updateImage(@PathVariable Long id,@RequestBody @Valid UpdateImageRequest update) {
		return imageService.updateImage(id, update);
	}
	@DeleteMapping("/{id}")
	public MessageResponse deleteImage(@PathVariable Long id) {
		return imageService.deleteImage(id);
	}
}
