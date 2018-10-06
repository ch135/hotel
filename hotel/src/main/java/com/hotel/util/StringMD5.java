package com.hotel.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
/**
 * 
 * @author chenhao
 * @time 2018/4/9
 * 登录/注册数据加密
 */
public class StringMD5 {

	public static String MD5Digest(String inStr){
		MessageDigest md5=null;
		try {
			md5=MessageDigest.getInstance("MD5");
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		char[] charArray = inStr.toCharArray();  
        byte[] byteArray = new byte[charArray.length];  
        for (int i = 0; i < charArray.length; i++)  
        byteArray[i] = (byte) charArray[i];  
        byte[] md5Bytes = md5.digest(byteArray);  
        StringBuffer hexValue = new StringBuffer();  
        for (int i = 0; i < md5Bytes.length; i++){  
        int val = (md5Bytes[i]) & 0xff;  
        if (val < 16)  
        hexValue.append("0");  
        hexValue.append(Integer.toHexString(val));  
        }  
        return hexValue.toString(); 	
	}
}
