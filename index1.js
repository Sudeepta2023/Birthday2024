const imageContainerEl = document.querySelector(".image-container");
const messageEl = document.getElementById("message");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;

// Messages for images
const messages = [
  "Happy Birthday to you!",
  "Wishing you all the happiness!",
  "Enjoy your special day!",
  "Cheers to a wonderful year ahead!",
  "Another year older, wiser, and happier!",
  "Celebrating you today!",
  "May all your dreams come true!",
  "Here's to many more adventures!"
];

prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  // Update message based on current image
  const currentImageIndex = (Math.abs(x / 45) % messages.length);
  messageEl.textContent = messages[currentImageIndex];

  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 2000);
}

// Initialize gallery and message
updateGallery();