// fashion slider----------------------------------------
$(document).ready(function(){
    $('.fashion-slider').slick({
      dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    adaptiveHeight: true
    });
    });
//=======================================================


//product-slider
// $(document).ready(function(){
//       $('.product-slider').slick({
//         // dots: true,
//       infinite: true,
//       speed: 300,
//       autoplay: true,
//       autoplaySpeed: 3500,
//       slidesToShow: 4,
//       adaptiveHeight: true,
//       responsive: [
//         {
//           breakpoint: 1200,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 900,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//           }
//         },
//         {
//           breakpoint: 750,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//       });
//       });