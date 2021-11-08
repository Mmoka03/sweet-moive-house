package com.simple.sweetmovie.repository;

import com.simple.sweetmovie.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public
interface RoomRepository extends JpaRepository<Room, Long> { }
