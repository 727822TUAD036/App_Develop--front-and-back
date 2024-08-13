package com.example.demo.controller;

import com.example.demo.model.Management;
import com.example.demo.service.ManagementService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/management")
@CrossOrigin(origins = "http://localhost:3000")
public class ManagementController {

    @Autowired
    private ManagementService managementService;

    @GetMapping
    public List<Management> getAllManagement() {
        return managementService.getAllManagement();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Management> getManagementById(@PathVariable Long id) {
        Optional<Management> management = managementService.getManagementById(id);
        return management.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Management> createManagement(@RequestBody Management management) {
        Management savedManagement = managementService.saveManagement(management);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedManagement);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Management> updateManagement(@PathVariable Long id, @RequestBody Management management) {
        if (!managementService.getManagementById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        management.setId(id);
        Management updatedManagement = managementService.saveManagement(management);
        return ResponseEntity.ok(updatedManagement);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteManagement(@PathVariable Long id) {
        if (!managementService.getManagementById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        managementService.deleteManagement(id);
        return ResponseEntity.noContent().build();
    }
}
