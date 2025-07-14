package com.book.repo;

import com.book.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AdminRepo extends JpaRepository<Admin, Integer> {
    Admin findByUsername(String username);
    //Optional<Admin> findByUsername(String username);
    //Optional<Admin> findByEmail(String email);
}
