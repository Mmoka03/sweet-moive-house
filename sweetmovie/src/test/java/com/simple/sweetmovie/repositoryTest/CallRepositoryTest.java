package com.simple.sweetmovie.repositoryTest;

import com.simple.sweetmovie.entity.*;
import com.simple.sweetmovie.repository.*;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootTest
public class CallRepositoryTest {

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    TicketRepository ticketRepository;

    @Autowired
    MovieScheduleRepository movieScheduleRepository;

    @Autowired
    MovieMemberRepository movieMemberRepository;

    @Autowired
    RoomRepository roomRepository;

    @Transactional(readOnly = true)
    @Test
    void callMovieRepositoryTest() {
        List<Movie> movieList = movieRepository.findAll();
        for(Movie movie : movieList) {
            for(MovieSchedule movieSchedule : movie.getMovieScheduleList()) {
                System.out.println("movie = " + movie.getMovieNm() + ", " + movieSchedule.getScheduleNo() + ", " + movieSchedule.getRunDay());
            }
        }
        Assertions.assertThat(movieList).isNotNull();
    }
    @Test
    void callTicketRepositoryTest() {
        List<Ticket> ticketList = ticketRepository.findAll();
        for(Ticket ticket : ticketList) {
            System.out.println("ticket = " + ticket.getTicketNo());
        }
        Assertions.assertThat(ticketList).isNotNull();
    }
    @Transactional(readOnly = true)
    @Test
    void callMovieScheduleRepositoryTest() {
        List<MovieSchedule> movieScheduleList = movieScheduleRepository.findAll();
        for(MovieSchedule movieSchedule : movieScheduleList) {
            for(Ticket ticket: movieSchedule.getTicketList()) {
                System.out.println("movieSchedule = " + movieSchedule.getScheduleNo() + ", " + ticket.getSeatNo());
            }
        }
        Assertions.assertThat(movieScheduleList).isNotNull();
    }
    @Transactional(readOnly = true)
    @Test
    void callMovieScheduleRepositoryQueryTest() {
        List<MovieSchedule> movieScheduleList = movieScheduleRepository.findAll();

        for(MovieSchedule movieSchedule : movieScheduleList) {
            System.out.println("movieSchedule.getSeatCount() = " + movieScheduleRepository.getSeatCount(movieSchedule.getScheduleNo()));
        }
        Assertions.assertThat(movieScheduleList).isNotNull();
    }
    @Test
    void callRoomRepositoryTest() {
        List<Room> roomList = roomRepository.findAll();
//        for(MovieSchedule movieSchedule : movieScheduleList) {
//            for(Ticket ticket: movieSchedule.getTicketList()) {
//                System.out.println("movieSchedule = " + movieSchedule.getScheduleNo() + ", " + ticket.getSeatNo());
//            }
//        }
//        Assertions.assertThat(movieScheduleList).isNotNull();
    }
//    @Transactional(readOnly = true)
}

