// RatingRepo.java
package com.example.feast.Repo;

import com.example.feast.Entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RatingRepo extends JpaRepository<Rating, Long> {
    Rating findRatingByUserId(Long userId);
}
