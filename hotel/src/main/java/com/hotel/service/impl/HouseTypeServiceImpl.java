package com.hotel.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hotel.dao.HouseTypeDao;
import com.hotel.model.HouseType;
import com.hotel.service.HouseTypeService;

/**
 * 
 * @author chenhao
 * @time 2018/4/13
 * <p>房间信息实现接口</p>
 *
 */

@Service("HouseTypeService")
public class HouseTypeServiceImpl implements HouseTypeService{

	@Resource
	HouseTypeDao house;
	
	//获取所有房间信息
	@Override
	public List<HouseType> getAllHouse() {
		
		return house.getAllHouse();
	}

}
