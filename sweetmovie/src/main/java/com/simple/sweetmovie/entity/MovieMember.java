package com.simple.sweetmovie.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "MOVIE_MEMBER")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MovieMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long Id;

    @Column(name = "member_id", length = 20)
    private String memberId;

    @Column(name = "member_pw", length = 32, nullable = false)
    private String memberPw;

    @Column(name = "email", length = 80, nullable = false)
    private String email;

    @Column(name = "phone", length = 13, nullable = false)
    private String phone;

    @Column(name = "authority", nullable = false)
    private Integer authority;

}
