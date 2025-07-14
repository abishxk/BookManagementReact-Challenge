package com.book.controller;

import com.book.entity.Admin;
import com.book.repo.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000") // Adjust if frontend runs elsewhere
public class AdminController {

    @Autowired
    private AdminRepo adminRepo;

    @PostMapping("/login")
    public String loginAdmin(@RequestBody Admin loginRequest) {
        Admin admin = adminRepo.findByUsername(loginRequest.getUsername());

        if (admin != null && admin.getPassword().equals(loginRequest.getPassword())) {
            if (admin.getIsActive()==1) {
                return "Login successful";
            } else {
                return "Admin account is deactivated";
            }
        } else {
            return "Invalid credentials";
        }
    }
}
