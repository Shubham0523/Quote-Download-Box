// Getting All Elements
const quoteinput = document.querySelector("[name=quote]");
const authorinput = document.querySelector("[name=author]");
const app = document.getElementById("app");
const quote = document.getElementById("quote-box");
const author = document.getElementById("author-box");
const changecolor = document.getElementById("change-color");
const downloadBtn = document.getElementById("download-jpeg");

// To Change Color Of Dashboard Randomly
let colors = [
  "#0095ed",
  "#7522d7",
  "#7680b5",
  "#225566",
  "#bb0033",
  "#1ABC9C",
  "#273746",
  "#5B2C6F",
  "#95A5A6",
  "#E74C3C",
  "#EAECEE",
];
// changecolor.addEventListener("click", function (e) {
//   let abc = Math.floor(Math.random() * colors.length);
//   let newColor = colors[abc];
//   app.style.background = newColor;
// });
// addEventListender On Quote & Author To Make Value Dynamic
quoteinput.addEventListener("keyup", function (e) {
  quote.innerText = e.currentTarget.value;
});
authorinput.addEventListener("keyup", function (e) {
  author.innerText = e.currentTarget.value;
});

// To Download The Dashboard
downloadBtn.addEventListener("click", function () {
  //addEventListener On Download Btn
  html2canvas(app).then((canvas) => {
    let a = document.createElement("a");
    a.download = Math.floor(Math.random() * 100) + ".jpeg";
    a.href = canvas.toDataURL();
    a.click(); //To Make href Clickable
  });
});


// console.log('done')