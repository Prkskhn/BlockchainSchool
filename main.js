function getTime() {
  const newDate = new Date();

  const hours = newDate.getHours().toString().padStart(2, "0");
  const minutes = newDate.getMinutes().toString().padStart(2, "0");
  const seconds = newDate.getSeconds().toString().padStart(2, "0");

  let timeView = document.querySelector(".time");

  timeView.innerText = `${hours}:${minutes}:${seconds}`;
}
getTime();
setInterval(getTime, 1000);

function quotesRandom() {
  let quotesInput = document.querySelector(".quotes");
  let getQuotes = localStorage.getItem("quotes");

  if (!getQuotes) {
    localStorage.setItem("quotes", JSON.stringify(["명언1", "명언2", "명언3"]));
    getQuotes = localStorage.getItem("quotes");
  }

  let displayQuotes = JSON.parse(getQuotes);

  quotesInput.innerText =
    displayQuotes[Math.floor(Math.random() * displayQuotes.length)];
}
quotesRandom();

function displayInputBox() {
  const displayInputBox = document.querySelector(".inputBox");
  displayInputBox.style.display = "inline-block";
}
