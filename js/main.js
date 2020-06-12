$(document).ready(function(){
    sizeArrowRows();
    $(window).on('resize', function(){
        sizeArrowRows();
        if($window.width() < 640){
            $('.navbar-toggle').removeClass('expand');
            $('.navbar .container').animate({left: '0px'}, 250, 'easeInOutQuart');    
        }
        
    });
    
	$window = $(window);
    var orgHeight = $('.main-block').height();
    //$(".navbar-fixed-top").autoHidingNavbar();    
    if($window.width() < 640){
        //$(".navbar-fixed-top").autoHidingNavbar();    
    }
   $('section[data-type="background"]').each(function(){
        
       if(jQuery.browser.mobile){
        //NADA
       } else {
          var $bgobj = $(this); // assigning the object
       
           if($bgobj.hasClass('content-container')){
                var topPos = 200;   
           } else {
                var topPos = 100   
           }
            $(window).scroll(function() { 
                var yPos = -($window.scrollTop() / $bgobj.data('speed'))+topPos; 
                var coords = '50% '+ yPos + 'px';
                $bgobj.css({ backgroundPosition: coords });              
            }); 
       }
                        
       
     });	
    
    $('.navbar-toggle').click(function(e){
        e.preventDefault();
        var windowWidth = $(window).width();
        if($(this).hasClass('expand')){
            $(this).removeClass('expand');
            $('.navbar .container').animate({left: '0px'}, 250, 'easeInOutQuart');
            //$('.navbar-collapse').animate({width: '100%', left: '100%'}, 250, 'easeInOutQuart');
            
        } else {
            $(this).addClass('expand');
            var leftVar = windowWidth - 9;
            var leftPos = '-'+leftVar + 'px';
            $('.navbar .container').animate({left: leftPos}, 250, 'easeInOutQuart');
           // $('.navbar-collapse').animate({width: '110%', left: '100%'}, 250, 'easeInOutQuart');
        }
    });
    
    $('.block-toggle').click(function(){
        var block = $(this).data('block');
        var height = ($('.'+block+' .block-content').height())-44;
        
        if($(this).hasClass('active')){
            $('.block-toggle').text('Learn More');
            $('.block-toggle').removeClass('active');
        } else {
            $('.block-toggle').text('Learn More');
            $('.block-toggle').removeClass('active');
            $(this).text('Learn Less');
            $(this).addClass('active');
        }
        
    
    });
    
    $('.img-thumbnail').on('click', function(){
        var title = $(this).attr('title');
        var content = $(this).data('footer');
        var imgSrc = $('img', this).attr('src');
        
        $('.modal-title').html(title);
        $('.modal-footer').html(content);
        if($(this).hasClass('video')){
            var videoID = $(this).data('vid');
            var videoSrc = 'http://www.youtube.com/embed/'+videoID+'?autoplay=1&rel=0';
            $('.video-iframe').attr('src', videoSrc);
            $('#page-one, #page-two').css('display', 'none');
            $('.video-div').css('display', 'block');
        }
        $('.modal-img').attr('src', imgSrc).attr('alt', title);
        if($(this).hasClass('brochure')){
            var pageTwoSrc = imgSrc.replace('1', '2');
            $('.page-two').attr('src', pageTwoSrc);
            $('#page-two').css('display', 'block');
        }
    });
    $('.close').on('click', function(){
        $('.page-two, .video-iframe').attr('src', '');
        $('#page-one').css('display', 'block');
        $('#page-two, .video-div').css('display', 'none');
        $('.modal-footer').html('');
    });
    
}); 

function sizeArrowRows(){
    $('.arrow-row').each(function(){
        var block = $(this).data('block');
        var blockWidth = $('.'+block).width();
        var halfWidth = blockWidth/2;
        var newLeftWidth = halfWidth/100;
        var blockLeftPosition = $('.'+block).offset().left - $(window).scrollLeft();
        var newLeftWidth = blockLeftPosition + halfWidth;
        $('.left-side', this).css({width: newLeftWidth+'px'});
        
        var newRightWidth = $(window).width()-newLeftWidth;
        $('.right-side', this).css({width: newRightWidth+'px'});
        
    });   
}

(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

document.createElement("article");
document.createElement("section");