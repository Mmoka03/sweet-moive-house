package com.simple.sweetmovie.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "MOVIE")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "movie_no")
    private Long movieNo;

    @Column(name = "movie_nm", length = 100, nullable = false)
    private String movieNm;

    @Column(name = "category", nullable = false)
    private Integer category;

    @Column(name = "runtime", nullable = false)
    private Integer runtime;

    @Column(name = "movie_img", length = 150, nullable = false)
    private String movieImg;

    @Column(name = "rating", nullable = false)
    private Integer rating;

    @OneToMany
    @JoinColumn(name = "movie_no")
    private List<MovieSchedule> movieScheduleList;
}
