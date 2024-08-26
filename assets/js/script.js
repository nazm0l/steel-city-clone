$(".slider-items").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
});

$(".work-slider-prev").on("click", function () {
  $(".slider-items").slick("slickPrev");
});

$(".work-slider-next").on("click", function () {
  $(".slider-items").slick("slickNext");
});
