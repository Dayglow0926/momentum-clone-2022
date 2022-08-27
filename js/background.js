const backgroundImgList = [
  "ABRELSHUD.png",
  //"BALTAN.png",
  "BIACKISS_center.png",
  "ILLAKAN_center.png",
  "kouku-Saton.png",
];

const foreground = document.querySelector(".foreground");
const randomSelect = Math.floor(Math.random() * backgroundImgList.length);
const backgroundImg = backgroundImgList[randomSelect];

const background = document.createElement("img");
const background_wrapper = document.createElement("div");
background.className = "background-random-img";
background.src = `img/${backgroundImg}`;

background_wrapper.className = "background-wrapper";
background_wrapper.appendChild(background);

document.body.appendChild(background_wrapper);
