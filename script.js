
const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const instruction = document.getElementById("instruction");

const loveButton = document.getElementById("loveButton");
const loveMessage = document.getElementById("loveMessage");

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let isOpen = false;

envelope.addEventListener("click", function () {
  isOpen = !isOpen;

  envelope.classList.toggle("open", isOpen);

  if (isOpen) {
    instruction.textContent = "Surat kecil untukmu 💗";

    setTimeout(() => {
      message.classList.add("show");
    }, 500);

  } else {
    message.classList.remove("show");
    instruction.textContent =
      "Klik amplop untuk membuka surat 💕";
  }
});

musicButton.addEventListener("click", function () {
  if (music.paused) {
    music.play()
      .then(() => {
        musicButton.textContent = "⏸ Hentikan Musik";
      })
      .catch(() => {
        musicButton.textContent = "🎵 Coba Putar Lagi";
      });
  } else {
    music.pause();
    musicButton.textContent = "🎵 Putar Musik";
  }
});

loveButton.addEventListener("click", function () {
  loveMessage.textContent =
    "PRANKKK";

  loveButton.textContent = "GA PRANK LOVE U MOREEE💕";
});
