package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UpdateUserRequest
		 {
	@NotEmpty
	@Size(min=2,max=30)
	String surName;
}
