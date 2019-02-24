var timeleft = 3;
var downloadTimer = setInterval(function(){
  document.getElementById("seconds").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    window.location='final.html'
  }
}, 1000);