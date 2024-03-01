// RatingService.java
package com.example.feast.Service;

import com.example.feast.Entity.Rating;
import com.example.feast.Pojo.RatingPojo;

import java.util.List;

public interface RatingService {
    Rating saveRating(RatingPojo ratingPojo);
    List<Rating> getAllRatings();

    Rating getRateByUser(Long userId);

}
