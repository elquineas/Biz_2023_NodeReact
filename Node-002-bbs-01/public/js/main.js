document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav.main");
  nav?.addEventListener("click", (e) => {
    const navItem = e.target;
    const className = navItem.className;

    if (navItem.tagName === "LI") {
      const URL = (className === "home" && "/") || className;
      document.location.href = URL;
    }
  });
});
