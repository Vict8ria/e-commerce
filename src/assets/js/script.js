$('.slider-items').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});



function changeImage(e){
  document.getElementById('productImage').setAttribute('src', '/assets/img/product/' + e + '.jpg');
  document.getElementsByClassName('zoomImg')[0].setAttribute('src', 'http://localhost:3000/assets/img/product/' + e + '.jpg');
}