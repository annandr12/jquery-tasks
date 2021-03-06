/*jshint esversion: 6 */
$(document).ready(function() {
  let state_obj = [];
  function doPushState(state) {
    let title = "",
        path  = "";
    history.pushState(state, title, path);
  }
  function getItem(text,id) {
    let item = "<li>" + text + "<span class='delete_item' id='" + id +  "'>×</span></li>";
    return item;
  }
  function addItem(item,id) {
    $(".list").append(item);
    $("#" + id).click(function() {
      for(let i = 0; i < state_obj.length; i++) {
        if(state_obj[i].id == id) {
          state_obj.splice(i,1);
          doPushState(state_obj);
        }
      }
     $(this).parent().remove();
    });
  }
  function createList(state_obj) {
    for(let i=0; i<state_obj.length; i++){
      addItem(state_obj[i].item,state_obj[i].id);
    }
  }
  $(window).on('popstate', function(event) {
    let state = event.originalEvent.state;
    if (state) {
      state_obj = state;
      $("ul").empty();
      createList(state);
    }
  });
  $(".add_item").click(function() {
    let id = Date.now();
    let text = $(".item").val();
    $(".item").val("");
    let item = getItem(text,id);
    state_obj.push({ id: id, text: text, item: item });
    addItem(item,id);
    doPushState(state_obj);
  });
});
