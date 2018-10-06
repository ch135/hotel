package com.hotel.util;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

/**
 * 
 * @author scholarly
 * @time 2018/4/11
 *<p>文件上传工具类</p>
 *
 */

public class UploadUtil {

	//图片上传
	public static String editUploadFile(HttpServletRequest request, MultipartFile items)
			throws IllegalStateException, IOException {
		String date = DateUtil.format();
		String path = "/home/hotel/upload/" + date;
		String name; // 原始文件名
		String fileName = ""; // 最终文件名
		String url = ""; // 图片保存路径

		File dir = new File(path);
		if (!dir.exists()) {
			dir.mkdirs();
		}

		if (items != null) {
			name = items.getOriginalFilename();
			if (name.endsWith(".jpg") || name.endsWith(".png") || name.endsWith(".gif") || name.endsWith(".JPG")
					|| name.endsWith(".PNG") || name.endsWith(".GIF")) {
				fileName = UUID.randomUUID() + name.substring(name.lastIndexOf("."));
				File file = new File(path, fileName);
				items.transferTo(file);
			}
			url = "/hotel/upload/" + date + "/" + fileName;
		}
		return url;
	}
}
