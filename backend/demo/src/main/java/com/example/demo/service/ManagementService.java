package com.example.demo.service;

import com.example.demo.model.Management;
import com.example.demo.repository.ContactRepository;
import com.example.demo.repository.ManagementRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ManagementService {

    @Autowired
    private ManagementRepository managementRepository;

    public List<Management> getAllManagement() {
        return managementRepository.findAll();
    }

    public Optional<Management> getManagementById(Long id) {
        return managementRepository.findById(id);
    }

    public Management saveManagement(Management management) {
        return managementRepository.save(management);
    }

    public void deleteManagement(Long id) {
        managementRepository.deleteById(id);
    }
}
