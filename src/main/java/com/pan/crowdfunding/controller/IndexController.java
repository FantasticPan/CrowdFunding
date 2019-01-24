package com.pan.crowdfunding.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by FantasticPan on 2019/1/24.
 */
@Controller
public class IndexController {

    @RequestMapping("/hh")
    public String index() {
        return "index";
    }
}
