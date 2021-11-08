package com.simple.sweetmovie.entity;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "TICKET")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_no")
    private Long ticketNo;

    @Column(name = "book_date", nullable = false)
    private Date bookDate;

    @Column(name = "schedule_no", nullable = false)
    private Long scheduleNo;

    @Column(name = "seat_no", nullable = false)
    private Integer seatNo;

    @Column(name = "member_id", length = 20, nullable = false)
    private String memberId;
}