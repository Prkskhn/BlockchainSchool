function getTime() {
  const time = document.querySelector(".time");

  const newDate = new Date();

  let hours = newDate.getHours();

  let minutes = newDate.getMinutes();

  let seconds = newDate.getSeconds();

  if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
  }

  if (hours.toString().length === 1) {
    hours = "0" + hours;
  }

  if (seconds.toString().length === 1) {
    seconds = "0" + seconds;
  }

  //   time.innerText = hours + ":" + minutes + ":" + seconds;
  time.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
