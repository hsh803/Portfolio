$(function() {
  if($(window).width() <= 420) {
    $('.chart').easyPieChart({
      size: 75,
      barColor: "#C8C8C8",
      scaleLength: 0,
      lineWidth: 5,
      trackColor: "#ffffff",
      lineCap: "circle",
      animate: 2000,
    });
  } 
  else {
    $('.chart').easyPieChart({
      size: 100,
      barColor: "#C8C8C8",
      scaleLength: 0,
      lineWidth: 8,
      trackColor: "#ffffff",
      lineCap: "circle",
      animate: 2000,
    }); 
  }

});

$(function(){
  $("header").load("header.html"); 
  $("footer").load("footer.html"); 
});