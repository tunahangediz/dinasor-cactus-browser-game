const dinasor = document.querySelector("#dinasor");
const cactus = document.querySelector("#cactus");
const sound = document.querySelector("#jumpsound");

window.addEventListener("keydown", jump);

function jump(e) {
  if (e.code == "Space") {
    cactus.classList.add("slide");
    if (dinasor.className != "jump") {
      dinasor.classList.add("jump");

      sound.play();
      sound.currentTime = 0;
      setTimeout(() => {
        dinasor.classList.remove("jump");
      }, 300);
    }
  }
}
setInterval(() => {
  let dinotop = parseInt(
    window.getComputedStyle(dinasor).getPropertyValue("top")
  );
  let cactusleft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusleft < "70" && cactusleft >= "20" && dinotop >= "152") {
    alert("GAME OVER");
    cactus.classList.remove("slide");
  }
}, 10);
