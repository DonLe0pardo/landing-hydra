
$(document).ready(function(){
    $('.contacts__list').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
                
            },
    
    
            {
                breakpoint: 1300,
                settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
                }
    
            },
        ]
    });
    
    
    $('.build__cards').slick({
        dots: false,
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
                
            },
    
            {
                breakpoint: 1300,
                settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1
                }
    
            },
    
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    
            },
        ]
    });
    
    
    $('.technologies__images').slick({
        dots: false,
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
                
            },
    
    
            {
                breakpoint: 1300,
                settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
                }
    
            },
    
        ]
    });
    
    
    $('.how-list').slick({
        dots: false,
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
                
            },
    
    
            {
                breakpoint: 1300,
                settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
                }
    
            },
    
        ]
    });    

  });



