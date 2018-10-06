package com.hotel.dao;

import com.hotel.model.UserExtraInformation;

public interface UserExtraInformationDao {
	UserExtraInformation selectByAccount(String user_account);
	
    int deleteByPrimaryKey(Integer id);

    int insert(UserExtraInformation record);

    int insertSelective(UserExtraInformation record);

    UserExtraInformation selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserExtraInformation record);

    int updateByPrimaryKey(UserExtraInformation record);
    
    int updateByAccount(UserExtraInformation recode);
}