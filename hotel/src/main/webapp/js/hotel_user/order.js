/**
 * @author chenhao
 * @time 2018.4.7
 * 日期调用函数
 */
$(data_init());

/**
 * @author chenhao
 * @time 2018.4.14
 * <p>获取每种房间的数目</p>
 */
var getHouseNum=function(){
	var url=window.location.href;
	var number=url.split("=");
	var startdate=$("#startDate").val();
	var enddate=$("#endDate").val();
	var NumDate = $('.NumDate').text();
	
	$.ajax({
		url : '/hotel/order/getNumber.do',
		type : 'post',
		data :{
			"number" : number[1],
			"startdate" : startdate,
			"enddate" : enddate,
			"numdate" : NumDate,
		},
		success : function(result){
			var text="";
			var number=1;	
			
			$("#exist-number").html(result);
			console.log(result);
			while(result>0){
				text+="<option>"+number+"</option>";
				result=result-1;
				number++;
			}
			$("#need-number").html(text);
		},
		error : function(e){
			console.log(e);
			console.log("获取房间数目失败");
		}
	})
}

/**
 * 
 * @author chenhao
 * @time  2018/4/10
 * 设置不同房间信息
 * 
 */
$(function(){
	var url=window.location.href;
	var number=url.split("=");
	var user=$("#user").html();
	
	if(user=="个人中心"){
		window.location.href="/hotel/hotel_user/signin.html"
	}else{
		if(number[1]==1){
			$("#house").attr("src","../img/house1.jpg");
			$("#house").attr("alt","单人间");
			$("#message").html("" +
					"<li>面积15-20㎡ 位于 2 层</li>"+
			        "<li>单床（不可以加床）</li>"+
			        "<li>独立卫浴 有窗</li>"+
			        "<li>免费WiFi 高清智能电视 电脑</li>"
			);
			$("#house-price").html("70元<small class=\"text-muted\">/ 晚</small>");
			$("#describe").html("实惠单人房&nbsp;&nbsp; 出差力荐");
			$("#all-money").html("70.00");
			$("#pay-money").html("70.00");
		}else if(number[1]==2){
			$("#house").attr("src","../img/house2.jpg");
			$("#house").attr("alt","双人间");
			$("#message").html("" +
					"<li>面积20-30㎡ 位于 2-3 层</li>"+
			        "<li>双床（不可以加床）</li>"+
			        "<li>独立卫浴 有窗</li>"+
			        "<li>免费WiFi 高清智能电视 电脑</li>"
			);
			$("#house-price").html("150元<small class=\"text-muted\">/ 晚</small>");
			$("#describe").html("实用双人房&nbsp;&nbsp; 情侣必备");
			$("#all-money").html("150.00");
			$("#pay-money").html("150.00");
		}else if(number[1]==3){
			$("#house").attr("src","../img/house3.jpg");
			$("#house").attr("alt","三人间");
			$("#message").html("" +
					"<li>面积30-40㎡ 位于 3-4 层</li>"+
			        "<li>三床（不可以加床）</li>"+
			        "<li>独立卫浴 有窗</li>"+
			        "<li>免费WiFi 高清智能电视 电脑</li>"
			);
			$("#house-price").html("200元<small class=\"text-muted\">/ 晚</small>");
			$("#describe").html("旅游必备&nbsp;&nbsp; 家庭首选");
			$("#all-money").html("200.00");
			$("#pay-money").html("200.00");
		}
		getHouseNum();
	}
})

/**
 * @author chenhao
 * @time 2018/3/6
 * 房间数目变化，支付价格改变
 */
$("#need-number").change(function(){
	var number=$(this).val();
	var price=$("#house-price").text().split("元");
	var day_number=$(".NumDate").text();
	
	$("#all-money").text(price[0]*number*day_number).append(".00");
	$("#pay-money").text(price[0]*number*day_number).append(".00");
	
	var text="";
	var time=0;
	while(number>time) {
		time+=1;
		text+='<tr>\
	    		<td>房间'+time+'</td>\
	       		<td>\
	       			<input type="text" class="form-control" id="Name'+time+ '" placeholder="负责人姓名" required>\
	       		</td>\
	       	   </tr>\
	       		<tr>\
	   			<td>联系电话</td>\
	   			<td>\
	   				<input type="text" class="form-control" id="phone-number'+time+'" required>\
	   			</td>\
	   		</tr>';
	}
    $("#person-message").html(text);
    
});



/**
 * @author chenhao
 * @time 2018/4/14
 * <p>订单支付</p>
 */
$("#pay").click(function(){
	var number=$("#need-number").val();
	if(number==null){
		return false;
	}
	var exirtnumber=$("#exist-number").html();
	var nownunmber=exirtnumber-number;
	var time=0;
	var text="";
	var price=$("#house-price").html();
	
	price=price.split("元");
	while(number>0){
		var name=$("#Name"+number).val();
		var phone=$("#phone-number"+number).val();
		if(name==""||phone==""){
			alert("请填写完整信息！");
			return false;
		}
		number--;
	}
	setTimeout(function(){
		var text="";
		var number=1;
		
		alert("支付成功！");
		$("#exist-number").html(nownunmber);
		while(nownunmber){
			text+="<option>"+number+"</option>";
			nownunmber--;
			number++;
		}
		$("#need-number").html(text);
		$("#person-message").html('<tr>\
	    		<td>房间'+time+'</td>\
	       		<td>\
	       			<input type="text" class="form-control" id="Name1" placeholder="负责人姓名" required>\
	       		</td>\
	       	   </tr>\
	       		<tr>\
	   			<td>联系电话</td>\
	   			<td>\
	   				<input type="text" class="form-control" id="phone-number1" required>\
	   			</td>\
	   		</tr>'	
		);
		$("#all-money").html(price[0]+".00");
		$("#pay-money").html(price[0]+".00");
	},1000);
})