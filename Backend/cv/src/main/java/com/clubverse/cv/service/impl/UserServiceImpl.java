package com.clubverse.cv.service.impl;

import org.springframework.stereotype.Service;

import com.clubverse.cv.dto.RegisterRequestDTO;
import com.clubverse.cv.model.User;
import com.clubverse.cv.repository.UserRepository;
import com.clubverse.cv.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User registerUser(RegisterRequestDTO dto) {
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Email already registered");
        }

        if (!dto.getPassword().equals(dto.getConfirmPassword())) {
            throw new RuntimeException("Passwords do not match");
        }

        User user = new User();
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setStudentId(dto.getStudentId());
        user.setDepartment(dto.getDepartment());
        user.setPhone(dto.getPhone());

        return userRepository.save(user);
    }
}
