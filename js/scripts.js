$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const age = parseInt($("#age").val());
    const color = parseInt($("input#radio[name=color]:checked").val());
    const place = parseInt($("#place").val());
    const toDo = parseInt($("#toDo").val());
    const all = age + color + place + toDo;

    if (all >= 1 && all < 400) {
      $("#html").show();
      $("#rust").hide();
      $("#python").hide();
      $("#ruby").hide();
      $("#quiz").fadeToggle();

    } else if (all >= 400 && all < 500) {
      $("#html").hide();
      $("#rust").show();
      $("#python").hide();
      $("#ruby").hide();
      $("#quiz").fadeToggle();
      
    } else if (all >=500 && all < 600) {
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

  })
})