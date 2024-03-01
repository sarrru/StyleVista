package com.example.feast.Pojo;

import com.example.feast.Entity.Order;
import com.example.feast.Entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotNull;

public class DeliveryPojo {
    private Long id;
    private Long user;
    @NotNull
    private Integer order;
    @NotNull
    private String address;
}
