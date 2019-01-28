package com.pan.crowdfunding.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by FantasticPan on 2019/1/24.
 */
@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String password;
    private String img;
    private String phone;
    private String intro;
    private String certification;
    private String birthDate;
    private Integer province;
    private String city;
    private Integer focusNum;
    @OneToMany
    private Set<User> focus;
}
