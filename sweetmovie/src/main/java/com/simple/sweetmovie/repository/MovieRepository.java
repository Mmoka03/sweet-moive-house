package com.simple.sweetmovie.repository;

import com.simple.sweetmovie.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public
interface MovieRepository extends JpaRepository<Movie, Long> { }

