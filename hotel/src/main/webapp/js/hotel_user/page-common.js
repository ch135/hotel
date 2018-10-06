document.getElementById("header").innerHTML =
	'<div class="container">\
		<header class="blog-header py-3">\
			<div class="row flex-nowrap justify-content-between align-items-center box-shadow">\
				<div class="col-4 pt-1">\
					<img class="mb-4" src="/hotel/img/logo/logo.png" width="140" height="60" id="logo"/>\
				</div>\
				<div class="col-4 d-flex justify-content-end align-items-center">\
	          		<nav class="my-2 my-md-0 mr-md-3">\
	            		<a class="p-2 text-dark" href="/hotel/hotel_user/personility.html" id="user">个人中心</a>\
				    	<a class="p-2 text-dark" href="/hotel/hotel_user/signin.html" id="load">登&nbsp;录</a>\
				    	<a class="p-2 text-dark" href="/hotel/hotel_user/register.html">注&nbsp;册</a>\
				    </nav>\
	      		</div>\
			</div>\
		</header>\
	</div>';
getName();
	
document.getElementById("footer").innerHTML=
	'<footer class="text-center">\
  		<p class="mt-5 mb-3 text-muted">&copy; 2018 酒店预定网站 Powered By chenhao huizhou university </p>\
  	</footer>';

document.getElementById("logo").onmousemove=function(){
	this.style.cursor='pointer';
	this.onclick=function(){
		window.location.href='/hotel/hotel_user/index.html';
	};
};

/**
 * 
 * @returns
 * @author chenhao
 * @time 2018.4.9
 * 获取用户信息cookie
 */
function getName(){
	var users,reg=new RegExp("(^| )user=([^;]*)(;|$)");
	users=document.cookie.match(reg);
	if(null!=users){
		user=users[2].split("\"");
		document.getElementById("user").innerHTML=user[1];
		document.getElementById("load").style.display='none';
	}
}

document.getElementById("user").onclick=function(){
	var word=this.innerHTML;
	if(word=="个人中心"){
		this.setAttribute("href","/hotel/hotel_user/signin.html");
	}
}
