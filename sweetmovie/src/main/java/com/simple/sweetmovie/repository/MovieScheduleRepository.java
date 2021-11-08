package com.simple.sweetmovie.repository;

import com.simple.sweetmovie.entity.MovieMember;
import com.simple.sweetmovie.entity.MovieSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public
interface MovieScheduleRepository extends JpaRepository<MovieSchedule, Long> {

    @Query("SELECT count(ticketNo) as seat_cnt FROM Ticket WHERE scheduleNo = :scheduleNo GROUP BY scheduleNo")
    Integer getSeatCount(Long scheduleNo);
}

