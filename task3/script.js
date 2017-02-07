$(document).ready(function() {
  $.getJSON( "content.json", function( data ) {
    var items = [];
    var arr = [];
    let div = "<div class='item col-xs-12 col-sm-6 col-md-6 col-lg-3'></div>"
    console.log(data);
    $.each( data, function( index, val ) {
      let item  = $(div).html("<a href='" + val.url + "' title='" + val.description + "'><span class='image' style='background-image: url(" + val.url + ");'></span></a>");
      console.log(val.description);
      arr.push(item);
    });
    $(".row").append(arr);
  });

  $('.galery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{enabled:true}
  });

});
