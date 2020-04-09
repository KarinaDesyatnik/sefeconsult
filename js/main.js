$(function(){

$('.btn__menu').click(function(){
	$(this).toggleClass('active');
	$('.header__menu-wrapper').toggleClass('active');
})

$('.header .menu li a').click(function(){
	$('.header__menu-wrapper').removeClass('active');
	$('.btn__menu').removeClass('active');
})

$('.sub-menu-text').click(function(){
	$('.header__menu-wrapper').addClass('active');
	$('.btn__menu').addClass('active');

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

$(document).ready(function(){
            /*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
            $('#btn_submit').click(function(){
                // собираем данные с формы
               var user_name    = $('#name').val();
                var user_email   = $('#email').val();
                var text_comment = $('#text_comment').val();
                // отправляем данные
                $.ajax({
                    url: "send.php", // куда отправляем
                    type: "post", // метод передачи
                    data: { // что отправляем
                        "name":    user_name,
                        "email":   user_email,
                        "text_comment": text_comment
                    },
                    error:function(){
                        $("#erconts").html("Произошла ошибка!");
                        $("#erconts").css("color", "red");
                }, 
                    /* если произойдет ошибка в элементе с id erconts выведится сообщение*/                 
                    beforeSend: function() {                     
                        $("#erconts").html("Отправляем данные..."); 
                                        
                    },                 
                    success: function(result){                     
                        /* В случае удачной обработки и отправки выполнится следующий код*/                     
                        $('#erconts').html(result);  
                        $('#erconts').css('color', 'green');                   
                                       
                    }  
                });
            });
        });


$(document).ready(function(){
            /*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
            $('#btn_submit-lv').click(function(){
                // собираем данные с формы
               var user_name    = $('#name').val();
                var user_email   = $('#email').val();
                var text_comment = $('#text_comment').val();
                // отправляем данные
                $.ajax({
                    url: "send-lv.php", // куда отправляем
                    type: "post", // метод передачи
                    data: { // что отправляем
                        "name":    user_name,
                        "email":   user_email,
                        "text_comment": text_comment
                    },
                    error:function(){
                        $("#erconts").html("Ir radusies kļūda!");
                        $("#erconts").css("color", "red");
                }, 
                    /* если произойдет ошибка в элементе с id erconts выведится сообщение*/                 
                    beforeSend: function() {                     
                        $("#erconts").html("Notiek datu nosūtīšana ..."); 
                                        
                    },                 
                    success: function(result){                     
                        /* В случае удачной обработки и отправки выполнится следующий код*/                     
                        $('#erconts').html(result);  
                        $('#erconts').css('color', 'green');                   
                                       
                    }  
                });
            });
        });


if(window.innerWidth < 780) {
$('.contact__phone a').attr("href", "tel:+371 29 44 89 92");

}
