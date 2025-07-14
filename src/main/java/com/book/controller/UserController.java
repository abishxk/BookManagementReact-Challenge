package com.book.controller;

import com.book.entity.User;
import com.book.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/register/user")
    public ResponseEntity<Map<String, String>> registerUser(@RequestBody User user) {
        Map<String, String> response = new HashMap<>();
        if (userRepo.findByUsername(user.getUsername()) != null) {
            response.put("message", "Username already taken");
            return ResponseEntity.badRequest().body(response);
        }

        if (userRepo.findByEmail(user.getEmail()) != null) {
            response.put("message", "Email already registered");
            return ResponseEntity.badRequest().body(response);
        }

        user.setIsActive(1);
        userRepo.save(user);
        response.put("message", "User registered successfully!");
        return ResponseEntity.ok(response);
    }



    @PostMapping("/login")
    public String loginUser(@RequestBody User loginRequest) {
        User user = userRepo.findByUsername(loginRequest.getUsername());

        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            if (user.getIsActive() == 1) {
                return "Login successful";
            } else {
                return "User account is deactivated";
            }
        } else {
            return "Invalid credentials";
        }
    }


    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}
