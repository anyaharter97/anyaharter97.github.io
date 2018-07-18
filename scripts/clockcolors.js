document.addEventListener('DOMContentLoaded', function () {

  // initialize background
  var background = "#000000";
  var bkgopac = "e8";
  document.documentElement.style.setProperty('--colorbkg', background  + bkgopac);
  var dark = true;
  setBackground(bkgopac);

  document.getElementById("colorform").style.display = "none";
  document.getElementById("brightness").style.display = "none";

  document.getElementById("menu").addEventListener("click", showColorForm);

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
  var bkg = document.getElementById("bkginput");

  var hourcolor = getComputedStyle(document.documentElement).getPropertyValue('--colorh');
  var mincolor = getComputedStyle(document.documentElement).getPropertyValue('--colorm');
  var seccolor = getComputedStyle(document.documentElement).getPropertyValue('--colors');
  var bkgcolor = getComputedStyle(document.documentElement).getPropertyValue('--colorbkg');

  hour.value = hourcolor.trim();
  min.value = mincolor.trim();
  sec.value = seccolor.trim();
  bkg.value = bkgcolor.trim();
  var bkgopac = bkgcolor.slice(7);

  hour.addEventListener("input", changeHourColor);
  min.addEventListener("input", changeMinColor);
  sec.addEventListener("input", changeSecColor);
  bkg.addEventListener("input", changeBkgColor);

  function changeHourColor() {
    document.documentElement.style.setProperty('--colorh', hour.value);
  }

  function changeMinColor() {
    document.documentElement.style.setProperty('--colorm', min.value);
  }

  function changeSecColor() {
    document.documentElement.style.setProperty('--colors', sec.value);
  }

  function changeBkgColor() {
    document.documentElement.style.setProperty('--colorbkg', bkg.value + bkgopac);
  }


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
    var background = parseInt(backgroundcolor)
    brightness.value = background;
  }

  function setBackground(color) {
    bkgopac = color;
    var backgroundcolor = getComputedStyle(document.documentElement).getPropertyValue('--colorbkg');
    backgroundcolor = backgroundcolor.trim();
    var backgroundprefix = backgroundcolor.slice(1,7);
    var background = "#" + backgroundprefix + color;
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
    if (this.value < 128) {
      dark = false;
    } else {
      dark = true;
    }
    setBackground(decimalToHex(this.value));
  }

  function makeLight() {
    var backgroundcolor = getComputedStyle(document.documentElement).getPropertyValue('--colorbkg');
    backgroundcolor = backgroundcolor.trim();
    var backgroundprefix = backgroundcolor.slice(1,7);
    document.documentElement.style.setProperty('--colordig', "#" + backgroundprefix + "54");
    document.documentElement.style.setProperty('--opacity', "0.6");
    document.documentElement.style.setProperty('--filter', "saturate(100%)");
    document.getElementById("darktoggle").style.display="none";
    document.getElementById("lighttoggle").style.display="block";
    document.getElementById("bright").setAttribute("fill", "#" + backgroundprefix + "54");
    document.getElementById("menutoggle").setAttribute("fill", "#" + backgroundprefix + "54");
  }

  function makeDark() {
    var backgroundcolor = getComputedStyle(document.documentElement).getPropertyValue('--colorbkg');
    backgroundcolor = backgroundcolor.trim();
    var backgroundprefix = backgroundcolor.slice(1,7);
    document.documentElement.style.setProperty('--colordig', "#ffffff7d");
    document.documentElement.style.setProperty('--opacity', "0.5");
    document.documentElement.style.setProperty('--filter', "saturate(80%) brightness(140%)");
    document.getElementById("lighttoggle").style.display="none";
    document.getElementById("darktoggle").style.display="block";
    document.getElementById("notbright").setAttribute("fill", "#ffffff7d");
    document.getElementById("menutoggle").setAttribute("fill", "#ffffff7d");
  }




});
