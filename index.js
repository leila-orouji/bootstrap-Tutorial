$(document).ready(function(){
    $('[data-toggle = "tooltip"]').tooltip();
})



// $(document).on('click', '#carousel-pause', function() { $('#mycarousel').carousel('pause'); });

$(document).ready(function(){
    // console.log(' increase the interval carousel in jquery');
    // $("#mycarousel").carousel({interval: 1000})
    $('#carouselButton').on('click',function(){
       if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
       }else{
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
       }      
    })
})
