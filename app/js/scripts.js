// var body = document.querySelector("body");
// document.addEventListener("click", handleClicks);

// function handleClicks(e) {
//   if (e.target.matches(".map")) {
//     body.classList.add("showme");
//     e.preventDefault();
//   }
//   if (e.target.matches(".closer")) {
//     body.classList.remove("showme");
//     e.preventDefault();
//   }
// }
// }
// var body = document.querySelector("body");
// document.addEventListener("click", handleClicks);

// function handleClicks(e) {
//   if (e.target.matches(".map")) {
//     body.classList.add("showme");
//     e.preventDefault();
//   } else {
//     body.classList.remove("showme");
//   }
// }

var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map") || e.target.matches(".closer")) {
    body.classList.toggle("showme");
    e.preventDefault();
  } else {
    body.classList.remove("showme");
  }
}