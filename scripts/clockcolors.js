document.addEventListener('DOMContentLoaded', function () {

  var hour = document.getElementById("hourinput");
  var min = document.getElementById("mininput");
  var sec = document.getElementById("secinput");

  var hourcolor = getComputedStyle(document.documentElement).getPropertyValue('--colorh');
  var mincolor = getComputedStyle(document.documentElement).getPropertyValue('--colorm');
  var seccolor = getComputedStyle(document.documentElement).getPropertyValue('--colors');

  hour.value = hourcolor.trim();
  min.value = mincolor.trim();
  sec.value = seccolor.trim();

  hour.addEventListener("change", changeHourColor);
  min.addEventListener("change", changeMinColor);
  sec.addEventListener("change", changeSecColor);

  function changeHourColor() {
      document.documentElement.style.setProperty('--colorh', hour.value);
  }

  function changeMinColor() {
      document.documentElement.style.setProperty('--colorm', min.value);
  }

  function changeSecColor() {
      document.documentElement.style.setProperty('--colors', sec.value);
  }

  document.getElementById("myBtn").addEventListener("click", changeDarkLight);

  // dark by default
  var dark = true;
  document.getElementById("myBtn").innerHTML="Light"

  function changeDarkLight() {
    if (dark) {
      document.documentElement.style.setProperty('--colorbkg', "white");
      document.documentElement.style.setProperty('--colordig', "#00000054");
      document.documentElement.style.setProperty('--colorsec1', "#00000045");
      document.documentElement.style.setProperty('--opacity', "0.6");
      document.documentElement.style.setProperty('--filter', "saturate(100%)");
      this.innerHTML="Dark";
      dark = false;
    } else {
      document.documentElement.style.setProperty('--colorbkg', "black");
      document.documentElement.style.setProperty('--colordig', "#ffffff7d");
      document.documentElement.style.setProperty('--colorsec1', "#ffffff6e");
      document.documentElement.style.setProperty('--opacity', "0.5");
      document.documentElement.style.setProperty('--filter', "saturate(80%) brightness(140%)");
      dark = true;
      this.innerHTML="Light";
    }

  }


});
