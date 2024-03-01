package com.example.feast.Service;

import com.example.feast.Entity.Order;
import com.example.feast.Pojo.OrderPojo;


import java.util.List;
import java.util.Optional;

public interface OrderService {

    String save(OrderPojo orderpojo);


    List<Order> getAll();


    Optional<Order> findById(Long id);

    void deleteById(Long id);

    String update(Long id , OrderPojo orderpojo);

}
