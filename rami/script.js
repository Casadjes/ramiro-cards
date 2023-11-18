document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("card-container");

  const staticData = [
    "Card 1",
    "Card 2",
    "Card 3",
    "Card 4",
    "Card 5",
    "Card 6",
    "Card 7",
    "Card 8",
    "Card 9",
    "Card 10",
    "Card 11",
    "Card 12",
  ];

  const createCard = (text) => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = text;
    cardContainer.appendChild(card);
  };

  const showCardsOnScroll = () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect().top;

      if (rect <= window.innerHeight / 1.5) {
        card.style.opacity = 1;
        card.style.transform = "translateX(0)";
      }
    });
  };

  const handleScroll = () => {
    staticData.forEach((text) => {
      createCard(text);
    });

    showCardsOnScroll();
  };

  window.addEventListener("scroll", showCardsOnScroll);

  handleScroll();
});
