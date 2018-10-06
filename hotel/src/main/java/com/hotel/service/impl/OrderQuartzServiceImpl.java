package com.hotel.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hotel.model.HouseType;
import com.hotel.model.OrderInformation;
import com.hotel.service.HouseTypeService;
import com.hotel.service.OrderInformationService;
import com.hotel.service.OrderQuartzService;
import com.hotel.util.OrderUtil;
import com.hotel.util.SystemData;

/**
 * 
 * @author chenhao
 * @time 2018/4/13
 * <p>订单计时器接口实现类</p>
 *
 */
@Service("OrderQuartzService")
public class OrderQuartzServiceImpl implements OrderQuartzService{

	@Resource
	HouseTypeService houseservice;
	@Resource
	OrderInformationService orderservice;
	
	@Override
	public void setBaseOrder() {
		List<HouseType> houses;
		List<OrderInformation> orders=new ArrayList<OrderInformation>();
		
		houses=houseservice.getAllHouse();
		orders=OrderUtil.setBaseOrder(orders, houses);
		for(OrderInformation order : orders){
			orderservice.addOrder(order);
		}
	}

	@Override
	public void toClean() {
		List<OrderInformation> orders;
		
		orders=orderservice.getOrder(SystemData.HOUSE_IN);
		for(OrderInformation order : orders){
			order.setHouseStatus(SystemData.HOUSE_CLEAN);
			orderservice.changeStatus(order);
		}
	}

	@Override
	public void toHouseing() {
		List<OrderInformation> orders;
		
		orders=orderservice.getOrder(SystemData.HOUSE_CLEAN);
		for(OrderInformation order : orders){
			order.setHouseStatus(SystemData.HOUSE_IN);
			orderservice.changeStatus(order);
		}
	}

}
