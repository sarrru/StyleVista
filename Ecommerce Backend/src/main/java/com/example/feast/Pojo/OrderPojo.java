package com.example.feast.Pojo;

import com.example.feast.Entity.Cart;
import com.example.feast.Entity.Item;
import com.example.feast.Entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class OrderPojo {

    private Long id;

    private Long userId;

    private List<Integer> orderItems;

    private String payVia;

    private String pickUpOption;

    private Integer totalPrice;

    private String address;

    private Long phoneNumber;

    private Date orderDateTime;
}