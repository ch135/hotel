package com.hotel.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

/**
 * Servlet Filter implementation class EocodingFitler
 */
public class EncodingFilter implements Filter {

	private String charEncoding = null;
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		charEncoding=filterConfig.getInitParameter("encoding");
		if (charEncoding == null){
			throw new ServletException("The Encoding's Type is NULL! ");
		}
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		boolean encodingResult=!charEncoding.equals(request.getCharacterEncoding());
		if(encodingResult){
			request.setCharacterEncoding(charEncoding);
		}
		response.setCharacterEncoding(charEncoding);
		chain.doFilter(request, response);
	}

	@Override
	public void destroy() {

		
	}

	

}
