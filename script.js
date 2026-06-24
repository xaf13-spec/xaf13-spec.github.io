function openGame(name) {
  localStorage.setItem("lastGame", name);
  window.location.href = "games/game.html?name=" + encodeURIComponent(name);
}

/* LIVE SEARCH (works with your existing cards only) */
const search = document.getElementById("search");

if (search) {
  search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(value) ? "block" : "none";
    });
  });
}

/* AUTO FIX BROKEN IMAGES (fallback thumbnails) */
document.querySelectorAll(".card img").forEach(img => {
  img.onerror = () => {
    img.src = "https://via.placeholder.com/400x250/1b1f36/ffffff?text=Game";
  };
});
