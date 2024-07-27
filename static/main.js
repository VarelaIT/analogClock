const notification = document.querySelector("#notification");
const container = document.querySelector("#app-container");

const clockContainer = document.querySelector("#clockContainer");
const clockHour = document.querySelector("#clockHour");
const clockMin = document.querySelector("#clockMin");
const clockSec = document.querySelector("#clockSec");

const digitalClock = document.querySelector("#digitalClock");

function moveHour(hour, min) {
  hour = (hour + min / 60) * 30;
  clockHour.style.transform = `rotate(${hour}deg)`;
  clockHour.style.transformBox = "fill-box";
  clockHour.style.transformOrigin = "50% 82.5%";
}

function moveMin(min, sec) {
  min = (min + sec / 60) * 6;
  clockMin.style.transform = `rotate(${min}deg)`;
  clockMin.style.transformBox = "fill-box";
  clockMin.style.transformOrigin = "50% 87%";
}

function moveSec(sec) {
  sec = sec * 6;
  clockSec.style.transform = `rotate(${sec}deg)`;
  clockSec.style.transformBox = "fill-box";
  clockSec.style.transformOrigin = "50% 89%";
}

function drawTime(hour, min, sec) {
  if (hour > 23 || hour < 0 || min > 59 || min < 0 || sec > 59 || sec < 0)
    return false;

  hour = hour % 12;
  moveHour(hour, min);
  moveMin(min, sec);
  moveSec(sec);

  return true;
}

//drawTime(6, 30, 30);
const clockInterval = setInterval(() => {
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();

  digitalClock.innerText = currentTime.toString();
  drawTime(hour, min, sec);
}, 1000);
