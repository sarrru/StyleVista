package com.example.feast.Service;

import com.example.feast.Pojo.EventPojo;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface EventService {
    void saveEvent(EventPojo eventPojo) throws IOException;
    List<Event> getAll();

    Optional<Event> getById(Long id);

    void deleteById(Long id);

    String update(Long id, EventPojo eventPojo);
}
