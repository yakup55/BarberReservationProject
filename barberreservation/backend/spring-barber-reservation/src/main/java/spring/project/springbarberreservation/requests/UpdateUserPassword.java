package spring.project.springbarberreservation.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UpdateUserPassword
		 {
			//String userName;
	        Long userId;
	     	@NotEmpty
	     	@Size(min=3,max=11)
			String oldPassword;
			@NotEmpty
			@Size(min=3,max=11)
			String newPassword;
			
}
