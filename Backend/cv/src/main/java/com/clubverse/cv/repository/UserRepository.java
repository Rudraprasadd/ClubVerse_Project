package com.clubverse.cv.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clubverse.cv.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
}
