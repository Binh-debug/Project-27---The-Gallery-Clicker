const currentImg = document.querySelector(".current-img");
const listsImg = document.querySelectorAll(".lists-img img");

listsImg.forEach(function (img) {
  img.addEventListener("click", function (e) {
    let targetImg = e.target.src;
    currentImg.src = targetImg;
    currentImg.classList.add("animate-imgs");
    setTimeout(function () {
      currentImg.classList.remove("animate-imgs");
    }, 400);
  });
});
