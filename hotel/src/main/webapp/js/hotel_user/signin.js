/**
 * @author chehao
 * @time 2018.4.9
 * <p>用户登录</p> 
 */
$("button[type$='submit']").click(function(){
	var account=$("#inputEmail").val();
	var password=$("#inputPassword").val();
	if(null!=account&&null!=password){
		$.ajax({
			type : "POST",
			url : "/hotel/user/load.do",
			data : {
				"account" : account,
				"password" : password
			},
			success:function(result){
				if(result==2){
					alert("账号或密码出错！");
				}else{
					window.location.href=result;
				}
			},
			error:function(e){
				console.log(e);
			}
		});
	}
	
})