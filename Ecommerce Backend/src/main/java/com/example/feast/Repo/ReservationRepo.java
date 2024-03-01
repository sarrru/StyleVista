package com.example.feast.Repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ReservationRepo extends JpaRepository<Reservation,Integer> {

//    List<Reservation> findByDateAndStatus(String date, String status);
}
