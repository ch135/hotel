package com.hotel.service;

import com.hotel.model.UserExtraInformation;

/**
 * 
 * @author chenhao
 * @time 2018/4/10
 * <p>用户扩展信息服务类</p>
 */

public interface UserExtraInformationService {

	//获取用户信息
	public UserExtraInformation selectByAccount(String account);
	
	//添加用户信息
	public int addUserInformation(UserExtraInformation user);
	
	//修改用户照片
	public int changeImage(UserExtraInformation user);
}
