const plusBtn = document.querySelectorAll(".plus-minus-button");
const answers = document.querySelectorAll(".answer");

plusBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (e.target.src.includes("icon-plus")) {
      e.target.src = "/images/icon-minus.svg";
    } else {
      e.target.src = "/images/icon-plus.svg";
    }
    answers[index].classList.toggle("answer-show");
    answers.forEach((answer, i) => {
      if (i !== index) {
        answer.classList.remove("answer-show");
        plusBtn[i].src = "/images/icon-plus.svg";
      }
    });
  });
});
