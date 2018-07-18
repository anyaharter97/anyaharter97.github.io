document.addEventListener('DOMContentLoaded', function () {

  // toggle debug mode
  var debug = false;

  // initialize background
  var bkgcolor;
  var bkgopac;
  getBackground();
  var dark = true;
  setBackground(bkgcolor, bkgopac);

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

  hour.value = hourcolor.trim();
  min.value = mincolor.trim();
  sec.value = seccolor.trim();
  bkg.value = "#" + bkgcolor;

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
    var backgroundcolor = (bkg.value).trim();
    backgroundcolor = backgroundcolor.slice(1,7);
    setBackground(backgroundcolor, bkgopac);
  }

  document.getElementById("lighttoggle").addEventListener("click", toggleBrightness);
  document.getElementById("darktoggle").addEventListener("click", toggleBrightness);
  document.getElementById("brightness").addEventListener("input", adjustBrightness);

  function toggleBrightness() {
    if (debug){
      console.log("toggleBrightness");
    }
    var slider = document.getElementById("brightness");
    if (slider.style.display === "none") {
        slider.style.display = "block";
    } else {
        slider.style.display = "none";
    }
  }

  function setBrightness(){
    if (debug){
      console.log("setBrightness");
    }
    if (dark) {
      makeDark();
    } else {
      makeLight();
    }
  }

  function getBrightness() {
    if (debug){
      console.log("getBrightness");
    }
    var backgroundopac = "0x" + bkgopac;
    var opac = parseInt(backgroundopac);
    if (opac < 128) {
      if (debug){
        console.log("false");
      }
      return false;
    } else {
      if (debug){
        console.log("true");
      }
      return true;
    }
  }

  function getBackground(){
    if (debug){
      console.log("getBackground");
    }
    var backgroundcolor = getComputedStyle(document.documentElement).getPropertyValue('--colorbkg');
    backgroundcolor = backgroundcolor.trim();
    bkgcolor = backgroundcolor.slice(1,7);
    bkgopac = backgroundcolor.slice(7);
  }

  function adjustSlider() {
    if (debug){
      console.log("adjustSlider");
    }
    var brightness = document.getElementById("brightness");
    getBackground();
    backgroundopac = "0x" + bkgopac;
    var opac = parseInt(backgroundopac);
    brightness.value = opac;
  }

  function setBackground(color, opac) {
    if (debug){
      console.log("setBackground");
    }
    bkgcolor = color;
    bkgopac = opac;
    document.documentElement.style.setProperty('--colorbkg', "#" + bkgcolor + bkgopac);
    adjustSlider();
    dark = getBrightness();
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
    if (debug){
      console.log("adjustBrightness");
    }
    setBackground(bkgcolor, decimalToHex(this.value));
  }

  function makeLight() {
    if (debug){
      console.log("makeLight");
    }
    getBackground();
    document.documentElement.style.setProperty('--colordig', "#" + bkgcolor + "54");
    document.documentElement.style.setProperty('--opacity', "0.6");
    document.documentElement.style.setProperty('--filter', "saturate(100%)");
    document.getElementById("darktoggle").style.display="none";
    document.getElementById("lighttoggle").style.display="block";
    document.getElementById("bright").setAttribute("fill", "#" + bkgcolor + "54");
    document.getElementById("menutoggle").setAttribute("fill", "#" + bkgcolor + "54");
  }

  function makeDark() {
    if (debug){
      console.log("makeDark");
    }
    document.documentElement.style.setProperty('--colordig', "#ffffff7d");
    document.documentElement.style.setProperty('--opacity', "0.5");
    document.documentElement.style.setProperty('--filter', "saturate(80%) brightness(140%)");
    document.getElementById("lighttoggle").style.display="none";
    document.getElementById("darktoggle").style.display="block";
    document.getElementById("notbright").setAttribute("fill", "#ffffff7d");
    document.getElementById("menutoggle").setAttribute("fill", "#ffffff7d");
  }

});
