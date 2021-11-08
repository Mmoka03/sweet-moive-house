package com.simple.sweetmovie.repository;

import com.simple.sweetmovie.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public
interface TicketRepository extends JpaRepository<Ticket, Long> { }
