

$(window).on("scroll", function() {
    if($(window).scrollTop() > 70) {
        $("nav").addClass("backgroundcolor");
    } else {
       $("nav").removeClass("backgroundcolor");
    }
});

var btn = document.querySelector('#tops');

btn.addEventListener("click", function(event) {
  if (event.target == btn)
  window.scrollTo({
      "behavior": "smooth",
      "top": 0
  }); });


  $(document).ready(function(){
  	$('a[href^="#"]').on('click',function (e) {
  	    e.preventDefault();

  	    var target = this.hash;
  	    var $target = $(target);

  	    $('html, body').stop().animate({
  	        'scrollTop': $target.offset().top-60
  	    }, 500, 'swing', function () {
  	    });
  	});
  });
