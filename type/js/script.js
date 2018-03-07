$(document).ready(function() {
   $('#owl-one').owlCarousel({
    navText: ["<img src='img/l-a.png'>","<img src='img/r-a.png'>"],
    margin:10,
    
    navclass: ['owl-prev', 'owl-next'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
}) 
}); 

$(document).ready(function() {
   $('#owl-two').owlCarousel({
    navText: ["<img src='img/l-a.png'>","<img src='img/r-a.png'>"],
    margin:10,
    navclass: ['owl-prev', 'owl-next'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
}) 
})
