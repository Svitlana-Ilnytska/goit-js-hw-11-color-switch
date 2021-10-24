const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector("[data-action='start']"),
  stop: document.querySelector("[data-action='stop']"),
  body: document.querySelector("body"),
};

let timeInterval = 0;

const startChangeColor = (evt) => {
  timeInterval = setInterval(() => {
    let step = randomIntegerFromInterval(0, colors.length);
    console.log(step);

    document.body.style.backgroundColor = colors[step];
  }, 1000);
  refs.start.disabled = true;
};

const stopChangeColor = (evt) => {
  refs.start.disabled = false;
  clearInterval(timeInterval);
};
refs.start.addEventListener("click", startChangeColor);
refs.stop.addEventListener("click", stopChangeColor);
