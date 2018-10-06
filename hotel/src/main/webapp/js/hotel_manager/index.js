/**
 * @author chenhao
 * @time 2018.3.7
 * 菜单栏图标
 */
feather.replace()

/**
 * @author chenhao
 * @time 2018.3.7
 * 日期函数
 */
;!function () {
    laydate({})
}();

/**
 * @author chenhao
 * @time 2018/3/7
 * 预订信息查询
 */
$("#before-message").click(function () {
    $("main").html("<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center\">\
        <h2 class=\"h2\">预订信息</h2>\
       	<div class=\"btn-toolbar mb-2 mb-md-0\">\
		  <div class=\"btn-group mr-2\">\
            <input class=\"text-center rounded\" type=\"text\" id=\"startdate\" placeholder=\"入住日期\" onClick=\"laydate()\"/>&nbsp;&nbsp;\
            <input class=\"text-center rounded\" type=\"text\" id=\"enddate\" placeholder=\"离开日期\" onClick=\"laydate()\"/>\
          </div>\
          <a class=\"btn btn-outline-primary\" href=\"#\" onclick=\"selectorder()\">搜&nbsp;索</a>\
        </div>\
      </div>\
      <div class=\"table-responsive\" id=\"order_table\">\
        <table class=\"table table-striped table-sm text-center\">\
          <thead>\
            <tr>\
              <th>编&nbsp;&nbsp;号</th>\
              <th>房间类型</th>\
              <th>入住日期</th>\
              <th>离开日期</th>\
              <th>房&nbsp;&nbsp;号</th>\
              <th>支付金额<small><strong>（元）</strong></small></th>\
              <th>手机号</th>\
              <th>操&nbsp;&nbsp;作</th>\
            </tr>\
          </thead>\
          <tbody>\
                <tr id=\"house1\">\
                    <td>1</td>\
                    <td>实惠单人房</td>\
                    <td>2018-05-20</td>\
                    <td>2018-05-21</td>\
                    <td>201</td>\
                    <td>70.00</td>\
                    <td>15768616200</td>\
                    <td>\
                        <a href=\"#\" onclick=\"dealHouse('house1','取消订单')\">取消订单</a>&nbsp;&nbsp\
                        <a href=\"#\" onclick=\"dealHouse('house1','用户入住')\">用户入住</a>\
                    </td>\
                </tr>\
                <tr id=\"house2\">\
                    <td>2</td>\
                    <td>实用双人房</td>\
                    <td>2018-05-20</td>\
                    <td>2018-05-21</td>\
                    <td>304</td>\
                    <td>150.00</td>\
                    <td>15768616200</td>\
                    <td>\
                        <a href=\"#\" onclick=\"dealHouse('house2','用户退房')\">用户退房</a>\
                    </td>\
                </tr>\
                <tr id=\"house3\">\
                    <td>3</td>\
                    <td>家庭三人房</td>\
                    <td>2018-05-20</td>\
                    <td>2018-05-21</td>\
                    <td>306</td>\
                    <td>200.00</td>\
                    <td>15768616200</td>\
                    <td>\
                        <a href=\"#\" onclick=\"dealHouse('house3','取消订单')\">取消订单</a>&nbsp;&nbsp\
                        <a href=\"#\" onclick=\"dealHouse('house3','用户入住')\">用户入住</a>\
                    </td>\
                </tr>\
                <tr id=\"house4\">\
                    <td>4</td>\
                    <td>家庭三人房</td>\
                    <td>2018-05-20</td>\
                    <td>2018-05-21</td>\
                    <td>307</td>\
                    <td>200.00</td>\
                    <td>15768616200</td>\
                    <td>\
                       <a href=\"#\" onclick=\"dealHouse('house4','取消订单')\">取消订单</a>&nbsp;&nbsp\
                       <a href=\"#\" onclick=\"dealHouse('house4','用户入住')\">用户入住</a>\
                    </td>\
                </tr>\
                <tr id=\"house5\">\
                    <td>5</td>\
                    <td>家庭三人房</td>\
                    <td>2018-05-20</td>\
                    <td>2018-05-21</td>\
                    <td>308</td>\
                    <td>200.00</td>\
                    <td>15768616200</td>\
                    <td>\
                        <a href=\"#\" onclick=\"dealHouse('house5','取消订单')\">取消订单</a>&nbsp;&nbsp\
                        <a href=\"#\" onclick=\"dealHouse('house5','用户入住')\">用户入住</a>\
                    </td>\
                </tr>\
                <tr id=\"house6\">\
                    <td>6</td>\
                    <td>家庭三人房</td>\
                    <td>2018-05-20</td>\
                    <td>2018-05-21</td>\
                    <td>401</td>\
                    <td>200.00</td>\
                    <td>15768616200</td>\
                    <td>\
                        <a href=\"#\" onclick=\"dealHouse('house6','用户退房')\">用户退房</a>\
                    </td>\
                </tr>\
                <tr id=\"house7\">\
                    <td>7</td>\
                    <td>家庭三人房</td>\
                    <td>2018-05-20</td>\
                    <td>2018-05-21</td>\
                    <td>402</td>\
                    <td>200.00</td>\
                    <td>15768616200</td>\
                    <td>\
                        <a href=\"#\" onclick=\"dealHouse('house7','用户退房')\">用户退房</a>\
                    </td>\
                </tr>\
                <tr id=\"house8\">\
                    <td>8</td>\
                    <td>实用双人房</td>\
                    <td>2018-05-20</td>\
                    <td>2018-05-21</td>\
                    <td>305</td>\
                    <td>150.00</td>\
                    <td>15768616200</td>\
                    <td>\
                        <a href=\"#\" onclick=\"dealHouse('house8','用户退房')\">用户退房</a>\
                    </td>\
                </tr>\
            </tbody>\
        </table><br />\
        <div class=\"container\">\
            <div class=\"row justify-content-end\">\
                <div class=\"order-md-2 mb-4\">\
                    <ul class=\"pagination\">\
                        <li class=\"page-item\">\
                            <a class=\"page-link\" href=\"#\">Previous</a>\
                        </li>\
                        <li class=\"page-item active\">\
                            <a class=\"page-link\" href=\"#\">1</a>\
                        </li>\
                        <li class=\"page-item\">\
                            <a class=\"page-link\" href=\"#\">Next</a>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
        </div>\
        </div>\
      </div>");
});

/**
 * @author chenhao
 * @time 2018/4/15
 * <p>预订信息处理</p>
 */
var dealHouse = function(data,type){
	var message1='是否取消订单！';
	var message2='是否确认入住！';
	var message3='是否确认退房';
	if(type=='取消订单'){
		if(confirm(message1)==true){
			setTimeout(function(){
				$("#"+data).hide();
			},800);
		}
	}else if(type=='用户入住'){
		if(confirm(message2)==true){
			setTimeout(function(){
				$("#"+data).hide();
			},800);
		}
	}else if(type=='用户退房'){
		if(confirm(message3)==true){
			setTimeout(function(){
				$("#"+data).hide();
			},800);
		}
	}
}

/**
 * @author chenhao
 * @time 2018/4/15
 * <p>搜索订单</p>
 */
var selectorder=function(){
	var start = $("#startdate").val();
	var end = $("#enddate").val();
	
	if(start!=""&&end!=""){
		$("#order_table").html('<main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">\
        	<h3 class="text-center" style="margin-top: 150px">您对应的订单不存在！</h3>\
        </main>');
	}else{
		alert("填写完整信息");
	}
}

/**
 * @author chenhao
 * @time 2018.3.7
 * 房间管理
 */
$("#house-manage").click(function () {
    $("main").html("<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center\">\
		        <h1 class=\"h2\">房间管理</h1>\
		        <div class=\"btn-toolbar mb-2 mb-md-0\">\
		          <div class=\"btn-group mr-2\">\
		              <input class=\"text-center rounded\" type=\"text\" id=\"findDate\"  placeholder=\"入住日期\" onClick=\"laydate()\"/>&nbsp;&nbsp;\
		          </div>\
		          <a class=\"btn btn-outline-primary\" href=\"#\"onclick=\"select()\">搜&nbsp;索</a>\
		        </div>\
		      </div>\
		      <div class=\"table-responsive\">\
		        <table class=\"table table-striped table-sm text-center\">\
		          <thead>\
		            <tr>\
		              <th>编&nbsp;&nbsp;号</th>\
		              <th>房&nbsp;&nbsp;号</th>\
		              <th>房间类型</th>\
		              <th>手&nbsp;机&nbsp;号</th>\
		              <th>状&nbsp;&nbsp;态</th>\
		            </tr>\
		          </thead>\
		          <tbody>\
		                <tr>\
		                    <td>1</td>\
		                    <td>201</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status1\">空&nbsp;&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>2</td>\
		                    <td>202</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status2\">已&nbsp;预&nbsp;订</td>\
		                </tr>\
		                <tr>\
		                    <td>3</td>\
		                    <td>203</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status3\">入&nbsp;住&nbsp;中</td>\
		                </tr>\
		                <tr>\
		                    <td>4</td>\
		                    <td>204</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status4\">清&nbsp;扫&nbsp;中</td>\
		                </tr>\
		                <tr>\
		                    <td>5</td>\
		                    <td>205</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status5\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>6</td>\
		                    <td>206</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status6\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>7</td>\
		                    <td>207</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status7\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>8</td>\
		                    <td>208</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status8\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>9</td>\
		                    <td>209</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status9\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>10</td>\
		                    <td>210</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status10\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>11</td>\
		                    <td>211</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status11\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>12</td>\
		                    <td>212</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status12\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>13</td>\
		                    <td>213</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status13\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>14</td>\
		                    <td>214</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status14\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>15</td>\
		                    <td>215</td>\
		                    <td>实惠单人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status15\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>16</td>\
		                    <td>301</td>\
		                    <td>实用双人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status16\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>17</td>\
		                    <td>302</td>\
		                    <td>实用双人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status17\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>18</td>\
		                    <td>303</td>\
		                    <td>实用双人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status18\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>19</td>\
		                    <td>304</td>\
		                    <td>实用双人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status19\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>20</td>\
		                    <td>305</td>\
		                    <td>实用双人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status20\">以&nbsp;退&nbsp;房</td>\
		                </tr>\
		                <tr>\
		                    <td>21</td>\
		                    <td>306</td>\
		                    <td>家庭三人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status21\">入&nbsp;住&nbsp;中</td>\
		                </tr>\
		                <tr>\
		                    <td>22</td>\
		                    <td>307</td>\
		                    <td>家庭三人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status22\">入&nbsp;住&nbsp;中</td>\
		                </tr>\
		                <tr>\
		                    <td>23</td>\
		                    <td>308</td>\
		                    <td>家庭三人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status23\">入&nbsp;住&nbsp;中</td>\
		                </tr>\
		                <tr>\
		                    <td>24</td>\
		                    <td>401</td>\
		                    <td>家庭三人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status24\">入&nbsp;住&nbsp;中</td>\
		                </tr>\
		                <tr>\
		                    <td>25</td>\
		                    <td>402</td>\
		                    <td>家庭三人房</td>\
		                    <td>15768616200</td>\
		                    <td id=\"status25\">入&nbsp;住&nbsp;中</td>\
		                </tr>\
		            </tbody>\
		        </table>\
		      </div>");
});

/**
 * @author chenhao
 * @time 2018.3.7
 * 入住登记
 */
$("#regeister").click(function () {
    $("main").html(
        '<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom">\
                <h1 class="h2">入住登记</h1>\
                <div class="col-md-3 mb-2 mb-md-0">\
                  <div class="btn-group mr-2">\
                      <select class="custom-select d-block w-100" id="house-type">\
    					  <option>选择房型</option>\
                          <option>单人间</option>\
                          <option>双人间</option>\
                          <option>三人间</option>\
                      </select>\
                  </div>&nbsp;&nbsp;\
                  <span>剩余<strong id="exist-number"></strong>间</span>\
                </div>\
              </div><br />\
              <div class="row">\
                <div class=\"col-12\">\
                    <form>\
                      <h4>\
                          <strong>订单信息</strong>\
                      </h4><br />\
                        <div class="table-responsive">\
                          <table class="table table-sm">\
                              <tbody>\
                                  <tr>\
                                      <td>房型信息：</td>\
                                      <td id="house_name"></td>\
                                  </tr>\
                                  <tr>\
                                      <td>居住时间：</td>\
                                      <td>\
                                          <div id="checkinout">\
                                            <div id="firstSelect" style="width:100%;">\
                                                <span>""</span>\
                                                <input id="startDate" type="text" value=""style="" readonly>\
                                            </div>\
                                            <div class="Date_lr" style="float:right;">\
                                                <span>""</span>\
                                                <input id="endDate" type="text" value="" style="" readonly>\
                                            </div>\
                                            <span class="span21">共<span class="NumDate">1</span>晚</span>\
                                          </div>\
	                                      <div class="mask_calendar">\
	                                        <div class="calendar"></div>\
	                                        <div class="calendar_tishi">请选择离店日期...</div>\
	                                      </div>\
                                      </td>\
                                  </tr>\
                                  <tr>\
                                    <td>\
                                      <span>房间数量:</span><br />\
                                    </td>\
                                    <td>\
                                      <select class="custom-select d-block w-100" id=\"need-number\"></select>\
                              		  <span id="house-price" hidden="hidden">70元</span>\
                                    </td>\
                                  </tr>\
                                  <tr>\
                                      <td>房费总计：</td>\
                                      <td><strong id="all-money"></strong>元</td>\
                                  </tr>\
                              </tbody>\
                          </table>\
                      </div><br /><br />\
                      <h4>\
                            <strong>入住信息</strong>\
                      </h4><br />\
                      <table class="table table-sm">\
                           <tbody id="person-message">\
                               <tr>\
                                   <td>房间1</td>\
                                   <td>\
                                       <input type="text" class="form-control" id="Name1" placeholder="负责人姓名" required>\
                                   </td>\
                               </tr>\
                               <tr>\
                                   <td>联系电话</td>\
                                   <td>\
                                       <input type="text" class="form-control" id="phone-number" required>\
                                   </td>\
                               </tr>\
                           </tbody>\
                      </table><br /><br />\
                      <button class="btn btn-primary btn-lg btn-block" onclick="pay()">支付&nbsp;<span id="pay-money">`</span>元</button>\
                </form>\
                </div>\
            </div>'
    );
    initSelect();
    $(data_init());
    
    $("#house-type").change(function(){
    	var type=this.value;
    	getHouseNum(type);
    })
});

/**
 * @author chenhao
 * @time 2018/4/15
 * <p>获取房间数目</p>
 */
var getHouseNum=function(type){
	var number;
	if(type=="单人间"){
		number=1;
	}else if(type=='双人间'){
		number=2;
	}else if(type=="三人间"){
		number=3;
	}else if(type=="选择房型"){
		return true;
	}
	
	var startdate=$("#startDate").val();
	var enddate=$("#endDate").val();
	var NumDate = $('.NumDate').text();
	
	$.ajax({
		url : '/hotel/order/getNumber.do',
		type : 'post',
		data :{
			"number" : number,
			"startdate" : startdate,
			"enddate" : enddate,
			"numdate" : NumDate,
		},
		success : function(result){
			var text="";
			var number=1;	
			
			$("#exist-number").html(result);
			while(result>0){
				text+="<option>"+number+"</option>";
				result=result-1;
				number++;
			}
			$("#need-number").html(text);
			if(result>0){
				if(number==1){
					$("#house_name").html("实惠单人房&nbsp;&nbsp; 出差力荐");
					$("#pay-money").html("70.00");
					$("#all-money").html("70.00");
				}else if(number==2){
					$("#house_name").html("实用双人房&nbsp;&nbsp;情侣必备");
					$("#pay-money").html("150.00");
					$("#all-money").html("150.00");
				}else if(number==3){
					$("#house_name").html("旅游必备&nbsp;&nbsp; 家庭首选");
					$("#pay-money").html("200.00");
					$("#all-money").html("200.00");
				}
			}else{
				$("#pay-money").html("0.00");
				$("#all-money").html("0.00");
			}
		},
		error : function(e){
			console.log(e);
			console.log("获取房间数目失败");
		}
	})
}

/**
 * @author chenhao
 * @time 2018/4/14
 * <p>订单支付</p>
 */
var pay=function(){
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
	while(number){
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
}

 /**
  * @author chenhao
  * @time 2018.3.7
  * 房间数目变化，支付价格改变
  */
var initSelect = function () {
    $("#need-number").change(function () {
        var number = $(this).val();
        var price = $("#house-price").text().split("元");
        var day_number = $(".NumDate").text();

        $("#all-money").text(price[0] * number * day_number).append(".00");
        $("#pay-money").text(price[0] * number * day_number).append(".00");

        var text = "";
        var time = 0;
        while (number > time) {
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
}



/**
  * @author chenhao
  * @time 2018.4.2
  * 每月收支
  */
$("#daily-offer").click(function () {
	var jandate=[500, 550, 400, 600, 700, 800, 300,1000, 600, 700, 500, 1000, 1500, 2000,4000,3500, 6000, 5000, 7000, 6400, 4000,4500, 3500, 6000, 7000, 5000, 6000, 5000,5500,2000,1000];
	
	
    $("main").html('<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom">\n' +
        '                <h2 class="h2">每月收入</h2>\n' +
        '                <div class="btn-toolbar mb-2 mb-md-0">\n' +
        '                    <div class="btn-group mr-2">\n' +
        '                        <select class="custom-select d-block w-100" id="month-numb" onchange="monthchange(this)">\n' +
        '                            <option>1月</option>\n' +
        '                            <option>2月</option>\n' +
        '                            <option>3月</option>\n' +
        '                            <option>4月</option>\n' +
        '                            <option>5月</option>\n' +
        '                            <option>6月</option>\n' +
        '                            <option>7月</option>\n' +
        '                            <option>8月</option>\n' +
        '                            <option>9月</option>\n' +
        '                            <option>10月</option>\n' +
        '                            <option>11月</option>\n' +
        '                            <option>12月</option>\n' +
        '                        </select>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <canvas id="myChart" width="900" height="380"></canvas>'
    );
    print(jandate);
})

/**
 * @author chenhao
 * @time 2017.4.2
 * 绘画曲线图
 */
var print=function (moneydata) {
    var ctx = document.getElementById("myChart");
    $("");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1号","2号","3号","4号","5号","6号","7号","8号","9号","10号","11号","12号","13号","14号","15号","16号","17号","18号","19号","20号","21号","22号","23号","24号","25号","26号","27号","28号","29号","30号","31号"],
            datasets: [{
                data: moneydata,
                lineTension: 0,
                backgroundColor: 'transparent',
                borderColor: '#007bff',
                borderWidth: 4,
                pointBackgroundColor: '#007bff'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });
}

//浏览器所有coookie操作
/**
 * 判断参数是否为对象
 * */
function isObject(obj) {
    return (obj instanceof Object) || (typeof obj == 'object');
};
function isFunction(fn) {
    return (fn instanceof Function) || (typeof fn == "function");
}

/**
 * cookie 操作类
 * 方法           参数（依次）                      \   返回值
 * 增 set        字段名 值 时间（天） 作用域        \   操作类
 * 删 del        字段名 作用域                      \   操作类
 * 改 change     字段名 新值                        \   操作类
 * 查 get        字段名                             \   值
 * */
var CookieManage = (function(adv) {
    var defaultDomain = '';
    if (window.location.href.indexOf('localhost') + 1) {
        defaultDomain = "localhost";
    }
    //var this_ = window;
    var setCookie,
        delCookie,
        setCookieValue,
        getCookieValue;
    if (adv) {
        setCookie = function(cname, cvalue, exdays,Domain){
            var d = new Date();
            if(!Domain){Domain=defaultDomain};
            if (exdays) {} else {
                exdays = 1;
            }
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toGMTString();
            if (isObject(cvalue)) {
                document.cookie = cname + "=" + JSON.stringify(cvalue) + "; " + expires + ";" +
                    (Domain ? "path=/;domain="+Domain : 'path=/;');
            } else {
                document.cookie = cname + "=" + cvalue + "; " + expires + ";" +
                    (Domain ? "path=/;domain="+Domain : 'path=/;');
            }
            return this;
        };
        delCookie = function(name,Domain) {
            setCookie(name,"",-1,Domain);
            return this;
        };
        setCookieValue = function(cname, cvalue) {
            if (isObject(cvalue)) {
                document.cookie = cname + "=" + JSON.stringify(cvalue) + "; path=/;" +
                    (defaultDomain ? " domain="+defaultDomain : "");
            } else {
                document.cookie = cname + "=" + cvalue + "; path=/;" +
                    (defaultDomain ? " domain="+defaultDomain : "");
            };
            return this;
        };
        getCookieValue = function(cookieName) {
            var cookieValue = document.cookie;
            var cookieStartAt = cookieValue.indexOf("" + cookieName + "=");
            if (cookieStartAt == -1) {
                cookieStartAt = cookieValue.indexOf(cookieName + "=");
            }
            if (cookieStartAt == -1) {
                cookieValue = null;
            } else {
                cookieStartAt = cookieValue.indexOf("=", cookieStartAt) + 1;
                cookieEndAt = cookieValue.indexOf(";", cookieStartAt);
                if (cookieEndAt == -1) {
                    cookieEndAt = cookieValue.length;
                }
                cookieValue = unescape(cookieValue
                    .substring(cookieStartAt, cookieEndAt));// 解码latin-1
            }
            try {
                return JSON.parse(cookieValue);
            } catch (e) {
                console.warn("JSON.parse ocu error");
                return cookieValue;
            }
        };
    } else {
        delCookie = function(name,Domain) {
            setCookie(name, "", -1,Domain);
        };
        setCookie = function(cname, cvalue, exdays,Domain) {
            var d = new Date();
            if(!Domain){Domain=defaultDomain};
            if (exdays) {} else {
                exdays = 1;
            }
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/; domain="+Domain;
        };

        setCookieValue = function(cname, cvalue) {
            document.cookie = cname + "=" + cvalue + ";path=/; domain="+defaultDomain;
        };
        getCookieValue = function(cookieName) {
            var cookieValue = document.cookie;
            var cookieStartAt = cookieValue.indexOf("" + cookieName + "=");
            if (cookieStartAt == -1) {
                cookieStartAt = cookieValue.indexOf(cookieName + "=");
            }
            if (cookieStartAt == -1) {
                cookieValue = null;
            } else {
                cookieStartAt = cookieValue.indexOf("=", cookieStartAt) + 1;
                cookieEndAt = cookieValue.indexOf(";", cookieStartAt);
                if (cookieEndAt == -1) {
                    cookieEndAt = cookieValue.length;
                }
                cookieValue = unescape(cookieValue
                    .substring(cookieStartAt, cookieEndAt));// 解码latin-1
            }
            return cookieValue;
        };
    };
    return {
        add : setCookie,
        del : delCookie,
        change : setCookieValue,
        get : getCookieValue
    }
})(true);

/**
 * @author chenhao
 * @time 2018/4/14
 * <p>用户退出登录</p>
 */
$("#unload").click(function(){
	CookieManage.del("user");
	window.location.href="/hotel/hotel_user/index.html";
})

//生成指定区间的随机数
function randomFrom(lowerValue,upperValue)
{
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}

var select=function(){
	var date=$("#findDate").val();
	var number=0;
	var status;
	if(date!=""){
		while(number<=25){
			number++;
			status=randomFrom(1,4);
			switch(status){
			case 1 :
				$("status"+number).html("空&nbsp;&nbsp;房");
				break;
			case 2 :
				$("#status"+number).html("已预定");
				break;
			case 3 :
				$("#status"+number).html("入住中");
				break;
			case 4 :
				$("#status"+number).html("以退房");
				break;
			}
		}
	}else{
		alert("请填写日期");
	}
}

/**
 * @author chenhao
 * @time 2018/4/15
 * <p>每月收入</p>
 */
var monthchange=function(month_data){
	var months=month_data.value;
	months=months.split("月");
	var month=months[0];
	
	setTimeout(function(){
		var data;
		switch(month){
		case "1":
			data=[500, 550, 400, 600, 700, 800, 300,1000, 600, 700, 500, 1000, 1500, 2000,4000,3500, 6000, 5000, 7000, 6400, 4000,4500, 3500, 6000, 7000, 5000, 6000, 5000,5500,2000,1000];
			print(data);
			break;
		case "2":
			data=[5000, 6000, 5500, 4600, 6700, 7800, 5300,10000, 6000, 4000, 3000, 2000, 500, 2000,4000,3500, 6000, 5000, 7000, 6400, 4000,4500, 3500, 6000, 7000, 5000, 6000, 5000,5500,2000,1000];
			print(data);
			break;
		case "3":
			data=[500, 550, 400, 600, 700, 800, 300,1000, 600, 700, 500, 1000, 1500, 2000,4000,3500, 6000, 500, 7000, 6400, 4000,4500, 3500, 6000, 7000, 5000, 6000, 5000,5500,2000,1000];
			print(data);
			break;
		case "4":
			data=[5000, 5500, 4000, 6000, 7000, 8000, 7000,6500, 6000, 7000, 5000, 10000, 9500, 9600,7000,6000, 5500, 4500, 7000, 6400, 4000,4500, 5500, 6000, 7000, 5000, 6000, 5000,5500,10000,8000];
			print(data);
			break;
		case "5":
			data=[500, 550, 400, 600, 700, 800, 300,1000, 600, 700, 500, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0];
			print(data);
			break;
		case "6":
			data=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			print(data);
			break;
		case "7":
			data=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			print(data);
			break;
		case "8":
			data=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			print(data);
			break;
		case "9":
			data=[10000, 21345, 18483, 24003, 23489, 24092, 12034,15339, 21345, 18483, 24003, 23489, 24092, 12034,15339, 21345, 18483, 24003, 23489, 24092, 12034,15339, 21345, 18483, 24003, 23489, 24092, 12034,121,13131,0];
			print(data);
			break;
		case "10":
			data=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			print(data);
			break;
		case "11":
			data=[10000, 21345, 18483, 24003, 23489, 24092, 12034,15339, 21345, 18483, 24003, 23489, 24092, 12034,15339, 21345, 18483, 24003, 23489, 24092, 12034,15339, 21345, 18483, 24003, 23489, 24092, 12034,121,13131,0];
			print(data);
			break;
		case "12":
			data=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			print(data);
			break;
		}
	},1000);
}
