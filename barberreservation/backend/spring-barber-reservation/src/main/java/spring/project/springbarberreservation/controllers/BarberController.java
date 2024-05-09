package spring.project.springbarberreservation.controllers;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.entities.Image;
import spring.project.springbarberreservation.requests.AddBarberRequest;
import spring.project.springbarberreservation.requests.AdminRequest;
import spring.project.springbarberreservation.requests.UpdateBarberPassword;
import spring.project.springbarberreservation.requests.UpdateBarberRequest;
import spring.project.springbarberreservation.responses.AdminResponse;
import spring.project.springbarberreservation.responses.BarberResponse;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.services.BarberService;
import spring.project.springbarberreservation.services.ImageService;
import spring.project.springbarberreservation.services.RefreshBarberTokenService;

@RestController
@RequestMapping("/barbers")
public class BarberController {
	private final BarberService service;
	private PasswordEncoder passwordEncoder;
	private  RefreshBarberTokenService barberTokenService;
    private  ImageService imageService;
	
    public BarberController(PasswordEncoder passwordEncoder,
			BarberService service, RefreshBarberTokenService barberTokenService,
			ImageService imageService) {
		super();
	
		this.passwordEncoder = passwordEncoder;
		this.service = service;
		this.barberTokenService = barberTokenService;
		this.imageService = imageService;
	}

	@GetMapping("/{id}")
	public BarberResponse getBarberById(@PathVariable Long id) {
		return BarberResponse.fromEntity(service.getBarberById(id));
	}
	@GetMapping
	public List<BarberResponse> getAllBarbers() {
		return service.getAllBarber().stream().map(BarberResponse::fromEntity).toList();
}
	@PutMapping("/updatebarberpassword")
	public ResponseEntity<MessageResponse> updateBarberPassword(@RequestBody @Valid UpdateBarberPassword updateBarberPassword) {
		return service.updateBarberPassword(updateBarberPassword);
	}
	
	@PutMapping("/{id}")
	public MessageResponse updateBarber(@PathVariable Long id,@RequestBody @Valid UpdateBarberRequest updateBarberRequest) {
		return service.updateBarber(id, updateBarberRequest);
	}
	@DeleteMapping("/{id}")
	public MessageResponse deleteBarber(@PathVariable Long id) {
		return service.deleteBarber(id)	;
				}
	@PostMapping("/login")
	public AdminResponse login(@RequestBody @Valid AdminRequest loginRequest ) {
		
		Barber barber = service.getOneUserByBarberName(loginRequest.getUserName());
		AdminResponse admin = new AdminResponse();
		admin.setRefreshToken(barberTokenService.createRefreshTokenBarber(barber));
		admin.setBarberId(barber.getId());
		admin.setMessage("Login successful");
		admin.setUserName(barber.getUserName());
		admin.setSurName(barber.getSurName());
		admin.setPhoneNumber(barber.getPhoneNumber());
		admin.setExpriences(barber.getExpriences());
		admin.setImageId(barber.getImage().getId());
		return admin;
	}
	
	@PostMapping("/register")
	public ResponseEntity<AdminResponse>  register(@RequestBody @Valid AddBarberRequest addBarber) {
		AdminResponse admin = new AdminResponse();
		if(service.getOneUserByBarberName(addBarber.getUserName()) != null) {
			admin.setMessage("BarberName already in use.");
			return new ResponseEntity<>(admin, HttpStatus.BAD_REQUEST);
		}
		if(service.getOneByPhoneNumber(addBarber.getPhoneNumber()) != null) {
			admin.setMessage("PhoneNumber already in use.");
			return new ResponseEntity<>(admin, HttpStatus.BAD_REQUEST);
		}
		Image image=imageService.getImageById(addBarber.getImageId());
		Barber barber = new Barber();
		barber.setUserName(addBarber.getUserName());
		barber.setSurName(addBarber.getSurName());
		barber.setPhoneNumber(addBarber.getPhoneNumber());
		barber.setExpriences(addBarber.getExperience());
		barber.setImage(image);
		barber.setPassword(passwordEncoder.encode(addBarber.getPassword()));
		service.addBarber(barber);
		admin.setMessage("Barber successfully registered.");
		admin.setRefreshToken(barberTokenService.createRefreshTokenBarber(barber));
		admin.setBarberId(barber.getId());
		return new ResponseEntity<>(admin, HttpStatus.CREATED);	
	}	
}
