package com.clubverse.ClubVerse.Controller; // ✅ Match your actual package structure

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/home")
    public String homePage() {
        return "index"; // loads index.html from templates
    }
}