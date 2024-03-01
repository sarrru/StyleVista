package com.example.feast.Service;


import com.example.feast.Entity.Item;
import com.example.feast.Pojo.ItemPojo;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ItemService {

    void saveItem(ItemPojo itemPojo)  throws IOException;
    List<Item> findAll();

    Optional<Item> getItemById(Integer id);

    void deleteItemById(Integer id);
}
