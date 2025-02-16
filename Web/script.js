const addressbtn = document.querySelector("#address-form");
const addressclose = document.querySelector("#close");
// console.log(rightbtn);
addressbtn.addEventListener("click", function () {
  document.querySelector(".address-form").style.display = "flex";
});
addressclose.addEventListener("click", function () {
  document.querySelector(".address-form").style.display = "none";
});
// Slider
const rightbtn = document.querySelector(".fa-chevron-right");
const leftbtn = document.querySelector(".fa-chevron-left");
const imgnumber = document.querySelectorAll(".slider-content-left-top img");
console.log(imgnumber.length);
let index = 0;
if (rightbtn) {
  rightbtn.addEventListener("click", function () {
    index = index + 1;
    if (index > imgnumber.length - 1) {
      index = 0;
    }
    document.querySelector(
      ".slider-content-left-top"
    ).style.transform = `translateX(-${index * 100}%)`;
  });
}
if (leftbtn) {
  leftbtn.addEventListener("click", function () {
    index = index - 1;
    if (index < 0) {
      index = imgnumber.length - 1;
    }
    document.querySelector(
      ".slider-content-left-top"
    ).style.transform = `translateX(-${index * 100}%)`;
  });
}
// Slider tieu de
const imgnumberli = document.querySelectorAll(".slider-content-left-bottom li");
// console.log(imgnumberli);
imgnumber.forEach((img, i) => {
  img.addEventListener("click", function () {
    index = i;
    removeactive();
    document.querySelector(
      ".slider-content-left-top"
    ).style.transform = `translateX(-${index * 100}%)`;
    Image.classlist.add("active");
  });
});
function removeactive() {
  let imgactive = document.querySelector(".active");
  imgactive.classList.remove("active");
}
