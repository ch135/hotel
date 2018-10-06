package com.hotel.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 
 * @author chenhao
 * @time 2018/4/11
 * <p>日期工具类</p>
 */

public class DateUtil {

	// 格式化日期（格式是yyyy-MM-dd）
	public static String format() {
		String date=null;
		Date source=new Date();
		try{
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
			date=simpleDateFormat.format(source);
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return date;
	}
	
	//获取当前datatime
	public static String getDate(){
		Date date=new Date();
		DateFormat simpledateformat=new SimpleDateFormat();
		String datestr=simpledateformat.format(date);
		
		return datestr;
	}
	
	//String 转化为Date
	public static Date stringToDate(String sourcedate){
		Date date=null;
		sourcedate=sourcedate+" 00:00:00";
		
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		try {
			date=sdf.parse(sourcedate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		return date;
	}
	
	//时间段处理
	public static int dateDeal(String startdate,String enddate){
		int sday;
		int eday;
		int count;
		
		String[] sdates=startdate.split("-");
		String[] edates=enddate.split("-");
		sday=Integer.parseInt(sdates[2]);
		eday=Integer.parseInt(edates[2]);
		count=eday-sday;
		
		return count;
	}
}
