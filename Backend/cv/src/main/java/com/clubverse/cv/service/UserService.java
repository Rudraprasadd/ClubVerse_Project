package com.clubverse.cv.service;

import com.clubverse.cv.dto.RegisterRequestDTO;
import com.clubverse.cv.model.User;

public interface UserService {
    User registerUser(RegisterRequestDTO dto);
}
