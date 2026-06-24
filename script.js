document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     GAME ENGINE CORE
  ========================= */

  const cards = document.querySelectorAll(".card");
  const search = document.getElementById("search");

  /* -------------------------
     GAME REGISTRY (single source of truth)
  -------------------------- */
  const GAME_MAP = {
    "Drive Mad": {
      url: "https://www.crazygames.com/embed/drive-mad",
      thumb: "https://img.poki-cdn.com/cdn-cgi/image/width=200,height=200,fit=cover/games/drive-mad.png"
    },
    "Retro Bowl": {
      url: "https://www.crazygames.com/embed/retro-bowl",
      thumb: "https://img.poki-cdn.com/cdn-cgi/image/width=200,height=200,fit=cover/games/retro-bowl.png"
    },
    "Slope": {
      url: "https://www.crazygames.com/embed/slope",
      thumb: "https://img.poki-cdn.com/cdn-cgi/image/width=200,height=200,fit=cover/games/slope.png"
    },
    "2048": {
      url: "https://play2048.co/",
      thumb: "https://upload.wikimedia.org/wikipedia/commons/1/18/2048_logo.svg"
    }
  };

  /* =========================
     CLICK ENGINE (FIXED ROUTING)
  ========================= */

  cards.forEach(card => {
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
      const title = card.querySelector("h3")?.innerText?.trim();
      if (!title) return;

      const game = GAME_MAP[title];

      if (!game) {
        alert("Game not found in engine: " + title);
        return;
      }

      localStorage.setItem("lastGame", title);
      window.location.href =
        "games/game.html?name=" + encodeURIComponent(title);
    });
  });

  /* =========================
     SEARCH ENGINE (NO GLITCH FILTER)
  ========================= */

  if (search) {
    search.addEventListener("input", () => {
      const q = search.value.toLowerCase();

      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        const match = text.includes(q);

        card.style.display = match ? "" : "none";
      });
    });
  }

  /* =========================
     THUMBNAIL SAFETY ENGINE
  ========================= */

  document.querySelectorAll(".card img").forEach(img => {
    img.loading = "lazy";

    img.onerror = () => {
      img.src =
        "https://via.placeholder.com/400x250/111827/ffffff?text=Game";
    };
  });

});
