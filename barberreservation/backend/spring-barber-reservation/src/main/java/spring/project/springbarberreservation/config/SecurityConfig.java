package spring.project.springbarberreservation.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import spring.project.springbarberreservation.security.JwtAuthenticationEntryPoint;
import spring.project.springbarberreservation.security.JwtAuthenticationFilter;



@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfiguration {

	
	private  JwtAuthenticationEntryPoint handler;
	
  

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
    	return new JwtAuthenticationFilter();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
    
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:3000");
        config.addAllowedHeader("*");
        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("HEAD");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("DELETE");
        config.addAllowedMethod("PATCH");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
    	httpSecurity
    		.cors()
    		.and()
    		.csrf().disable()
    		.exceptionHandling().authenticationEntryPoint(handler).and()
    		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
    		.authorizeRequests()
    		.requestMatchers(HttpMethod.GET, "/reservations")
    		.permitAll()
    		.requestMatchers(HttpMethod.GET, "/barbers")
    		.permitAll()
    		.requestMatchers(HttpMethod.GET, "/abouts")
    		.permitAll()
    		.requestMatchers(HttpMethod.GET, "/hours")
    		.permitAll()
    		.requestMatchers(HttpMethod.GET, "/experiences")
    		.permitAll()
    		.requestMatchers(HttpMethod.GET, "/abouts/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.GET, "/barbers/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.GET, "/experiences/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.GET, "/hours/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.GET, "/users/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.GET, "/reservation/**")
    		.permitAll()
    		.requestMatchers("/auth/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.POST, "/reservations/addReservation")
    		.permitAll()
    		.requestMatchers(HttpMethod.POST, "/abouts/addAbout")
    		.permitAll()
    		.requestMatchers(HttpMethod.POST, "/hours/addHour")
    		.permitAll()
    		.requestMatchers(HttpMethod.POST, "/experiences/addExperience")
    		.permitAll()
    		.requestMatchers(HttpMethod.POST, "/users/addUser")
    		.permitAll()
    		.requestMatchers(HttpMethod.POST, "/barbers/addBarber")
    		.permitAll()
    		.requestMatchers(HttpMethod.DELETE, "/abouts/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.DELETE, "/barbers/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.DELETE, "/experiences/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.DELETE, "/hours/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.DELETE, "/users/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.DELETE, "/reservation/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.PUT, "/abouts/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.PUT, "/barbers/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.PUT, "/experiences/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.PUT, "/hours/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.PUT, "/users/**")
    		.permitAll()
    		.requestMatchers(HttpMethod.PUT, "/reservation/**")
    		.permitAll()
    		.anyRequest().authenticated();
    		
    	httpSecurity.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    	return httpSecurity.build();
    }
}