package com.pan.crowdfunding.repository;

import com.pan.crowdfunding.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by FantasticPan on 2019/1/28.
 */
public interface UserRepository extends JpaRepository<User, Integer> {

    User findUsersByPhone(String phone);
}
