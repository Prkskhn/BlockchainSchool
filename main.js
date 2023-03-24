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

let quote = document.querySelector(".quotes");
let savedQuotes = localStorage.getItem("quotes");
if (!savedQuotes) {
  localStorage.setItem("quotes", JSON.stringify(QUOTES));

  savedQuotes = localStorage.getItem("quotes");
}

let getSavedQuotes = JSON.parse(savedQuotes);

let randomGetSavedQuotes =
  getSavedQuotes[Math.floor(Math.random() * getSavedQuotes.length)];

quote.innerText = randomGetSavedQuotes;

// quote.innerText(QUOTES[Math.floor([Math.random() * QUOTES.length])]);

// let randomQuote = QUOTES[Math.floor([Math.random() * QUOTES.length])];
// quote.innerText(randomQuote);

// console.log(QUOTES[Math.floor([Math.random() * QUOTES.length])]);
