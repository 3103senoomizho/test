package com.internousdev.webproj2.action;

import com.internousdev.webproj2.dao.LoginDAO;
import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {
	private String username;
	private String password;

    public String execute(){
    /**
     * ↓テキストに記述なし。ERRORの場合の指示をつくってあげること。
     */
    	LoginDAO LoginDAO = new LoginDAO();
    	boolean loginflg = LoginDAO.select(username, password);

    	if (loginflg) {
    		return SUCCESS;
		} else {
			return ERROR;
		}

    }

    public String getUsername(){
    	return username;
    }

    public void setUsername(String username){
    	this.username=username;
    }
    public String getPassword(){
    	return password;
    }
    public void setPassword(String password){
    	this.password=password;
    }
}