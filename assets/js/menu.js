$(window).scroll(function() {
	// Get the position of the current scroll.
	var top_position = $(this).scrollTop();

	if ( top_position > 320){
		// Let the item move with scrolling.
		$(".backtop").fadeIn()
	} else {
		// Reset the position to default.
		$(".backtop").fadeOut()
	}
});

$(document).ready(function(){
	
	
	$(".backtop").hide()
	// $(".backtop").click(function(){
	// 	$("body,html").animate({"scrollTop":$(window).height()*0},500)
	// })
	
	
	$(".iconbar").click(function(){
		$(".menu_close").toggleClass("menu_open");
		$(".mobile_hide").toggle();
	})
	
	$('.mobile_hide').hide()
	$('.mobile_hide').click(function(){
        $(".menu_close").removeClass("menu_open");
		$('.mobile_hide').hide()
    }); 
	
	$('#nav_item_down_btn1').click(function(){
        $('#nav_item_down_content1').toggle();
    }); 

});