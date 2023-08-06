function prev() {
  document.getElementById('slider-container').scrollLeft -= 270;
}

function next() {
  document.getElementById('slider-container').scrollLeft += 270;
}

$('.hotel-img-item img').on('click', function () {
  $(this).toggleClass('zoomed');
  $('.overlay').toggleClass('active');
});

