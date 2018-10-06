package com.hotel.util;

import java.util.Date;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hotel.model.UserBaseInformation;
import com.hotel.model.UserExtraInformation;

/**
 * 
 * @author chenhao
 * @time 2018/4/9
 * 用户信息工具类
 *
 */
public class UserUtil {

	//设置用户信息
	public static UserBaseInformation setMessage(UserBaseInformation user){
		String password=user.getPassword();
		password=StringMD5.MD5Digest(password);
		
		user.setIdentity(SystemData.USER_ORDINARY);
		user.setGmtCreat(new Date());
		user.setGmtModify(new Date());
		user.setPassword(password);
		
		return user;
	}
	
	//更改用户信息
	public static UserBaseInformation setChangeInformation(UserBaseInformation user){
		String password=user.getPassword();
		password=StringMD5.MD5Digest(password);
		
		user.setGmtModify(new Date());
		user.setPassword(password);
		
		return user;
	}
	
	//添加当前用户cookie
	public static void addCookie(HttpServletResponse response,String account){
		Cookie cookie=new Cookie("user",account);
		cookie.setMaxAge(30*60);
		cookie.setPath("/");
		response.addCookie(cookie);
	}
	
	//获取当前用户cookie
	public static String getCookie(HttpServletRequest request){
		String account=null;
		Cookie[] cooks=request.getCookies();
		
		for(Cookie cook : cooks){
			if(cook.getName().equals("user")){
				account=cook.getValue();
				return account;
			}
		}
		
		return null;
	}
	
	//添加用户额外信息
	public static UserExtraInformation setExtraInfor(UserExtraInformation user,String account){
		
		user.setUserAccount(account);
		user.setGmtModify(new Date());
		user.setGmtCreat(new Date());
		return user;
	}
	
	//设置用户照片信息
	public static UserExtraInformation setImgInfor(UserExtraInformation user,String account,String url){
		
		user.setUserAccount(account);
		user.setPicture(url);
		user.setGmtModify(new Date());
		
		return user;
	}
}
