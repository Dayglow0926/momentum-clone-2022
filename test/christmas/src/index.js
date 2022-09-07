const christmasDate = new Date("2022", "11", "25", "00", "00", "00");
const jsClock = document.querySelector(".js-clock");

function christmasCountDown() {
  const nowDate = new Date();
  const count = Math.abs(christmasDate.getTime() - nowDate.getTime());

  const date = Math.floor(count / 86400000);
  const hour = Math.floor((count % 86400000) / 3600000);
  const min = Math.floor((count % 3600000) / 60000);
  const sec = Math.floor((count % 60000) / 1000);

  jsClock.innerHTML = `${date}d ${hour}h ${min}m ${sec}s`;
}

setInterval(christmasCountDown, 500);
