document.addEventListener("DOMContentLoaded", function(){
	var menudo = document.querySelector(".menu");
	var toado ="duoi100";
	var chungtoi = document.querySelector(".chungtoi");
	var chomauvang = chungtoi.offsetTop;
	var khoangcachhienthai = 596;
	var khoangcachngung = chomauvang + khoangcachhienthai;
	var chinhkhonglaplai = "duoi";
	//scroll cac noi dung hien ra
	var phantuload = document.querySelector('.s3');
	var trangthais3 ="duoi";
	var vitris3 = phantuload.offsetTop -100;
	console.log(vitris3);
	//end scroll cac noi dung hien ra
	document.addEventListener("scroll", function(){
		if(window.pageYOffset>90)
		{
			if(toado=="duoi100")
			{
				toado ="tren100";
				menudo.classList.add("mauden");
			}
		}
		else if(window.pageYOffset<90)
		{
			if(toado=="tren100")
			{
				toado ="duoi100";
				menudo.classList.remove("mauden");
			}
		}
		if((window.pageYOffset > chomauvang) && (window.pageYOffset<khoangcachngung))
		{
			if(chinhkhonglaplai == "duoi")
			{
				chinhkhonglaplai = "tren";
			chungtoi.classList.add("vangdunglai");
			}
		}
		else if((window.pageYOffset < chomauvang) || (window.pageYOffset>khoangcachngung))
		{
			if(chinhkhonglaplai == "tren")
			{
				chinhkhonglaplai = "duoi";
			chungtoi.classList.remove("vangdunglai");
						
			}
		}
		//xy ly phan tu load s3
		if(window.pageYOffset > vitris3){
			if(trangthais3 =="duoi")
			{
				trangthais3 ="tren";
				phantuload.classList.add('dilen');
			}
		}

	})

}, false)