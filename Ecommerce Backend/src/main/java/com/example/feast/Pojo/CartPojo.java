package com.example.feast.Pojo;

import com.example.feast.Entity.Item;
import com.example.feast.Entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter


public class CartPojo {

    private Long id;

    private Long userId;

    private Integer itemId;

    @NotNull
    private Integer total_price;

    @NotNull
    private Integer quantity;
}
