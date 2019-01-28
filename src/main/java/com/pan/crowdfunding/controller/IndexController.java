package com.pan.crowdfunding.controller;

import com.alibaba.fastjson.JSONObject;
import com.pan.crowdfunding.entity.User;
import com.pan.crowdfunding.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    public String register(@RequestBody JSONObject jsonObject) {
        log.info("注册");
        JSONObject info = jsonObject.getJSONObject("data");
        String password = info.getString("password");
        String repeatPass = info.getString("repeatPass");
        if (!password.equals(repeatPass)) {
            return "err";
        }
        User user = new User();
        user.setName(info.getString("name"));
        user.setPhone(info.getString("phone"));
        user.setPassword(password);
        userRepository.save(user);
        return "suc";
    }

    @PostMapping("/login")
    @ResponseBody
    public String login(@RequestBody JSONObject jsonObject) {
        log.info("login：登录");

        User user = userRepository.findUsersByPhone(jsonObject.getString("phone"));
        if (user == null || !user.getPassword().equals(jsonObject.getString("password"))) {
            return "err";
        }
        return "suc";
    }

    @PostMapping("/canUsePhone")
    @ResponseBody
    public String canUsePhone(@RequestBody JSONObject jsonObject) {
        log.info("canUsePhone：手机可用检查");
        if (userRepository.findUsersByPhone(jsonObject.getString("phone")) == null) {
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
