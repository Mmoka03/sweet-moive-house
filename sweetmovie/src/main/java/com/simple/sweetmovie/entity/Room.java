package com.simple.sweetmovie.entity;

import com.simple.sweetmovie.entity.pk.RoomPK;
import lombok.*;

import javax.persistence.*;

@Entity
@IdClass(RoomPK.class)
@Table(name = "ROOM")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_no")
    private Long roomNo;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "schedule_no", nullable = false)
    private Long scheduleNo;
}
