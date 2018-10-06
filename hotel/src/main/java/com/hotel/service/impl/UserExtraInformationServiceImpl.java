package com.hotel.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hotel.dao.UserExtraInformationDao;
import com.hotel.model.UserExtraInformation;
import com.hotel.service.UserExtraInformationService;

/**
 * 
 * @author chenhao
 * @time 2018/4/11
 * <p>用户额外信息服务类</p>
 */

@Service("UserExtraInformationService")
public class UserExtraInformationServiceImpl implements UserExtraInformationService{

	@Resource
	UserExtraInformationDao UEIDao;
	
	@Override
	public UserExtraInformation selectByAccount(String account) {
		
		return UEIDao.selectByAccount(account);
	}

	@Override
	public int addUserInformation(UserExtraInformation user) {
		
		return UEIDao.insertSelective(user);
	}

	@Override
	public int changeImage(UserExtraInformation user) {
		
		return UEIDao.updateByAccount(user);
	}

}
