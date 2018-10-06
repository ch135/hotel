package com.hotel.listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class SystemInit implements ServletContextListener{


	@Override
	public void contextInitialized(ServletContextEvent sce) {
		
		System.out.println("System Start.");
		
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		
		System.out.println("System Stop.");
		
	}

}
