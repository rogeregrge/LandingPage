const waLinks = [
    "https://wa.link/o05dkc",
    "https://wa.link/nos76o",
    "https://wa.link/vt2r35",
];

function getRandomWalink() {
    const randomIndex = Math.floor(Math.random() * waLinks.length);
    return waLinks[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    const whatsappLink = document.getElementById("whatsapp-link");
    whatsappLink.addEventListener("click", function(e) {
      e.preventDefault();
      const selectedLink = getRandomWalink();
      window.open(selectedLink, "_blank");
    });
  });