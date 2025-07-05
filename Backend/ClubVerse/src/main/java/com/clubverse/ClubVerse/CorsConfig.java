package com.clubverse.ClubVerse;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Apply CORS to all paths
                .allowedOrigins("http://localhost:3000") // Allow React frontend
                .allowedMethods("*") // Allow all HTTP methods: GET, POST, etc.
                .allowedHeaders("*") // Allow all headers
                .allowCredentials(true); // Allow cookies/auth
    }
}
