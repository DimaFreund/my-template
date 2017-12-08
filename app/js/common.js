$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


$('.home-carousel').owlCarousel({
    margin:10,
    nav:true,
    loop:true,
    smartSpeed:450,
    autoplay:true,
    items: 1,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
})


//Tabs 

$('.tabs-header li').on('click', function(){
	$('.tabs-header li').removeClass('active');
	$(this).addClass('active');
	$('.tabs-item').removeClass('active');
	$('.tabs-item').eq($(this).attr('data-count')).addClass('active');
})


});
