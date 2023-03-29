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

  quotesInput.innerText = `--"${
    displayQuotes[Math.floor(Math.random() * displayQuotes.length)]
  }"--`;
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

let isLoading = false;

async function searchClick() {
  const gptQuestionInput = document.querySelector(".gptQuestionInput");
  const gptResultText = document.querySelector(".searchResult");
  if (!gptQuestionInput.value) {
    return;
  }
  if (isLoading) {
    return;
  }

  isLoading = true;
  const questionGpt = gptQuestionInput.value;
  gptQuestionInput.value = "검색중입니다.";

  const question = gptQuestionInput.value;

  const response = await axios.post(
    "https://holy-fire-2749.fly.dev/chat",
    {
      // question: question,
      question: questionGpt,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer BLOCKCHAINSCHOOL3",
      },
    }
  );
  if (response.status === 200) {
    gptResultText.style.display = "inline";
    gptResultText.innerText = response.data.choices[0].message.content;
    gptResultText.style.display = "flex";

    gptQuestionInput.value = "";
    isLoading = false;
  }
}
function onClickToggle(value) {
  const nft = document.querySelector(".nftBox");
  const nftView = document.querySelector(".nftView");

  if (value) {
    nft.style.display = "inline-block";
    nftView.style.display = "none";
  } else {
    nft.style.display = "none";
    nftView.style.display = "inline-block";
  }
}

function timeCard() {
  const time = document.querySelector(".time");
  const timeOnOff = document.querySelector(".timeOnOff");
  if (time.style.display === "none") {
    time.style.display = "flex";
    timeOnOff.style.backgroundColor = "greenyellow";
  } else {
    time.style.display = "none";
    timeOnOff.style.backgroundColor = "red";
  }
}
timeCard();

function nftCard() {
  const nftBox = document.querySelector(".nftBox");
  const nftOnOff = document.querySelector(".nftOnOff");
  if (nftBox.style.display === "none") {
    nftBox.style.display = "flex";
    nftOnOff.style.backgroundColor = "greenyellow";
  } else {
    nftBox.style.display = "none";
    nftOnOff.style.backgroundColor = "red";
  }
}
nftCard();

function quotesCard() {
  const quotesBox = document.querySelector(".quotesBox");
  const quoteOnOff = document.querySelector(".quoteOnOff");

  if (quotesBox.style.display === "none") {
    quotesBox.style.display = "flex";
    quoteOnOff.style.backgroundColor = "greenyellow";
  } else {
    quotesBox.style.display = "none";
    quoteOnOff.style.backgroundColor = "red";
    quotesRandom();
  }
}

quotesCard();

function weatherCard() {
  const weatherBox = document.querySelector(".weatherBox");
  const weatherOnOff = document.querySelector(".weatherOnOff");

  if (weatherBox.style.display === "none") {
    weatherBox.style.display = "flex";
    weatherOnOff.style.backgroundColor = "greenyellow";
  } else {
    weatherBox.style.display = "none";
    weatherOnOff.style.backgroundColor = "red";
  }
}

weatherCard();

function weatherGet() {
  const weatherIcon = document.querySelector(".weatherIcon");
  const weatherTemp = document.querySelector(".weatherTemp");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          weatherTemp.innerText =
            data.name + "," + parseInt(data.main.temp) + "°C";

          weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        });
    },
    () => alert("Not Allowed!")
  );
}

weatherGet();
