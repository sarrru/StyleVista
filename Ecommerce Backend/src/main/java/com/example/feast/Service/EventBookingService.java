package com.example.feast.Service;

import com.example.feast.Pojo.EventBookingPojo;

import java.util.List;
import java.util.Optional;

public interface EventBookingService {
    void saveEvent(EventBookingPojo eventBookingPojo);
    List<EventBooking> getAll();

    Optional<EventBooking> getById(Long id);

    void deleteById(Long id);

    String update(Long id, EventBookingPojo eventBookingPojo);
}
