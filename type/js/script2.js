$(document).ready(function() {
   var owl = $('.owl-two');
    owl.owlCarousel({
    navText: ["<img src='img/l-a.png'>","<img src='img/r-a.png'>"]
    margin:10,
    navclass: ['owl-prev', 'owl-next']
    responsive:{
        0:{
            items1:1
        },
        600:{
            items1:3
        },
        1000:{
            items1:5 
        }
    }
}) 
})

