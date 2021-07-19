const slider = tns({
    container: '.carusel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 1
        },
        700: {
          gutter: 30
        },
        1400: {
          items: 1
        }
      }
  });

document.querySelector('.prev').addEventListener('click',function () {
    slider.goTo('prev');
}); 
document.querySelector('.next').addEventListener('click',function () {
    slider.goTo('next');
}); 