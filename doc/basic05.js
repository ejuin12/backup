$(function(){
//-----------------------------------------------   
$('#top_banner i').on('click',function(){
    // $('#top_banner').hide();
    $('#top_banner').slideUp();
});
// function topBannerClose(){
//     $('#top_banner').hide();
// }

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000, //속도 2000=2초
    pauseOnHover:false,
    pauseOnFocus:false,
});
 
//-----------------------------------------------    
});