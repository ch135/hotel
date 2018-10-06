package com.hotel.service;

import com.hotel.model.UserBaseInformation;

/**
 * 
 * @author scholarly
 * @time 2018/4/9
 * 用户基本信息接口
 */
public interface UserBaseInformationService {
	
	//用户登录
	public UserBaseInformation userLoad(String account,String password);
	
	//用户登录
	public int userRegister(UserBaseInformation user);
	
	//用户密码更改
	public int passchange(UserBaseInformation user);
}
