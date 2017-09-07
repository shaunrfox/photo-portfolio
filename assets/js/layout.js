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

// Random Images
// $(document).ready(function() {
//   var images = [
//   	'people/stephen-henderson.jpg',
// 	  'people/molly-truck.jpg',
// 	  'people/ephraim-ice-cream.jpg',
// 	  'places/fox-farm-dawn.jpg',
// 	  'places/blue-buildings.jpg',
// 	  'places/big-bend-1.jpg',
// 	  'scenes/horse-ranch.jpg',
// 	  'scenes/groesbeck-2.jpg',
// 	  'scenes/tracy-ca-truck.jpg',
// 	  'scenes/big-bend-dog.jpg',
// 	  'details/hibiscus-2.jpg',
// 	  'details/molly-snow.jpg',
// 	  'details/laity-ferns-1.jpg'
//   ];

//   $('#homeImage').css({'background-image': 'url(/photo-portfolio/assets/img/photos/' + images[Math.floor(Math.random() * images.length)] + ')'});
// });