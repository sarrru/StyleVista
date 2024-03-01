package com.example.feast.Pojo;
import com.example.feast.Entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;
import java.util.Timer;

@Getter
@Setter
public class EventPojo {

    private Long id;

    @NotNull
    private String eventName;

    @NotNull
    private String eventImage;

    @NotNull
    private String eventDescription;

    @NotNull
    private Integer eventPrice;

}