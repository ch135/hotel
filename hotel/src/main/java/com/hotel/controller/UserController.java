package com.hotel.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSON;
import com.hotel.model.UserBaseInformation;
import com.hotel.model.UserExtraInformation;
import com.hotel.service.UserBaseInformationService;
import com.hotel.service.UserExtraInformationService;
import com.hotel.util.StringMD5;
import com.hotel.util.UploadUtil;
import com.hotel.util.UserUtil;

/**
 * 
 * @author chenhao
 * @time 2018/4/9
 * <p>用户管理控制器</p>
 *
 */

@Controller
@RequestMapping("user")
public class UserController {

	@Resource
	UserBaseInformationService userservice;
	@Resource
	UserExtraInformationService userexinservice;
	
	//用户登录
	@RequestMapping("load")
	public void login(@ModelAttribute UserBaseInformation baseinformation,HttpServletResponse response){
		String account=baseinformation.getAccount();
		String password=baseinformation.getPassword();
		Byte identity;
		PrintWriter out=null;
		try {
			out=response.getWriter();
		} catch (IOException e) {
			e.printStackTrace();
		}

		password=StringMD5.MD5Digest(password);
		
		UserBaseInformation binformation=userservice.userLoad(account, password);
		
		//0：普通用户；1：酒店管理员 2:登录失败
		if(null!=binformation){
			UserUtil.addCookie(response, account);
			identity=binformation.getIdentity();
			if(identity==0){
				out.println("/hotel/hotel_user/index.html");
			}else if(identity==1){
				out.println("/hotel/hotel_manager/index.html");
			}
		}else{
			out.println("2");
		}
		out.flush();
	}

	//用户注册
	@RequestMapping("register")
	public void register(@ModelAttribute UserBaseInformation user,HttpServletResponse response){
		String account=user.getAccount();
		PrintWriter out=null;
		try {
			out=response.getWriter();
		} catch (IOException e) {
			e.printStackTrace();
		}
		UserExtraInformation userextrainfor = new UserExtraInformation();
		
		user=UserUtil.setMessage(user);
		int result = userservice.userRegister(user);
		
		//添加用户额外信息
		userextrainfor=UserUtil.setExtraInfor(userextrainfor, account);
		userexinservice.addUserInformation(userextrainfor);
		
		if(result==1){
			UserUtil.addCookie(response, account);
			out.println("0");
		}else{
			out.println("1");
		}
	}
	
	//密码更改
	@RequestMapping("passchange")
	public void passChange(@ModelAttribute UserBaseInformation user,HttpServletResponse response){
		PrintWriter out=null;
		try {
			out=response.getWriter();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		user=UserUtil.setChangeInformation(user);
		int result = userservice.passchange(user);
		if(result==1){
			out.println("0");
		}else{
			out.println("1");
		}
	}
	
	//获取用户额外信息
	@RequestMapping("extrainfor")
	public void extrainfor(HttpServletResponse response,String account){
		PrintWriter out=null;
		try {
			out=response.getWriter();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		UserExtraInformation extrainfor = userexinservice.selectByAccount(account);
		String result=JSON.toJSONString(extrainfor);
		out.println(result);
	}
	
	//头像更改
	@RequestMapping("upload")
	public String pictureUpload(MultipartFile image,HttpServletRequest request) throws IllegalStateException, IOException, ServletException{
		String url="";
		String account=UserUtil.getCookie(request);
		UserExtraInformation user=new UserExtraInformation();
		
		if(image!=null){
			url=UploadUtil.editUploadFile(request, image);
		}
		user=UserUtil.setImgInfor(user, account, url);
		userexinservice.changeImage(user);
		
		return "redirect:/hotel_user/personility.html";
	}
	
}
