$(function(){

$('.btn__menu').click(function(){
	$(this).toggleClass('active');
	$('.header__menu-wrapper').toggleClass('active');
})

$('.header .menu li a').click(function(){
	$('.header__menu-wrapper').removeClass('active');
})

$('.sub-menu-text').click(function(){
	$('.header__menu-wrapper').addClass('active');

})


$('.sub-menu-item').click(function(){
	$(this).toggleClass('active');
	
})

$("#menu").on("click","a", function (event) {


        var id  = $(this).attr('href'),



        top = $(id).offset().top;




        $('body,html').animate({scrollTop: top}, 1500);

    });

// ------start sticky header------

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.header').addClass("sticky");
}
else{
$('.header').removeClass("sticky");
}
});

//-------end sticky header--------
    
});