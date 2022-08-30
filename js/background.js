const backgroundImgList = [
  "background-img1.jpg",
  "background-img2.jpg",
  "background-img3.jpg",
  "background-img4.jpg",
  "background-img5.jpg",
  "background-img6.jpg",
  "background-img7.jpg",
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
