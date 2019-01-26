document.getElementById("scroll-bott").addEventListener("click", function () {
    document.body.scrollIntoView(false);
  });

(function($){
    'use strict';
      $(window).on('load', function () {
          if ($(".pre-loader").length > 0)
          {
              $(".pre-loader").fadeOut("slow");
          }
      });
  })(window.stop());

  
