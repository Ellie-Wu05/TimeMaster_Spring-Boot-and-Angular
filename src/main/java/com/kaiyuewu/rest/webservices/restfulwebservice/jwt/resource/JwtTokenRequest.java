package com.kaiyuewu.rest.webservices.restfulwebservice.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

//    {
//        "token":
//        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJLYWl5dWUgV3UiLCJleHAiOjE2NTM2MzcwOTgsImlhdCI6MTY1MzAzMjI5OH0.JX5xXeZGez82hphNRvalRzQ_Wnp9D6EA0RNbo0Ma-zKgTxfz1Plh9ZS9i_B6xhFNsEvHPtMc-ez6gdX5qq15Cg"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
