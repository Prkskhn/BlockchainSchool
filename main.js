let QUOTES = ["명언1", "명언2", "명언3"];

function timeChecker() {
  let time = document.querySelector(".time");

  let newDate = new Date();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();

  if (hours.toString().length < 2) {
    hours = "0" + hours.toString();
  }
  if (minutes.toString().length < 2) {
    minutes = "0" + minutes.toString();
  }
  if (seconds.toString().length < 2) {
    seconds = "0" + seconds.toString();
  }

  time.innerText = `${hours}:${minutes}:${seconds}`;
}
timeChecker();
setInterval(timeChecker, 1000);

function displayRegInput() {
  const quotesReg = document.querySelector(".quotesReg");
  quotesReg.style.display = "inline-block";
}

function randomQuotes() {
  let quote = document.querySelector(".quotes");
  let getQuotesFromLocalStorage = localStorage.getItem("quotes");
  if (!getQuotesFromLocalStorage) {
    localStorage.setItem("quotes", JSON.stringify(QUOTES));
    getQuotesFromLocalStorage = localStorage.getItem("quotes");
  }

  let displayQuote = JSON.parse(getQuotesFromLocalStorage);

  quote.innerText = displayQuote[Math.floor(Math.random() * QUOTES.length)];
}

randomQuotes();
// quote.innerText = QUOTES[];
