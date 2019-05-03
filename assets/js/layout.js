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

$("#openMenu").on("click", function() {
	$("#navigation").toggleClass("nav-open");
	$("#openMenu").addClass("hamburger-hidden");
  $("#closeMenu").addClass("close-shown");
  $(".post-nav-wrapper").hide();
});

$("#closeMenu").on("click", function() {
  $("#navigation").toggleClass("nav-open");
  $("#openMenu").removeClass("hamburger-hidden");
  $("#closeMenu").removeClass("close-shown");
  $(".post-nav-wrapper").show();
});

// Arrow through image pages
$(document).keydown(function(e){
  if (e.keyCode === 37) { // left arrow
     $("#previousClick").get(0).click();
     console.log("previous-click");
  } else if (e.keyCode === 39) { // right arrow
     $("#nextClick").get(0).click();
     console.log("next-click");
  } else {
  	return;
  }
});

$(document).ready(function() {
  $(function() {
    $(".rslides").responsiveSlides({
      random: true
    });
  });
});