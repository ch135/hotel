package com.hotel.dao;

import java.util.List;

import com.hotel.model.HouseType;

public interface HouseTypeDao {
    int deleteByPrimaryKey(Byte id);

    int insert(HouseType record);

    int insertSelective(HouseType record);

    HouseType selectByPrimaryKey(Byte id);

    int updateByPrimaryKeySelective(HouseType record);

    int updateByPrimaryKey(HouseType record);

    List<HouseType> getAllHouse();
}