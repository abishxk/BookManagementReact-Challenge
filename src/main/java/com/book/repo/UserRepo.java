package com.book.repo;

import com.book.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Integer> { // OR just this:
    User findByUsername(String username); // If using directly without Optional
    User findByEmail(String email);

}
