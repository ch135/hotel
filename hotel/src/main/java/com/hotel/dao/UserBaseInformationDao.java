package com.hotel.dao;

import com.hotel.model.UserBaseInformation;

public interface UserBaseInformationDao {
    int deleteByPrimaryKey(Integer id);

    int insert(UserBaseInformation record);

    int insertSelective(UserBaseInformation record);

    UserBaseInformation selectByPrimaryKey(Integer id);
    
    UserBaseInformation selectByInformation(String account,String password);

    int updateByPrimaryKeySelective(UserBaseInformation record);

    int updateByPrimaryKey(UserBaseInformation record);
    
    int updateByAccountSelective(UserBaseInformation record);
}