// Show loader on page load
window.onload = function() {
  document.querySelector('.loader').style.display = 'flex';
};

window.onload = function() {
  setTimeout(function() {
    var loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = 0;
      setTimeout(function() {
        loader.parentNode.removeChild(loader);
      }, 1000); // 1 second delay
    }
  }, 1000); // 2 seconds delay
}


$('.slide-nav').on('click', function(e) {
  e.preventDefault();
  // get current slide
  var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');
    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }
});

