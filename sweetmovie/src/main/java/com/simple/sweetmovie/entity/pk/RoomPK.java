package com.simple.sweetmovie.entity.pk;

import lombok.Data;

import java.io.Serializable;

@Data
public class RoomPK implements Serializable {
    private int roomNo;
    private int scheduleNo;
}
