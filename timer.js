// Great thanks to my mentor: Lauren Raddatz , who had spent hours figuring out the timer effect and improving on page layout with me.
// This count down effect was modified based on the code snippet found at here:
// https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
// We tried to make the "Ready?" on the 1st page being part of the count down, but that turned out to be way too complicated so we decided to move the "Ready?" to the 1st page and let it be the link that the user clicks on and leads to the second page.


var timeleft = 3;
var downloadTimer = setInterval(function(){
  document.getElementById("seconds").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    window.location='final.html'
  }
}, 1000);
