$(document).ready(function() {
	$(document).click(function() {
		$('.searchbox').hide();
		$('.navmenu').hide();
		$('.searchbtn').parent().removeClass('searchbg');
		$('.hamburger').parent().removeClass('menubg');
	});
	$('.searchbtn').click(function(e) {
		e.stopPropagation();
		$('.searchbox').slideToggle();		
		$(this).parent().toggleClass('searchbg');
		$('.hamburger').parent().removeClass('menubg');
		$('.navmenu').hide();		
	});	
	$('.hamburger').click(function(e) {
		e.stopPropagation();
		$('.navmenu').slideToggle();
		$(this).parent().toggleClass('menubg');
		$('.searchbtn').parent().removeClass('searchbg');
		$('.searchbox').hide();
	});
	$('.searchbox').click(function(e){
			e.stopPropagation();
			$(this).show();
	});
	$('.packagelist li a').hover(function(){
         $(this).parent().addClass("hoverback");
	},	
	function(){
         $(this).parent().removeClass("hoverback");
     });
     $('.slider').slick({ 	 
  		slidesToShow: 1,
  		slidesToScroll: 1,  		  		
  		dots:true,
  		autoplay:true,
  		autoplaySpeed:2500,  		
	});
		
	$('.navmenu li a').hover(function(){
		$(this).parent().addClass('line');
	},
	function(){
		$(this).parent().removeClass('line');
	});	
});

