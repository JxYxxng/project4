$(function(){
	$("#GNB > ul > li").hover(
		function(){
			$(this).find("ul").slideDown(300);
			$(".gnb_bg").addClass("active");
		},
		function(){
			$(this).find("ul").hide();
			$(".gnb_bg").removeClass("active");
		},
	);
	$(".tab").click(function(e){
		e.preventDefault();
		$(".cookie_pop").hide();
	});

	// 스크롤 이벤트

	var a; // 메뉴
	var t=0; // 스크롤 위치

	var firstFlag=false; // 초기 스크롤

	$("#header").addClass("active");
	setTimeout(function(){
		//console.log("한번실행");
		$("html").animate({scrollTop : 0}, 800, function(){
			firstFlag=true;
			$(window).trigger("scroll");
		});
	}, 10);

	$(window).scroll(function(){
		if(firstFlag == false){
			return;
		}
		t=$(window).scrollTop();

		if(t < $(".product1").offset().top - 100){
		}
		else if(t < $(".intro").offset().top - 100){
			a=0;
		}
		else if(t < $(".product2").offset().top - 100){
			a=1;
		}
		else if(t < $(".event").offset().top - 100){
			a=2;
		}
		else if(t < $(".news").offset().top - 100){
			a=3;
			if(t == $(document).height()-$(window).height()){
				a=4;
			}
		}
		else{
			a=4;
		}
		console.log(a);
		$("#content > div").eq(a).addClass("active");
	});
});
