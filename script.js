document.addEventListener("DOMContentLoaded", () => {

  /* CLICK FIX (works even if HTML is messy) */
  document.querySelectorAll(".card").forEach(card => {
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
      const title = card.querySelector("h3")?.innerText?.trim();

      if (!title) return;

      localStorage.setItem("lastGame", title);
      window.location.href = "games/game.html?name=" + encodeURIComponent(title);
    });
  });

  /* SEARCH FIX (stable filtering, no layout breaking) */
  const search = document.getElementById("search");

  if (search) {
    search.addEventListener("input", () => {
      const value = search.value.toLowerCase();

      document.querySelectorAll(".card").forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(value) ? "" : "none";
      });
    });
  }

  /* IMAGE FIX (stops broken thumbnails) */
  document.querySelectorAll(".card img").forEach(img => {
    img.onerror = () => {
      img.src = "https://via.placeholder.com/400x250/111827/ffffff?text=Game";
    };
  });

});
