$(function(){
    //-----------------------------------------------------
    
    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'design_work', 'training', 'profile'],
        afterLoad:function(origin, destination, direction){
            let idx=destination.index;
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
        },
    });



    $(window).on('scroll', function(){
        let sct=$(window).scrollTop();
        $('.ani').each(function(){
            let secTop = $(this).offset().top;
            sct > secTop - 400 ? $(this).addClass('on') : $(this).removeClass('on'); 
        });
    });



    var cursor = document.getElementById('cursor');
    document.addEventListener('mousemove',function(e){
        var x = e.clientX; 
        var y = e.clientY;
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });
    


    $('.mopen').on('click', function(){  
        $(this).toggleClass('is-active');
        $('#cover').slideToggle();
    });



    let cloneMenu = $('nav>ul').clone();
    $('#cover').append(cloneMenu);


    $('#cover a').on('click', function(){  
        $('.mopen').toggleClass('is-active');
        $('#cover').slideUp();
    });

    $('#cove a').on('click', function(){  
        $('#cover').slideUp();
    });

    $('#cover').on('scroll wheel touchmove', function(){
        return false;
    });



    //typed
    new Typed('.slogan_txt',{
        strings: ['기본을 중시하는 단단한 구현'],
        typeSpeed:160,
        cursorChar:"",
        loop:true,
        backSpeed:40,
    });

    var Rsd = $('.trnWrap');

	var slickOptions = {
		infinite:true,
		slidesToShow:1,
		slidesToScroll:1,
		autoplay:true,
		autoplaySpeed:2000,
		dots:true,
		arrows:false,
	};

    $(window).on('load resize', function() {
        	if($(window).width() > 1500) {
        		Rsd.slick('unslick');
        	}else{
        		Rsd.not('.slick-initialized').slick(slickOptions);
        	}
    });

    //-----------------------------------------------------
});