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


(function($) {
  $(function() {
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
    $('.catalog-item__back').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
      
	//   function toggleSlide (item) {
	// 	$(item).each(function(i) {
	// 		$(this).on('click', function(e) {
	// 			e.preventDefault();
	// 			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 		});
    //   	}
  	// )};
    // toggleSlide ('.catalog-item__link');
    // toggleSlide ('.catalog-item__back');

  $('[data-modal="consultation"]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });

  $('.catalog-item__btn').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    });
  });


  });
  });
  }
  (jQuery));