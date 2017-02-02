$( document ).ready(function() {
  $( ".type" ).bind('input propertychange', function() {
    var str = $( ".type" ).val();
    $( ".text" ).html( str );
  });
  $(".search").bind('input propertychange',function () {
    var search_query = $(".search").val();
    var str = $( ".type" ).val();
    var couter = 0;
    var first_entry = str.toLowerCase().indexOf(search_query,couter);
    if (first_entry >= 0){
      var result = str;
      result = recursion_replace(couter,result,search_query)
      $( ".text" ).html( result );
    }
  });
});

function recursion_replace(num, result, query) {
  // console.log(num);
  var entry = result.toLowerCase().indexOf(query,num);
  if (entry >=0) {
    // console.log(entry);
    var query_in_str = result.substr(entry, query.length);
    var replacement = "<span class='yellow'>" + query_in_str + "</span>";
    num = replacement.length;
    console.log(num);
    return result = recursion_replace(num, result.replace(query_in_str, replacement), query);
  }
  else {
    return result;
  }
}
