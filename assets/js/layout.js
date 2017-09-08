// init Masonry
var $grid = $('.grid').masonry({
  // options...
  itemSelector: '.gallery-photo',
  columnWidth: '.gallery-photo'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});

$("#toggleNav").on("click", function() {
	$("#navigation").toggleClass("nav-open");
	$("#toggleNav").toggleClass("hamburger-clicked");
});
