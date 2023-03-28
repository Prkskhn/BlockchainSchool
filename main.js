const root = document.querySelector("#root");

const mainElFirst = `<div class="main">`;
const mainElLast = `</div>`;

const titleElFirst = `<div class="title">`;
const titleElLast = `</div>`;

const ulElFirst = `<ul>`;
const ulEllast = `</ul>`;

const liElFirst = `<li>`;
const liEllast = `</li>`;

const titleContent = `리액트를 잘하려면?`;

const howToMakeReact = [`자바스크립트 잘하기`, `css 잘하기`, `html 잘하기`];

const liArray = howToMakeReact.map((v, i) => {
  return ` ${liElFirst}${i + 1}. ${v}${liEllast}`;
});

console.log(liArray);

root.innerHTML =
  mainElFirst +
  titleElFirst +
  titleContent +
  titleElLast +
  ulElFirst +
  //   liElFirst +
  //   howToMakeReact[0] +
  //   liEllast +
  //   liElFirst +
  //   howToMakeReact[1] +
  //   liEllast +
  //   liElFirst +
  //   howToMakeReact[2] +
  //   liEllast +
  liArray;
ulEllast + mainElLast;
