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
  }
  gptQuestionInput.value = "";
  isLoading = false;
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
