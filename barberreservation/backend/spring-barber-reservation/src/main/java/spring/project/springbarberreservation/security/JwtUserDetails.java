package spring.project.springbarberreservation.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Getter;
import lombok.Setter;
import spring.project.springbarberreservation.entities.Users;

@Getter
@Setter
public class JwtUserDetails implements UserDetails{
	public Long id;
	private String name;
	private String phoneNumber;
	private Collection<? extends GrantedAuthority> authorities;
	public JwtUserDetails(Long id, String name, String phoneNumber,
			Collection<? extends GrantedAuthority> authorities) {
		super();
		this.id = id;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.authorities = authorities;
	}
	public static JwtUserDetails create(Users user) {
        List<GrantedAuthority> authoritiesList = new ArrayList<>();
        authoritiesList.add(new SimpleGrantedAuthority("user"));
        return new JwtUserDetails(user.getId(), user.getName(), user.getPhoneNumber(), authoritiesList);
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
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}

}
