package com.hotel.test;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * 
 * @author chenhao
 * @time 2018/4/12
 * <p>定时器测试</p>
 *
 */

@Component()
public class quartzTest {

	@Scheduled(cron="0/10 * * * * ?")
	public void TaskJob(){
		System.out.println("定时器测试");
	}
}
