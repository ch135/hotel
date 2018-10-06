package com.hotel.service;

/**
 * 
 * @author chenhao
 * @time 2018/4/13
 * <p>订单计时器接口</p>
 *
 */

public interface OrderQuartzService {

	//设置订单基本信息
	public void setBaseOrder();
	
	//房间入住--》清扫
	public void toClean();
	
	//房间清扫--》入住
	public void toHouseing();
}
