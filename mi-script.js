// deslis lento
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 0 
				} , 1000);
				return;
			}
		}
	});
});

// slider
$(function(){
	$('#slider div:gt(0)').hide();
	setInterval(function(){
		$('#slider div:first-child').fadeOut(0)
		.next('div').fadeIn(900)
		.end().appendTo('#slider');}, 4000);
});

// menu
$(".menu-collapsed").click(function() {
	$(this).toggleClass("boton-menu");
});

// loading
$(window).load(function() {
    // start up after 2sec no matter what
    window.setTimeout(function(){
        $('body').removeClass("loading").addClass('loaded');
    }, 4000);
});









