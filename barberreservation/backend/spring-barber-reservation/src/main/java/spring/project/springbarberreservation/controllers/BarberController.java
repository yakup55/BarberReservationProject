package spring.project.springbarberreservation.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
import spring.project.springbarberreservation.entities.RefreshToken;
import spring.project.springbarberreservation.requests.AddBarberRequest;

import spring.project.springbarberreservation.requests.AdminRequest;
import spring.project.springbarberreservation.requests.RefreshRequest;
import spring.project.springbarberreservation.requests.UpdateBarberRequest;
import spring.project.springbarberreservation.responses.AdminResponse;
import spring.project.springbarberreservation.responses.BarberResponse;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.security.JwtTokenProvider;
import spring.project.springbarberreservation.services.BarberService;
import spring.project.springbarberreservation.services.RefreshTokenService;

@RestController
@RequestMapping("/barbers")
public class BarberController {
	private AuthenticationManager authenticationManager;
	private PasswordEncoder passwordEncoder;
	private final BarberService service;
	private RefreshTokenService refreshTokenService;
	private JwtTokenProvider jwtTokenProvider;

	
	public BarberController(AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder,
			BarberService service, RefreshTokenService refreshTokenService, JwtTokenProvider jwtTokenProvider) {
		super();
		this.authenticationManager = authenticationManager;
		this.passwordEncoder = passwordEncoder;
		this.service = service;
		this.refreshTokenService = refreshTokenService;
		this.jwtTokenProvider = jwtTokenProvider;
	}
	@GetMapping("/{id}")
	public BarberResponse getBarberById(@PathVariable Long id) {
		return BarberResponse.fromEntity(service.getBarberById(id));
	}
	@GetMapping
	public List<BarberResponse> getAllBarbers() {
		return service.getAllBarber().stream().map(BarberResponse::fromEntity).toList();
}
		@PostMapping("/{addBarber}")
	public MessageResponse addBarber(@RequestBody @Valid AddBarberRequest addBarberRequest) {
		return service.addBarber(addBarberRequest.toEntity());
	}
	@PutMapping("/{id}")
	public MessageResponse updateBarber(@PathVariable Long id,@RequestBody @Valid UpdateBarberRequest updateBarberRequest) {
		return service.updateBarber(id, updateBarberRequest.toEntity());
	}
	@DeleteMapping("/{id}")
	public MessageResponse deleteBarber(@PathVariable Long id) {
		return service.deleteBarber(id)	;
				}
	@PostMapping("/login")
	public AdminResponse login(@RequestBody @Valid AdminRequest loginRequest ) {
		UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(loginRequest.getUserName(),loginRequest.getPassword());
		Authentication authentication=authenticationManager.authenticate(authenticationToken);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwtToken = jwtTokenProvider.generateJwtToken(authentication);
		Barber barber = service.getOneUserByBarberName(loginRequest.getUserName());
		AdminResponse admin = new AdminResponse();
		admin.setAccessToken("Bearer " + jwtToken);
		admin.setRefreshToken(refreshTokenService.createRefreshTokenBarber(barber));
		admin.setBarberId(barber.getId());
		admin.setMessage("Login successful");
		admin.setUserName(barber.getUserName());
		admin.setSurName(barber.getSurName());
		admin.setPhoneNumber(barber.getPhoneNumber());
		admin.setImage(barber.getImage());
		admin.setExpriences(barber.getExpriences());
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
		
		Barber barber = new Barber();
		barber.setUserName(addBarber.getUserName());
		barber.setSurName(addBarber.getSurName());
		barber.setPhoneNumber(addBarber.getPhoneNumber());
		barber.setExpriences(addBarber.getExperience());
		barber.setImage(addBarber.getImage());
		barber.setPassword(passwordEncoder.encode(addBarber.getPassword()));
		service.addBarber(barber);
		
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(addBarber.getUserName(), addBarber.getPassword());
		Authentication auth = authenticationManager.authenticate(authToken);
		SecurityContextHolder.getContext().setAuthentication(auth);
		String jwtToken = jwtTokenProvider.generateJwtBarberToken(auth);
		
		admin.setMessage("Barber successfully registered.");
		admin.setAccessToken("Bearer " + jwtToken);
		admin.setRefreshToken(refreshTokenService.createRefreshTokenBarber(barber));
		admin.setBarberId(barber.getId());
		return new ResponseEntity<>(admin, HttpStatus.CREATED);	
	}
	@PostMapping("/refresh")
	public ResponseEntity<AdminResponse> refresh(@RequestBody @Valid RefreshRequest refreshRequest) {
		AdminResponse response = new AdminResponse();
		RefreshToken token = refreshTokenService.getByBarber(refreshRequest.getBarberId());
		if(token.getToken().equals(refreshRequest.getRefreshToken()) &&
				!refreshTokenService.isRefreshExpired(token)) {

			Barber barber = token.getBarber();
			String jwtToken = jwtTokenProvider.generateJwtTokenByUserId(barber.getId());
			response.setMessage("token successfully refreshed.");
			response.setAccessToken("Bearer " + jwtToken);
			response.setBarberId(barber.getId());
			return new ResponseEntity<>(response, HttpStatus.OK);		
		} else {
			response.setMessage("refresh token is not valid.");
			return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
		}
		
	}
	
	
}
