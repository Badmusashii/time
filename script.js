let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

// console.log(timeHour, timeMinutes, timeseconds);

function getTime() {
  const date = new Date();
  const timeHour = date.getHours();
  const timeMinutes = date.getMinutes();
  const timeseconds = date.getSeconds();
  let h = timeHour;
  let m = timeMinutes;
  let s = timeseconds;
  let hDeg = h * 30 - 1170;
  let mDeg = m * 6 - 1170;
  let sDeg = s * 6 - 1170;
  console.log(hDeg, mDeg, sDeg);
  hour.style.transform = `rotate(${hDeg}deg)`;
  minutes.style.transform = `rotate(${mDeg}deg)`;
  seconds.style.transform = `rotate(${sDeg}deg)`;
  setTimeout(() => {
    getTime();
  }, 1000);
}

getTime();
