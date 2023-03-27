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

function addNewQuotes() {
  const inputText2 = document.querySelector(".inputText");

  const getQuotes2 = localStorage.getItem("quotes");
  const getQuotesParse = JSON.parse(getQuotes2);
  getQuotesParse.push(inputText2.value);
  const setQuotes = localStorage.setItem(
    "quotes",
    JSON.stringify(getQuotesParse)
  );
  let quotesInput = document.querySelector(".quotes");
  quotesInput.innerText = inputText2.value;
  quotesInput.style.color = "red";
  const inputBoxDisplay = document.querySelector(".inputBox");
  inputText2.value = "";
  inputBoxDisplay.style.display = "none";
}
