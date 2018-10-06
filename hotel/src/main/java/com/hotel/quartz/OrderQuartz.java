package com.hotel.quartz;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.hotel.service.OrderQuartzService;

/**
 * 
 * @author chenhao
 * @time 2018/4/13
 * <p>订单时钟控制器</p>
 *
 */

@Component()
public class OrderQuartz {

	private static Logger log = Logger.getLogger(OrderQuartz.class);
	@Autowired
	OrderQuartzService order;
	
	//添加基本订单信息：00:00执行
	@Scheduled(cron="0 0 0 * * ?")
	public void setBaseOrder(){
		log.info("添加基本订单信息");
		order.setBaseOrder();
	}
	
	//房间入住--》清扫：11：30执行
	@Scheduled(cron="0 30 11 * * ?")
	public void changeStatus(){
		log.info("添加基本订单信息");
		order.toClean();
	}
	
	//房间清扫--》入住：12：00执行
	@Scheduled(cron="0 0 12 * * ?")
	public void changeStatu(){
		log.info("添加基本订单信息");
		order.toHouseing();
	}
}
