package spring.project.springbarberreservation.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Getter;
import lombok.Setter;
import spring.project.springbarberreservation.entities.Barber;
import spring.project.springbarberreservation.entities.Users;

@Getter
@Setter
public class JwtUserDetails implements UserDetails{
	public Long id;
	private String name;
	private String password;
	private Collection<? extends GrantedAuthority> authorities;
	
	
	public JwtUserDetails(Long id, String name, String password, Collection<? extends GrantedAuthority> authorities) {
		this.id = id;
		this.name = name;
		this.password = password;
		this.authorities = authorities;
	}
	
	public static JwtUserDetails create(Users user) {
        List<GrantedAuthority> authoritiesList = new ArrayList<>();
        authoritiesList.add(new SimpleGrantedAuthority("user"));
        return new JwtUserDetails(user.getId(), user.getUserName(), user.getPassword(), authoritiesList);
    }
	public static JwtUserDetails createBarber(Barber barber) {
        List<GrantedAuthority> authoritiesList = new ArrayList<>();
        authoritiesList.add(new SimpleGrantedAuthority("barber"));
        return new JwtUserDetails(barber.getId(), barber.getUserName(), barber.getPassword(), authoritiesList);
    }
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}


	

}
