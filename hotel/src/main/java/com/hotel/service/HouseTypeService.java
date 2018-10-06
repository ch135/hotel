package com.hotel.service;

import java.util.List;

import com.hotel.model.HouseType;

/**
 * 
 * @author chenhao
 * @time 2018/4/13
 * <p>房间信息服务接口</p>
 *
 */

public interface HouseTypeService {

	//获取所有房间信息
	public List<HouseType> getAllHouse();
}
