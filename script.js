const filters = Array.from(document.querySelectorAll(".filter"));
const cards = Array.from(document.querySelectorAll(".project-card"));

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filters.forEach((item) => item.classList.toggle("is-active", item === button));

    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(/\s+/);
      card.hidden = filter !== "all" && !tags.includes(filter);
    });
  });
});
