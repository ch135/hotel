package com.hotel.service.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hotel.dao.OrderInformationDao;
import com.hotel.model.OrderInformation;
import com.hotel.service.OrderInformationService;

/**
 * 
 * @author chenhao
 * @time 2018/4/13
 * <p>订单接口实现类</p>
 *
 */

@Service("OrderInformationService")
public class OrderInformationServiceImpl implements OrderInformationService{
	
	@Resource
	OrderInformationDao orderdao;

	@Override
	public int addOrder(OrderInformation orderinfor) {
		
		return orderdao.insertSelective(orderinfor);
	}

	@Override
	public List<OrderInformation> getOrder(Byte houseStatus) {
		
		return orderdao.getOrderByStatus(houseStatus);
	}

	@Override
	public int changeStatus(OrderInformation order) {
		
		return orderdao.updateByPrimaryKeySelective(order);
	}

	@Override
	public List<String> getHouseName(Date startdate,Date enddate,int type,int count) {
		
		return orderdao.getHouseByDate(startdate,enddate, type,count);
	}
}
