package spring.project.springbarberreservation.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import spring.project.springbarberreservation.entities.RefreshToken;
import spring.project.springbarberreservation.entities.Users;
import spring.project.springbarberreservation.requests.AddUserRequest;
import spring.project.springbarberreservation.requests.LoginRequest;
import spring.project.springbarberreservation.requests.RefreshRequest;
import spring.project.springbarberreservation.responses.AuthResponse;
import spring.project.springbarberreservation.security.JwtTokenProvider;
import spring.project.springbarberreservation.services.RefreshTokenService;
import spring.project.springbarberreservation.services.UserService;

@RequestMapping("/auths")
@RestController
public class AuthController {
private AuthenticationManager authenticationManager;
	
	private JwtTokenProvider jwtTokenProvider;
	
	private final UserService userService;
	
	
	private PasswordEncoder passwordEncoder;

	private RefreshTokenService refreshTokenService;
	
	

	public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider,
			UserService userService,  PasswordEncoder passwordEncoder,
			RefreshTokenService refreshTokenService) {
		super();
		this.authenticationManager = authenticationManager;
		this.jwtTokenProvider = jwtTokenProvider;
		this.userService = userService;
		this.passwordEncoder = passwordEncoder;
		this.refreshTokenService = refreshTokenService;
	}
	@PostMapping("/login")
	public AuthResponse login(@RequestBody @Valid LoginRequest loginRequest ) {
		UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(loginRequest.getUserName(),loginRequest.getPassword());
		Authentication authentication=authenticationManager.authenticate(authenticationToken);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwtToken = jwtTokenProvider.generateJwtToken(authentication);
		Users user = userService.getOneUserByUserName(loginRequest.getUserName());
		AuthResponse authResponse = new AuthResponse();
		authResponse.setAccessToken("Bearer " + jwtToken);
		authResponse.setRefreshToken(refreshTokenService.createRefreshToken(user));
		authResponse.setUserId(user.getId());
		authResponse.setMessage("Login successful");
		authResponse.setUserName(user.getUserName());
		authResponse.setSurName(user.getSurName());
		authResponse.setPhoneNumber(user.getPhoneNumber());
		return authResponse;
	}
	
	
	@PostMapping("/register")
	public ResponseEntity<AuthResponse>  register(@RequestBody @Valid AddUserRequest addUserRequest) {
		AuthResponse authResponse = new AuthResponse();
		if(userService.getOneUserByUserName(addUserRequest.getUserName()) != null) {
			authResponse.setMessage("Username already in use.");
			return new ResponseEntity<>(authResponse, HttpStatus.BAD_REQUEST);
		}
		if(userService.getOneByPhoneNumber(addUserRequest.getPhoneNumber()) != null) {
			authResponse.setMessage("PhoneNumber already in use.");
			return new ResponseEntity<>(authResponse, HttpStatus.BAD_REQUEST);
		}
		
		Users user = new Users();
		user.setUserName(addUserRequest.getUserName());
		user.setSurName(addUserRequest.getSurName());
		user.setPhoneNumber(addUserRequest.getPhoneNumber());
		user.setPassword(passwordEncoder.encode(addUserRequest.getPassword()));
		userService.addUser(user);
		
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(addUserRequest.getUserName(), addUserRequest.getPassword());
		Authentication auth = authenticationManager.authenticate(authToken);
		SecurityContextHolder.getContext().setAuthentication(auth);
		String jwtToken = jwtTokenProvider.generateJwtToken(auth);
		
		authResponse.setMessage("User successfully registered.");
		authResponse.setAccessToken("Bearer " + jwtToken);
		authResponse.setRefreshToken(refreshTokenService.createRefreshToken(user));
		authResponse.setUserId(user.getId());
		return new ResponseEntity<>(authResponse, HttpStatus.CREATED);	
	}
	
	@PostMapping("/refresh")
	public ResponseEntity<AuthResponse> refresh(@RequestBody @Valid RefreshRequest refreshRequest) {
		AuthResponse response = new AuthResponse();
		RefreshToken token = refreshTokenService.getByUser(refreshRequest.getUserId());
		if(token.getToken().equals(refreshRequest.getRefreshToken()) &&
				!refreshTokenService.isRefreshExpired(token)) {

			Users user = token.getUsers();
			String jwtToken = jwtTokenProvider.generateJwtTokenByUserId(user.getId());
			response.setMessage("token successfully refreshed.");
			response.setAccessToken("Bearer " + jwtToken);
			response.setUserId(user.getId());
			return new ResponseEntity<>(response, HttpStatus.OK);		
		} else {
			response.setMessage("refresh token is not valid.");
			return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
		}
		
	}
}
