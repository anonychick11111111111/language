$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,


        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"

        // autoplay: true,
        // autoplaySpeed: 1000
    });
  });

  function nhap(btn) {
    var e = document.getElementById('mail');
    if(e.value == "") {
        alert('chua nhap gia tri');
        return false;
    }
    else{
        alert('dacogiatri');
    }
  }
