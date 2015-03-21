(function(gfs, $, undefined){

  var $slider, $shots, $prev, $next;

  var duration = 200;

  gfs.index = 0;
  gfs.total = 0;

  gfs.init = function(){

    $slider = $("#slider");
    $shots =  $(".shots").children();
    $desc =   $slider.find("p.description");
    $prev =   $("#s-prev");
    $next =   $("#s-next");

    gfs.total = $shots.length;

    // show the first screenshot
    showNewImage();

    // event handlers
    $prev.on("click", prev);
    $next.on("click", next);

  };

  function showNewImage(){

    var $new_shot = $shots.eq(gfs.index);

    $shots.filter(':visible').hide();
    $new_shot.show();
    $desc.html($new_shot.find("span").html());

    $prev.prop("disabled", (gfs.index == 0));
    $next.prop("disabled", (gfs.index == gfs.total - 1));

  }

  function prev(){
    if(gfs.index > 0)
      gfs.index--;
    showNewImage();
  };

  function next(){
    if(gfs.index < gfs.total)
      gfs.index++;
    showNewImage();
  };

})(window.gfs = window.gfs || {}, jQuery);
