const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  cards.forEach(card => {
    const title = card.textContent.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});

function openGame(name) {
  window.location.href = "games/game.html?name=" + encodeURIComponent(name);
}
