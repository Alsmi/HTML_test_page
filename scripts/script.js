$(document).ready(function(){
	//Mobile menu
 	$("#header").on('click', '.menu-bar', function () {
        if (!$(this).hasClass('open')) {
            $(this).addClass('open');
            $('.mobile').fadeIn(300);
        } else {
            $(this).removeClass('open');
            $('.mobile').fadeOut(300);
        }

    });

    $(".mobile").on('click', '.mob-submenu', function () {
        if (!$(this).hasClass('open')) {
            $(this).addClass('open');
            $(this).find('ul').slideDown(300);
        } else {
            $(this).find('ul').slideUp(300, function () {
                $(this).parent().removeClass('open');
            });
        }
    });
});