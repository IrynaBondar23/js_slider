const slider = [
  "https://cdn.britannica.com/31/255531-050-B7E07090/eiffel-tower-paris-france-champ-de-mars-view.jpg",
  "https://static.independent.co.uk/2023/07/12/14/iStock-1124556360.jpg",
  "https://uk.sacredsites.com/images/europe/austria/hallstatt_1200.jpg",
  "https://static.independent.co.uk/2023/10/12/16/newFile-1.jpg",
  "https://i.natgeofe.com/k/a6c9f195-de20-445d-9d36-745ef56042c5/OG_Colosseum_Ancient-Rome_KIDS_1122_3x2.jpg",
];
const btnPrev = document.querySelector(".previous");
const btnNext = document.querySelector(".next");
const slide = document.querySelector(".slide_img");
const slideShow = document.querySelector(".play_slide_show");
const sliderContainer = document.querySelector(".slider");

console.dir(slide);

let startIndex = 0;

function addImg(index) {
  if (index >= slider.length) {
    index = 0;
  } else if (index < 0) {
    index = slider.length - 1;
  }
  slide.src = slider[index];
  startIndex = index;
}
addImg(startIndex);

btnNext.addEventListener("click", () => {
  addImg((startIndex += 1));
});
btnPrev.addEventListener("click", () => {
  addImg((startIndex -= 1));
});

let timerId;
slideShow.addEventListener("click", () => {
  timerId = setInterval(() => {
    addImg((startIndex += 1));
  }, 3000);
  setTimeout(() => {
    clearInterval(timerId);
  }, 15000);
});
