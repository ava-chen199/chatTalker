$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $('.gotop').fadeIn(500);
        }else{
            $('.gotop').fadeOut(500);
        }
    });

    $(".gotop").click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0,
        },1000)
    });

    $(".pb1").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".change1").click(function(){
        $("h5.base1").text("10000");
        $("h5.base2").text("600");
        $("h5.nomal1").text("1600");
    });
    $(".change2").click(function(){
        $("h5.base1").text("15000");
        $("h5.base2").text("500");
        $("h5.nomal1").text("1500");
    });
    $(".change3").click(function(){
        $("h5.base1").text("20000");
        $("h5.base2").text("400");
        $("h5.nomal1").text("1400");
    });
    $(".change4").click(function(){
        $("h5.base1").text("25000");
        $("h5.base2").text("300");
        $("h5.nomal1").text("1300");
    });
    $(".change5").click(function(){
        $("h5.base1").text(">25000");
        $("h5.base2").text("200");
        $("h5.nomal1").text("1200");
    });

    $(".default").click(function(e){
        e.preventDefault();
    });

    $(".faq_list").click(function(){
        $(this).toggleClass("active").siblings().removeClass("active");
        $(this).siblings().children("p").slideUp();
        $(this).find("p").slideToggle();
    });

});