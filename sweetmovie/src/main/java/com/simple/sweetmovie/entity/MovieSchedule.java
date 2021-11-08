package com.simple.sweetmovie.entity;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "MOVIE_SCHEDULE")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MovieSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "schedule_no")
    private Long scheduleNo;

    @Column(name = "movie_no", nullable = false)
    private Long movieNo;

    @Column(name = "run_day", nullable = false)
    private Date runDay;

    @Column(name = "room_no", nullable = false)
    private Long roomNo;

    @OneToMany
    @JoinColumn(name = "schedule_no")
    private List<Ticket> ticketList;
}
