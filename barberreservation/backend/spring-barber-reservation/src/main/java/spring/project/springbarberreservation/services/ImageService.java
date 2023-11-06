package spring.project.springbarberreservation.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.entities.Image;
import spring.project.springbarberreservation.repositories.ImageRepository;
import spring.project.springbarberreservation.requests.AddImageRequest;
import spring.project.springbarberreservation.requests.UpdateImageRequest;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.responses.MessageType;

@Service
@RequiredArgsConstructor
public class ImageService {
private final ImageRepository imageRepository;
public List<Image> getAllImage(){
	return imageRepository.findAll();
}
public Image getImageById(Long id) {
	return imageRepository.findById(id).orElseThrow(()->new EntityNotFoundException("Id Not Found".formatted(id)));
	
}
public MessageResponse addImage(AddImageRequest image) {
	Image newImage=new Image();
	newImage.setImageUrl(image.getImageUrl());
	imageRepository.save(newImage);
        return new MessageResponse("Başarıyla oluşturuldu", MessageType.SUCCESS);
}
@Transactional
public MessageResponse updateImage(Long id,UpdateImageRequest image) {
	Image existingImage=getImageById(id);
	existingImage.update(image);
imageRepository.save(existingImage);
	return new MessageResponse("Has been updated", MessageType.SUCCESS);
}
public MessageResponse deleteImage(Long id) {
	if(!imageRepository.existsById(id)) {
		return new MessageResponse("Image cant be found", MessageType.ERROR);
	}
	imageRepository.deleteById(id);
	return new MessageResponse("Has been deleted", MessageType.SUCCESS);
}
}
