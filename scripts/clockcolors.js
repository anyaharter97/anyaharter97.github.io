document.addEventListener('DOMContentLoaded', function () {

  document.getElementById("colorform").style.display = "none";
  document.getElementById("brightness").style.display = "none";

  document.getElementById("darkmenu").addEventListener("click", showColorForm);
  document.getElementById("lightmenu").addEventListener("click", showColorForm);

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

// initialize background
  var initbackground = "e8";
  var dark = true;

  setBackground(initbackground);

  document.getElementById("lighttoggle").addEventListener("click", toggleBrightness);
  document.getElementById("darktoggle").addEventListener("click", toggleBrightness);
  document.getElementById("brightness").addEventListener("input", adjustBrightness);

  function toggleBrightness() {
    console.log("toggle");
    var slider = document.getElementById("brightness");
    if (slider.style.display === "none") {
        slider.style.display = "block";
    } else {
        slider.style.display = "none";
    }
  }

  function setBrightness(){
    if (dark) {
      makeDark();
    } else {
      makeLight();
    }
  }

  function adjustSlider() {
    var brightness = document.getElementById("brightness");
    var backgroundcolor = getComputedStyle(document.documentElement).getPropertyValue('--colorbkg');
    backgroundcolor = backgroundcolor.trim();
    backgroundcolor = backgroundcolor.slice(7);
    backgroundcolor = "0x" + backgroundcolor;
    background = parseInt(backgroundcolor)
    brightness.value = background;
  }

  function setBackground(color) {
    var background = "#000000" + color;
    document.documentElement.style.setProperty('--colorbkg', background);
    adjustSlider();
    setBrightness();
  }

  function decimalToHex(d) {
    var hex = Number(d).toString(16);

    while (hex.length < 2) {
        hex = "0" + hex;
    }

    return hex;
  }

  function adjustBrightness() {
    if (this.value < 127.5) {
      dark = false;
    } else {
      dark = true;
    }
    setBackground(decimalToHex(this.value));
  }

  function makeLight() {
      document.documentElement.style.setProperty('--colordig', "#00000054");
      document.documentElement.style.setProperty('--opacity', "0.6");
      document.documentElement.style.setProperty('--filter', "saturate(100%)");
      document.getElementById("lighttoggle").style.display="block";
      document.getElementById("darktoggle").style.display="none";
      document.getElementById("lightmenu").style.display="block";
      document.getElementById("darkmenu").style.display="none";
  }

  function makeDark() {
      document.documentElement.style.setProperty('--colordig', "#ffffff7d");
      document.documentElement.style.setProperty('--opacity', "0.5");
      document.documentElement.style.setProperty('--filter', "saturate(80%) brightness(140%)");
      document.getElementById("darktoggle").style.display="block";
      document.getElementById("lighttoggle").style.display="none";
      document.getElementById("darkmenu").style.display="block";
      document.getElementById("lightmenu").style.display="none";
  }




});
