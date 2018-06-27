// modified from Standard Scroll Clock by kurt.grigg@virgin.net
var H='........';
var H=H.split('');
var M='..........';
var M=M.split('');
var S='............';
var S=S.split('');
// center coordinates (greater is right and down respectively)
var Xpos=200;
var Ypos=200;
// spread of dots in clock hands (greater is farther apart)
var Xbase=32;
var Ybase=32;
// digit radial distance from center (greater is farther from center)
var Xdig=160;
var Ydig=160;
// digit count
var dots=12;
// clock horizontal position around center (greater is left)
var Xclock=14
// clock vertical position around center (greater is up)
var Yclock=25

// document.addEventListener('DOMContentLoaded', function () {
//   var clockheight = document.getElementById("clock").offsetHeight;
//   var clockwidth = document.getElementById("clock").offsetWidth;
//   Ypos = clockheight/2;
//   Xpos = clockwidth/2;
//   // Ybase = clockheight/14;
//   // Xbase = clockwidth/14;
//   // Ydig = clockheight/2.8;
//   // Xdig = clockwidth/2.8;
// });

function clock(){
  var time=new Date ();
  var secs=time.getSeconds();
  var sec=-1.57 + Math.PI * secs/30;
  var mins=time.getMinutes();
  var min=-1.57 + Math.PI * mins/30;
  var hr=time.getHours();
  var hrs=-1.57 + Math.PI * hr/6 + Math.PI*parseInt(mins)/360;
  document.getElementById("center").style.left=Xpos + "px";
  document.getElementById("center").style.top=Ypos + "px";
  for (i=0; i < dots; ++i){
    document.getElementById("dig" + (i+1)).style.left=Xpos-Xclock+Xdig*Math.cos(-0.49+dots+i/1.9).toString() + "px";
    document.getElementById("dig" + (i+1)).style.top=Ypos-Yclock+Ydig*Math.sin(-0.49+dots+i/1.9).toString() + "px";
  }
  for (i=0; i < S.length; i++){
    document.getElementById("sec" + (i+1)).style.left=Xpos+i*Xbase*Math.cos(sec).toString()/2.5 + "px";
    document.getElementById("sec" + (i+1)).style.top =Ypos+i*Ybase*Math.sin(sec).toString()/2.5 + "px";
  }
  for (i=0; i < M.length; i++){
    document.getElementById("min" + (i+1)).style.left=Xpos+i*Xbase*Math.cos(min).toString()/2.5 + "px";
    document.getElementById("min" + (i+1)).style.top =Ypos+i*Ybase*Math.sin(min).toString()/2.5 + "px";
  }
  for (i=0; i < H.length; i++){
    document.getElementById("hour" + (i+1)).style.left=Xpos+i*Xbase*Math.cos(hrs).toString()/2.5 + "px";
    document.getElementById("hour" + (i+1)).style.top =Ypos+i*Ybase*Math.sin(hrs).toString()/2.5 + "px";
  }
}

function startclock(){
  setInterval(clock, 50);
}
