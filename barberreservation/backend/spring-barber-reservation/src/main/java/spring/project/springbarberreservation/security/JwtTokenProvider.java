package spring.project.springbarberreservation.security;


import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;

@Component
public class JwtTokenProvider {
	@Value("${springbarberreservation.app.secret}")
	private String APP_SECRET;
	@Value("${springbarberreservation.expires.in}")
	private long EXPIRES_IN;
	@Value("${springbarberreservation.barber.app.secret}")
	private String APP_SECRET2;
	@Value("${springbarberreservation.barber.expires.in}")
	private long EXPIRES_IN2;
	public String generateJwtToken(Authentication auth) {
		JwtUserDetails userDetails = (JwtUserDetails) auth.getPrincipal();
		Date expireDate = new Date(new Date().getTime() + EXPIRES_IN);
		return Jwts.builder().setSubject(Long.toString(userDetails.getId()))
				.setIssuedAt(new Date()).setExpiration(expireDate)
				.signWith(SignatureAlgorithm.HS512, APP_SECRET).compact();
	}
	public String generateJwtBarberToken(Authentication auth) {
	    JwtUserDetails userDetails = (JwtUserDetails) auth.getPrincipal();
	    Date expireDate = new Date(new Date().getTime() + EXPIRES_IN2);
	    return Jwts.builder()
	            .setSubject(Long.toString(userDetails.getId()))
	            .setIssuedAt(new Date())
	            .setExpiration(expireDate)
	            .signWith(SignatureAlgorithm.HS512, APP_SECRET2) 
	            .compact();
	}
	public String generateJwtTokenByUserId(Long userId) {
		Date expireDate = new Date(new Date().getTime() + EXPIRES_IN);
		return Jwts.builder().setSubject(Long.toString(userId))
				.setIssuedAt(new Date()).setExpiration(expireDate)
				.signWith(SignatureAlgorithm.HS512, APP_SECRET).compact();
		}
	public String generateJwtTokenByBarberId(Long barberId) {
		Date expireDate = new Date(new Date().getTime() + EXPIRES_IN2);
		return Jwts.builder().setSubject(Long.toString(barberId))
				.setIssuedAt(new Date()).setExpiration(expireDate)
				.signWith(SignatureAlgorithm.HS512, APP_SECRET2).compact();}
	Long getUserIdFromJwt(String token) {
		Claims claims = Jwts.parser().setSigningKey(APP_SECRET).parseClaimsJws(token).getBody();
		return Long.parseLong(claims.getSubject());}
	Long getBarberIdFromJwt(String token) {
		Claims claims = Jwts.parser().setSigningKey(APP_SECRET2).parseClaimsJws(token).getBody();
		return Long.parseLong(claims.getSubject());}
	
	boolean validateToken(String token) {
	    try {
	        Jwts.parser().setSigningKey(APP_SECRET).parseClaimsJws(token);
	        return !isTokenExpired(token);
	    } catch (io.jsonwebtoken.SignatureException e) {
	        return false;
	    } catch (MalformedJwtException e) {
	        return false;
	    } catch (ExpiredJwtException e) {
	        return false;
	    } catch (UnsupportedJwtException e) {
	        return false;
	    } catch (IllegalArgumentException e) {
	        return false;
	    }
	}
	boolean validateBarberToken(String token) {
		try {
			Jwts.parser().setSigningKey(APP_SECRET2).parseClaimsJws(token);
			return !isBarberTokenExpired(token);
		} catch (io.jsonwebtoken.SignatureException e) {
            return false;
        } catch (MalformedJwtException e) {
            return false;
        } catch (ExpiredJwtException e) {
            return false;
        } catch (UnsupportedJwtException e) {
            return false;
        } catch (IllegalArgumentException e) {
            return false;
        }
	}

	private boolean isTokenExpired(String token) {
		Date expiration = Jwts.parser().setSigningKey(APP_SECRET).parseClaimsJws(token).getBody().getExpiration();
		return expiration.before(new Date());
	}
	private boolean isBarberTokenExpired(String token) {
		Date expiration = Jwts.parser().setSigningKey(APP_SECRET2).parseClaimsJws(token).getBody().getExpiration();
		return expiration.before(new Date());
	}
}