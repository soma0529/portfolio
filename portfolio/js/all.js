/*main*/
$(document).ready(function(){
  $('.list3').click(function(){
    $('.contact_pannel').fadeIn();
    $('.contact_pannel').addClass('active');
  })
  $('.close_tag').click(function(){
    $('.contact_pannel').fadeOut();
    $('.contact_pannel').removeClass('active');
  })
  $('.scroll_tip').click(function(){
    let scrollPosition = $('.port_wrapper').scrollLeft();
    if (scrollPosition === 0){
      $('.port_wrapper').animate({
        scrollLeft: 5000
      },1000);
    } else{
      $('.port_wrapper').animate({
        scrollLeft: 0
      },1000)
    }
  })
})



/*swiper*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    watchSlidesProgress: true,
  });

  /*lightbox*/
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

