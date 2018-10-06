package com.hotel.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hotel.service.OrderInformationService;
import com.hotel.util.DateUtil;

/**
 * 
 * @author chenhao
 * @time 2018/4/14
 * <p>璁㈠崟鎺у埗鍣�</p>
 *
 */

@Controller
@RequestMapping("order")
public class OrderController {

	@Resource
	OrderInformationService orderservice;
	
	//鑾峰彇绌虹疆鎴块棿鏁扮洰
	@RequestMapping("getNumber")
	public void getHouseNumber(int number,int numdate,String startdate,String enddate,HttpServletResponse response){
		PrintWriter out=null;
		try {
			out=response.getWriter();
		} catch (IOException e) {
			e.printStackTrace();
		}
		Date sdate;
		Date edate;
		List<String> housename;
		int house_nunmber;
		
		sdate=DateUtil.stringToDate(startdate);
		edate=DateUtil.stringToDate(enddate);
		if(number!=0){
			housename=orderservice.getHouseName(sdate,edate, number,numdate);
			house_nunmber=housename.size();
			out.println(house_nunmber);
		}
	}
}
