package com.hotel.util;

import java.util.Date;
import java.util.List;

import com.hotel.model.HouseType;
import com.hotel.model.OrderInformation;

/**
 * 
 * @author chenhao
 * @time 2018/4/13
 * <p>订单工具类</p>
 *
 */

public class OrderUtil {

	//设置初始订单信息
	public static List<OrderInformation> setBaseOrder(List<OrderInformation> orders,List<HouseType> houses){
		OrderInformation order;
		String house_number;
		Byte type;
		
		for(HouseType house : houses){
			order=new OrderInformation();
			house_number=house.getNumber();
			type=house.getHouseTypeInt();
			
			order.setHouseNumber(house_number);
			order.setHouseType(type);
			order.setGmtCteat(new Date());
			order.setGmtModeify(new Date());
			
			orders.add(order);
		}
		
		return orders;
	}
}
