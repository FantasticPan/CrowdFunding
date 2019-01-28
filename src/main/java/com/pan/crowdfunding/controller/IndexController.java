package com.pan.crowdfunding.controller;

import com.pan.crowdfunding.entity.User;
import com.pan.crowdfunding.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by FantasticPan on 2019/1/24.
 */
@Controller
@Slf4j
public class IndexController {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @PostMapping("/register")
    @ResponseBody
    public String register(String name, String phone, String password, String repeatPass, String identifyingCode) {
        log.info("注册");
        if (!password.equals(repeatPass)) {
            return "err";
        }
        User user = new User();
        user.setName(name);
        user.setPhone(phone);
        user.setPassword(password);
        userRepository.save(user);
        return "suc";
    }

    @PostMapping("/login")
    @ResponseBody
    public String login(String phone, String password) {
        log.info("login：登录");

        User user = userRepository.findUsersByPhone(phone);
        if (user == null || !user.getPassword().equals(password)) {
            return "err";
        }
        return "suc";
    }

    @PostMapping("/canUsePhone")
    @ResponseBody
    public String canUsePhone(String phone) {
        log.info("canUsePhone：手机可用检查");
        if (userRepository.findUsersByPhone(phone) == null) {
            return "err";
        }
        return "suc";
    }

    @PostMapping("/isRepeatName")
    @ResponseBody
    public String isRepeatName(String name) {
        log.info("isRepeatName：名字重复检查");
        if (userRepository.findUsersByPhone(name) == null) {
            return "err";
        }
        return "suc";
    }
}
