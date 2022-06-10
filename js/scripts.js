$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const age = parseInt($("#age").val());
    const color = parseInt($("input:radio[name=color]:checked").val());
    const place = parseInt($("#place").val());
    const toDo = parseInt($("#toDo").val());
    const all = age + color + place + toDo;

    
    if (all >= 1 && all < 60) {
      $("#html").show();
      $("#rust").hide();
      $("#python").hide();
      $("#ruby").hide();
      $("#quiz").fadeToggle();
    } else if (all >= 60 && all < 100) {
      $("#html").hide();
      $("#rust").show();
      $("#python").hide();
      $("#ruby").hide();
      $("#quiz").fadeToggle();
    } else if (all >=100 && all < 160) {
      $("#html").hide();
      $("#rust").hide();
      $("#python").show();
      $("#ruby").hide();
      $("#quiz").fadeToggle();
    } else {
      $("#html").hide();
      $("#rust").hide();
      $("#python").hide();
      $("#ruby").show();
      $("#quiz").fadeToggle();
    }

    $(".yourName").text(name);
  });
});