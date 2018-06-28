document.addEventListener('DOMContentLoaded', function () {

  document.getElementById("colorform").style.display = "none";

  document.getElementById("menutoggle").addEventListener("click", showColorForm);

  function showColorForm() {
    var colorform = document.getElementById("colorform");
    if (colorform.style.display === "none") {
        colorform.style.display = "block";
    } else {
        colorform.style.display = "none";
    }
  }

  var hour = document.getElementById("hourinput");
  var min = document.getElementById("mininput");
  var sec = document.getElementById("secinput");

  var hourcolor = getComputedStyle(document.documentElement).getPropertyValue('--colorh');
  var mincolor = getComputedStyle(document.documentElement).getPropertyValue('--colorm');
  var seccolor = getComputedStyle(document.documentElement).getPropertyValue('--colors');

  hour.value = hourcolor.trim();
  min.value = mincolor.trim();
  sec.value = seccolor.trim();

  hour.addEventListener("input", changeHourColor);
  min.addEventListener("input", changeMinColor);
  sec.addEventListener("input", changeSecColor);

  function changeHourColor() {
      document.documentElement.style.setProperty('--colorh', hour.value);
  }

  function changeMinColor() {
      document.documentElement.style.setProperty('--colorm', min.value);
  }

  function changeSecColor() {
      document.documentElement.style.setProperty('--colors', sec.value);
  }

  document.getElementById("lighttoggle").addEventListener("click", changeLight);
  document.getElementById("darktoggle").addEventListener("click", changeDark);

  //light by default
  changeLight();
  // var dark = false;
  // document.getElementById("darktoggle").style.display="block";
  // document.getElementById("lighttoggle").style.display="none";

  function changeLight() {
      document.documentElement.style.setProperty('--colorbkg', "white");
      document.documentElement.style.setProperty('--colordig', "#00000054");
      document.documentElement.style.setProperty('--opacity', "0.6");
      document.documentElement.style.setProperty('--filter', "saturate(100%)");
      document.getElementById("darktoggle").style.display="block";
      document.getElementById("lighttoggle").style.display="none";
      dark = false;
  }

  function changeDark() {
      document.documentElement.style.setProperty('--colorbkg', "black");
      document.documentElement.style.setProperty('--colordig', "#ffffff7d");
      document.documentElement.style.setProperty('--opacity', "0.5");
      document.documentElement.style.setProperty('--filter', "saturate(80%) brightness(140%)");
      document.getElementById("lighttoggle").style.display="block";
      document.getElementById("darktoggle").style.display="none";
      dark = true;
  }




});
