package spring.project.springbarberreservation.entities;

import java.time.LocalDateTime;
import java.util.Objects;

import org.hibernate.proxy.HibernateProxy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@Setter
public abstract class BaseEntity {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

@CreatedDate
private LocalDateTime createdDate;

@Override
public boolean equals(Object obj) {
    if (this == obj) {
        return true;
    }
    if (obj == null) {
        return false;
    }
    if (obj instanceof HibernateProxy) {
        obj = ((HibernateProxy) obj).getHibernateLazyInitializer().getImplementation();
    }
    if (getClass() != obj.getClass()) {
        return false;
    }
    final BaseEntity other = (BaseEntity) obj;
    if (this.id == null) {
        return false;
    } else {
        return this.id.equals(other.id);
    }
}

@Override
public int hashCode() {
    return Objects.hash(id);
}
}
