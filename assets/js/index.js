$('.banner-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,              
    autoplayTimeout: 3000,      
    autoplayHoverPause: true, 
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});



let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
};




$(document).ready(function() {
    $('.counter').each(function () {
        var $this = $(this);
        var countTo = $this.text(); 
        var countValue = parseInt(countTo.replace(/[^0-9]/g, '')); 
        var suffix = countTo.replace(/[0-9]/g, ''); 

        $this.prop('Counter', 0).animate({
            Counter: countValue
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $this.text(Math.ceil(now) + suffix); 
            }
        });
    });
});


$('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    // autoplay: true,              
    // autoplayTimeout: 3000,      
    // autoplayHoverPause: true, 
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});