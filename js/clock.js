const clock = document.querySelector(".clock");

function nowClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);

  const nowClock = `${hours} : ${minutes} : ${seconds}`;
  clock.innerHTML = nowClock;
}

//nowClock();
setInterval(nowClock, 1000);
