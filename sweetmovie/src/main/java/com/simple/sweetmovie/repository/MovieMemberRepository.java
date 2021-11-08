package com.simple.sweetmovie.repository;

import com.simple.sweetmovie.entity.MovieMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public
interface MovieMemberRepository extends JpaRepository<MovieMember, Long> { }
