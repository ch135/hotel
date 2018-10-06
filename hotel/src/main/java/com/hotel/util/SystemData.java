package com.hotel.util;

public class SystemData {

	//用户身份:普通用户
	public static final Byte USER_ORDINARY=0;
	
	//用户身份:管理员
	public static final Byte USER_MANAGER=1;
	
	//房间状态：空房
	public static final Byte HOUSE_NULL=1;
	
	//房间状态：预订
	public static final Byte HOUSE_RESERVE=2;
	
	//房间状态：入住
	public static final Byte HOUSE_IN=3;
	
	//房间状态：清扫中
	public static final Byte HOUSE_CLEAN=4;
	
	//房间状态：退房
	public static final Byte HOUSE_LEAVE=5;
	
	//订单状态：未完成订单
	public static final Byte ORDER_USING=1;
	
	//订单状态：废弃订单
	public static final Byte ORDER_CANCEL=2;
	
	//订单状态：完成订单
	public static final Byte ORDER_FINISH=2;
}
