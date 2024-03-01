package com.example.feast.Service;

import com.example.feast.Entity.Cart;
import com.example.feast.Pojo.CartPojo;

import java.util.List;

public interface CartService {

    void saveCart(CartPojo cartPojo);

    List<Cart> getAll();

    void deleteById(Long id);

    void updateQuantity(Long id, Integer quantity);
}
