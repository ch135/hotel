/**
 * @author chenhao
 * @time 2018/4/9
 * 注册对应js
 */
$('#mpanel2').codeVerify({
		type : 1,
		width : '100%',
		height : '50px',
		fontSize : '30px',
		codeLength : 4,
		btnId : 'check-btn',
		ready : function() {
		},
		success : function() {
			var account=$("#inputEmail").val();
			var password=$("#inputPassword").val();
			var checkpassword=$("#affirmPassword").val();
			
			if(null!=account&&null!=password&&null!=checkpassword){
				if(password==checkpassword){
					$.ajax({
						url : '/hotel/user/register.do',
						type : 'post',
						data : {
							'account' : account,
							'password' : password
						},
						success:function(result){
							if(result==0){
								window.location.href="/hotel/hotel_user/index.html";
							}else if(result==1){
								alert("注册失败");
							}
						},
						error:function(){
							console.log("用户注册出错");
						}
					});
				}else{
					alert("请确认密码");
				}
			}
		},
		error : function() {
			alert('验证码不匹配！');
		}
	});