package com.hotel.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hotel.dao.UserBaseInformationDao;
import com.hotel.model.UserBaseInformation;
import com.hotel.service.UserBaseInformationService;

/**
 * 
 * @author scholarly
 * @time 2018/4/9
 * 用户基本信息服务实现接口
 */

@Service("UserBaseInformationService")
public class UserBaseInformationServiceImpl implements UserBaseInformationService{

	@Resource
	UserBaseInformationDao UBIDao;
	
	@Override
	public UserBaseInformation userLoad(String account, String password) {
		UserBaseInformation UBInformation=UBIDao.selectByInformation(account, password);
		return UBInformation;
	}

	@Override
	public int userRegister(UserBaseInformation user) {
		
		int result = UBIDao.insertSelective(user);
		return result;
	}

	@Override
	public int passchange(UserBaseInformation user) {
		
		return UBIDao.updateByAccountSelective(user);
	}

}
